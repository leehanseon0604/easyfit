const loginButton = document.getElementById("googleLoginBtn");
const loginButtonLabel = loginButton.querySelector("span");
const logoutButton = document.getElementById("logoutBtn");
const statusText = document.getElementById("status");

const firebaseConfig = {
    apiKey: "AIzaSyCboscZTe1jNvwcFN_xP6PXp_DDGe23-l4",
    authDomain: "easyfit-d1c3f.firebaseapp.com",
    projectId: "easyfit-d1c3f",
    storageBucket: "easyfit-d1c3f.firebasestorage.app",
    messagingSenderId: "716822981492",
    appId: "1:716822981492:web:cbf983649af704a21c1a21",
    measurementId: "G-6Y2TJ0BWFP"
};

const planKey = (uid) => `easyfit-saved-plan:${uid}`;
const dailyCheckPrefix = (uid) => `easyfit-daily-check:${uid}:`;
const dailyCheckKey = (uid, date) => `${dailyCheckPrefix(uid)}${date}`;

let auth;
let db;
let authSdk;
let firestoreSdk;
let pendingMigration = null;
let lastRenderedUser = "";
let authWork = Promise.resolve();

function setStatus(message, isError = false) {
    statusText.textContent = message;
    statusText.style.color = isError ? "#fee2e2" : "var(--theme-contrast)";
}

function setLoginButton(label, isDisabled = false) {
    loginButtonLabel.textContent = label;
    loginButton.disabled = isDisabled;
    loginButton.hidden = false;
}

function parseSavedJson(rawValue) {
    if (!rawValue) return null;
    try {
        return JSON.parse(rawValue);
    } catch (error) {
        console.error("저장 데이터 확인 오류:", error);
        return null;
    }
}

function savedAtValue(record) {
    const parsedTime = Date.parse(record?.savedAt || "");
    return Number.isFinite(parsedTime) ? parsedTime : 0;
}

function collectLocalData(uid) {
    const checks = [];
    const prefix = dailyCheckPrefix(uid);

    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (!key?.startsWith(prefix)) continue;
        const record = parseSavedJson(localStorage.getItem(key));
        if (record) checks.push({ date: key.slice(prefix.length), record });
    }

    return {
        sourceUid: uid,
        plan: parseSavedJson(localStorage.getItem(planKey(uid))),
        checks
    };
}

function mergeSnapshotIntoLocal(snapshot, targetUid) {
    if (!snapshot) return;

    const targetPlan = parseSavedJson(localStorage.getItem(planKey(targetUid)));
    if (snapshot.plan && (!targetPlan || savedAtValue(snapshot.plan) > savedAtValue(targetPlan))) {
        localStorage.setItem(planKey(targetUid), JSON.stringify(snapshot.plan));
    }

    snapshot.checks.forEach(({ date, record }) => {
        const targetKey = dailyCheckKey(targetUid, date);
        const targetRecord = parseSavedJson(localStorage.getItem(targetKey));
        if (!targetRecord || savedAtValue(record) > savedAtValue(targetRecord)) {
            localStorage.setItem(targetKey, JSON.stringify(record));
        }
    });
}

function removeLocalData(uid) {
    localStorage.removeItem(planKey(uid));
    const prefix = dailyCheckPrefix(uid);
    const keysToRemove = [];
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (key?.startsWith(prefix)) keysToRemove.push(key);
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
}

async function syncCloudData(user) {
    const {
        collection,
        doc,
        getDoc,
        getDocs,
        serverTimestamp,
        setDoc,
        writeBatch
    } = firestoreSdk;
    const uid = user.uid;
    const localData = collectLocalData(uid);
    const remotePlanRef = doc(db, "users", uid, "plans", "current");
    const remotePlanSnapshot = await getDoc(remotePlanRef);
    const remotePlan = remotePlanSnapshot.exists() ? remotePlanSnapshot.data() : null;

    if (remotePlan?.deleted) {
        if (!localData.plan || savedAtValue(remotePlan) >= savedAtValue(localData.plan)) {
            localStorage.removeItem(planKey(uid));
        } else {
            await setDoc(remotePlanRef, localData.plan);
        }
    } else if (localData.plan && (!remotePlan || savedAtValue(localData.plan) > savedAtValue(remotePlan))) {
        await setDoc(remotePlanRef, localData.plan);
    } else if (remotePlan && (!localData.plan || savedAtValue(remotePlan) > savedAtValue(localData.plan))) {
        localStorage.setItem(planKey(uid), JSON.stringify(remotePlan));
    }

    const localChecks = new Map(localData.checks.map(item => [item.date, item.record]));
    const remoteChecksSnapshot = await getDocs(collection(db, "users", uid, "dailyChecks"));
    const remoteDates = new Set();
    let batch = writeBatch(db);
    let batchSize = 0;
    const batchCommits = [];

    const queueRemoteWrite = (reference, data) => {
        batch.set(reference, data);
        batchSize += 1;
        if (batchSize >= 400) {
            batchCommits.push(batch.commit());
            batch = writeBatch(db);
            batchSize = 0;
        }
    };

    remoteChecksSnapshot.forEach(remoteDocument => {
        const date = remoteDocument.id;
        const remoteRecord = remoteDocument.data();
        const localRecord = localChecks.get(date);
        remoteDates.add(date);

        if (!localRecord || savedAtValue(remoteRecord) > savedAtValue(localRecord)) {
            localStorage.setItem(dailyCheckKey(uid, date), JSON.stringify(remoteRecord));
        } else if (savedAtValue(localRecord) > savedAtValue(remoteRecord)) {
            queueRemoteWrite(remoteDocument.ref, localRecord);
        }
    });

    localChecks.forEach((record, date) => {
        if (!remoteDates.has(date)) {
            queueRemoteWrite(doc(db, "users", uid, "dailyChecks", date), record);
        }
    });

    if (batchSize > 0) batchCommits.push(batch.commit());
    await Promise.all(batchCommits);

    await setDoc(doc(db, "users", uid), {
        displayName: user.displayName || "",
        email: user.email || "",
        lastSyncedAt: serverTimestamp()
    }, { merge: true });
}

async function uploadLocalChange(detail) {
    if (!auth.currentUser || auth.currentUser.isAnonymous || auth.currentUser.uid !== detail.uid) return;
    const { doc, setDoc } = firestoreSdk;
    const uid = detail.uid;

    if (detail.type === "plan") {
        const plan = parseSavedJson(localStorage.getItem(planKey(uid)));
        if (plan) await setDoc(doc(db, "users", uid, "plans", "current"), plan);
    } else if (detail.type === "plan-delete") {
        await setDoc(doc(db, "users", uid, "plans", "current"), {
            deleted: true,
            savedAt: detail.savedAt || new Date().toISOString()
        });
    } else if (detail.type === "daily-check" && detail.date) {
        const record = parseSavedJson(localStorage.getItem(dailyCheckKey(uid, detail.date)));
        if (record) await setDoc(doc(db, "users", uid, "dailyChecks", detail.date), record);
    }
}

function dispatchAuthChange(uid) {
    window.easyFitAuthUserId = uid;
    window.dispatchEvent(new CustomEvent("easyfit-auth-changed", { detail: { uid } }));
}

async function renderAuthenticatedUser(user) {
    const userSignature = `${user.uid}:${user.isAnonymous ? "anonymous" : "google"}`;
    if (lastRenderedUser === userSignature && !pendingMigration) return;
    lastRenderedUser = userSignature;

    if (user.isAnonymous) {
        setLoginButton("Google 계정에 연결");
        logoutButton.hidden = true;
        setStatus("기존 기록이 있습니다. Google 계정에 연결하면 안전하게 보관할 수 있습니다.");
        dispatchAuthChange(user.uid);
        return;
    }

    loginButton.hidden = true;
    logoutButton.hidden = false;
    setStatus("Google 계정의 기록을 동기화하는 중입니다.");

    const migration = pendingMigration;
    if (migration && migration.sourceUid !== user.uid) {
        mergeSnapshotIntoLocal(migration, user.uid);
    }

    try {
        await syncCloudData(user);
        if (migration && migration.sourceUid !== user.uid) removeLocalData(migration.sourceUid);
        const accountName = user.displayName || user.email || "Google 사용자";
        setStatus(`${accountName} 로그인됨 · 기록이 자동 동기화됩니다.`);
    } catch (error) {
        console.error("클라우드 동기화 오류:", error);
        setStatus("Google 로그인은 완료됐지만 클라우드 동기화 설정을 확인해야 합니다.", true);
    } finally {
        pendingMigration = null;
        dispatchAuthChange(user.uid);
    }
}

function renderSignedOutUser() {
    lastRenderedUser = "signed-out";
    setLoginButton("Google로 로그인");
    logoutButton.hidden = true;
    setStatus("Google로 로그인하면 다른 기기에서도 기록을 불러올 수 있습니다.");
    dispatchAuthChange(null);
}

function queueAuthRender(user) {
    authWork = authWork
        .then(() => user ? renderAuthenticatedUser(user) : renderSignedOutUser())
        .catch(error => {
            console.error("로그인 상태 처리 오류:", error);
            setStatus("로그인 상태를 처리하지 못했습니다. 페이지를 새로고침해 주세요.", true);
        });
    return authWork;
}

function isAccountConflict(error) {
    return [
        "auth/credential-already-in-use",
        "auth/email-already-in-use",
        "auth/account-exists-with-different-credential"
    ].includes(error?.code);
}

function friendlyAuthError(error) {
    const messages = {
        "auth/popup-closed-by-user": "Google 로그인 창이 닫혔습니다.",
        "auth/cancelled-popup-request": "진행 중인 로그인 창을 먼저 완료해 주세요.",
        "auth/popup-blocked": "팝업이 차단되었습니다. 브라우저에서 팝업을 허용해 주세요.",
        "auth/operation-not-allowed": "Firebase에서 Google 로그인을 먼저 활성화해야 합니다.",
        "auth/unauthorized-domain": "현재 사이트 주소를 Firebase 승인 도메인에 추가해야 합니다.",
        "auth/network-request-failed": "네트워크 연결을 확인한 뒤 다시 시도해 주세요.",
        "auth/operation-not-supported-in-this-environment": "현재 브라우저에서는 Google 로그인을 지원하지 않습니다. Chrome이나 Safari에서 열어 주세요."
    };
    return messages[error?.code] || `Google 로그인에 실패했습니다. (${error?.code || "unknown"})`;
}

async function handleGoogleLogin() {
    const {
        GoogleAuthProvider,
        linkWithPopup,
        signInWithCredential,
        signInWithPopup
    } = authSdk;
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    setLoginButton("Google 연결 중...", true);
    setStatus("Google 계정을 확인하는 중입니다.");

    try {
        const currentUser = auth.currentUser;
        let result;

        if (currentUser?.isAnonymous) {
            pendingMigration = collectLocalData(currentUser.uid);
            try {
                result = await linkWithPopup(currentUser, provider);
            } catch (error) {
                if (!isAccountConflict(error)) throw error;
                const credential = GoogleAuthProvider.credentialFromError(error);
                if (!credential) throw error;
                result = await signInWithCredential(auth, credential);
            }
        } else {
            result = await signInWithPopup(auth, provider);
        }

        await queueAuthRender(result.user);
    } catch (error) {
        console.error("Google 로그인 오류:", error);
        pendingMigration = null;
        setStatus(friendlyAuthError(error), true);
        if (auth.currentUser?.isAnonymous) setLoginButton("Google 계정에 연결");
        else setLoginButton("Google로 로그인");
    }
}

async function initializeAuthentication() {
    setLoginButton("로그인 준비 중...", true);
    try {
        const [appModule, authModule, firestoreModule] = await Promise.all([
            import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"),
            import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"),
            import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js")
        ]);
        authSdk = authModule;
        firestoreSdk = firestoreModule;

        const firebaseApp = appModule.initializeApp(firebaseConfig);
        auth = authModule.getAuth(firebaseApp);
        db = firestoreModule.getFirestore(firebaseApp);
        try {
            await authModule.setPersistence(auth, authModule.browserLocalPersistence);
        } catch (error) {
            console.warn("로그인 유지 설정을 사용할 수 없습니다:", error);
        }

        loginButton.addEventListener("click", handleGoogleLogin);
        logoutButton.addEventListener("click", async () => {
            await authModule.signOut(auth);
            window.location.reload();
        });
        window.addEventListener("easyfit-local-data-changed", async event => {
            try {
                await uploadLocalChange(event.detail || {});
            } catch (error) {
                console.error("클라우드 저장 오류:", error);
                setStatus("기기에는 저장됐지만 클라우드 동기화가 지연되고 있습니다.", true);
            }
        });

        authModule.onAuthStateChanged(auth, user => queueAuthRender(user));
    } catch (error) {
        console.error("Firebase 초기화 오류:", error);
        setLoginButton("로그인 연결 실패", true);
        setStatus("로그인 서비스를 불러오지 못했습니다. 네트워크를 확인하고 새로고침해 주세요.", true);
        dispatchAuthChange(null);
    }
}

initializeAuthentication();
