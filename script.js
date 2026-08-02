/* ====================================
   식단 데이터베이스
   ==================================== */
const dietData = {
    carbs: [
        { name: "현미밥", kcal: 153, carbs: 32.1, protein: 2.9, fat: 1.0 },
        { name: "귀리밥", kcal: 160, carbs: 31.0, protein: 4.5, fat: 2.0 },
        { name: "잡곡밥", kcal: 150, carbs: 31.0, protein: 3.4, fat: 1.0 },
        { name: "오트밀", kcal: 389, carbs: 66.3, protein: 16.9, fat: 6.9 },
        { name: "통밀빵", kcal: 247, carbs: 41.0, protein: 13.0, fat: 4.2 },
        { name: "고구마", kcal: 130, carbs: 30.0, protein: 1.4, fat: 0.2 },
        { name: "감자", kcal: 77, carbs: 17.0, protein: 2.0, fat: 0.1 },
        { name: "옥수수", kcal: 96, carbs: 21.0, protein: 3.4, fat: 1.5 }
    ],
    protein: [
        { name: "닭가슴살", kcal: 165, carbs: 0, protein: 31.0, fat: 3.6 },
        { name: "닭안심", kcal: 110, carbs: 0, protein: 24.0, fat: 1.2 },
        { name: "돼지 안심", kcal: 143, carbs: 0, protein: 26.0, fat: 3.5 },
        { name: "소고기 우둔살", kcal: 170, carbs: 0, protein: 29.0, fat: 5.0 },
        { name: "연어", kcal: 208, carbs: 0, protein: 20.0, fat: 13.0 },
        { name: "참치", kcal: 116, carbs: 0, protein: 26.0, fat: 0.8 },
        { name: "두부", kcal: 80, carbs: 1.9, protein: 8.5, fat: 4.2 },
        { name: "달걀", kcal: 143, carbs: 0.7, protein: 12.6, fat: 9.5 },
        { name: "달걀 흰자", kcal: 52, carbs: 0.7, protein: 10.9, fat: 0.2 },
        { name: "무지방 그릭요거트", kcal: 59, carbs: 3.6, protein: 10.3, fat: 0.4 }
    ],
    vegetables: [
        { name: "양상추", kcal: 15, carbs: 2.9, protein: 1.4, fat: 0.2 },
        { name: "오이", kcal: 15, carbs: 3.6, protein: 0.7, fat: 0.1 },
        { name: "파프리카", kcal: 31, carbs: 6.0, protein: 1.0, fat: 0.3 },
        { name: "당근", kcal: 41, carbs: 9.6, protein: 0.9, fat: 0.2 },
        { name: "방울토마토", kcal: 18, carbs: 3.9, protein: 0.9, fat: 0.2 },
        { name: "시금치", kcal: 23, carbs: 3.6, protein: 2.9, fat: 0.4 },
        { name: "양배추", kcal: 25, carbs: 5.8, protein: 1.3, fat: 0.1 },
        { name: "버섯", kcal: 22, carbs: 3.3, protein: 3.1, fat: 0.3 }
    ],
    fats: [
        { name: "아몬드", kcal: 579, carbs: 21.6, protein: 21.2, fat: 49.9 },
        { name: "호두", kcal: 654, carbs: 13.7, protein: 15.2, fat: 65.2 },
        { name: "캐슈넛", kcal: 553, carbs: 30.2, protein: 18.2, fat: 43.8 },
        { name: "아보카도", kcal: 160, carbs: 8.5, protein: 2.0, fat: 14.7 },
        { name: "올리브유", kcal: 884, carbs: 0, protein: 0, fat: 100 },
        { name: "들기름", kcal: 884, carbs: 0, protein: 0, fat: 100 },
        { name: "참기름", kcal: 884, carbs: 0, protein: 0, fat: 100 }
    ],
    fruits: [
        { name: "바나나", kcal: 89, carbs: 22.8, protein: 1.1, fat: 0.3 },
        { name: "사과", kcal: 52, carbs: 13.8, protein: 0.3, fat: 0.2 },
        { name: "블루베리", kcal: 57, carbs: 14.5, protein: 0.7, fat: 0.3 },
        { name: "오렌지", kcal: 47, carbs: 11.8, protein: 0.9, fat: 0.1 },
        { name: "키위", kcal: 61, carbs: 14.7, protein: 1.1, fat: 0.5 }
    ]
};

/* ====================================
   운동 데이터베이스 생성 헬퍼 함수
   ==================================== */
function createExercise(part, subPart, name, sets, reps, rest, purpose, difficulty, caution, description, mistakes) {
    return {
        part,
        subPart,
        name,
        sets,
        reps,
        rest,
        purpose,
        difficulty,
        caution,
        description,
        mistakes,
        youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' 운동방법')}`
    };
}

/* ====================================
   운동 데이터베이스
   ==================================== */
const workoutData = {
    chest: [
        // 윗가슴
        createExercise("가슴", "윗가슴", "인클라인 바벨 벤치프레스", 4, "8~12회", "90초", "상흉근 비대", "중급", "어깨가 과도하게 들리지 않도록 주의", "벤치를 30~45도 설정 후 바벨을 쇄골 아래쪽으로 내리며 가슴을 이완시킵니다.", "허리를 너무 과도하게 꺾거나 바벨을 너무 위로 내리는 실수"),
        createExercise("가슴", "윗가슴", "인클라인 덤벨 프레스", 4, "10~12회", "60초", "상흉근 비대 및 밸런스", "중급", "덤벨이 흔들리지 않게 코어에 힘을 줍니다.", "덤벨을 내리며 가슴을 늘려주고, 밀어올릴 때 가슴을 모아줍니다.", "팔꿈치가 뒤로 너무 빠지면서 어깨에 무리가 가는 실수"),
        createExercise("가슴", "윗가슴", "인클라인 머신 프레스", 3, "12~15회", "60초", "안전한 상흉근 고립", "초급", "머신 궤적에 맞춰 자연스럽게 밀어줍니다.", "의자 높이를 조절하여 손잡이가 윗가슴 위치에 오도록 하고 밉니다.", "어깨가 으쓱 올라간 상태로 미는 실수"),
        createExercise("가슴", "윗가슴", "로우 투 하이 케이블 플라이", 3, "12~15회", "60초", "상흉근 안쪽 자극", "중급", "팔꿈치를 살짝 굽힌 상태를 유지합니다.", "케이블을 아래에서 위로 끌어올리며 윗가슴을 쥐어짭니다.", "반동을 심하게 사용하여 허리로 들어올리는 실수"),
        // 중간가슴
        createExercise("가슴", "중간가슴", "벤치프레스", 4, "8~12회", "90초", "흉근 전체 크기 증가", "중급", "손목이 꺾이지 않도록 바를 단단히 잡습니다.", "바벨을 명치 살짝 위쪽으로 내렸다가 그대로 밀어올립니다.", "견갑(날개뼈)이 고정되지 않아 어깨가 뜨는 실수"),
        createExercise("가슴", "중간가슴", "덤벨프레스", 4, "10~12회", "60초", "가슴 근육 가동범위 최대화", "중급", "양팔의 균형을 맞추는 데 집중합니다.", "가슴을 열어주며 덤벨을 깊게 내리고 가슴 힘으로 밀어올립니다.", "덤벨을 밀어올릴 때 서로 부딪히게 하는 실수"),
        createExercise("가슴", "중간가슴", "체스트프레스 (머신)", 3, "12~15회", "60초", "기본 흉근 발달", "초급", "등을 패드에 밀착시킵니다.", "안정적인 자세로 그립을 쥐고 가슴을 모아준다는 느낌으로 밉니다.", "팔꿈치를 완전히 다 펴서 관절에 무리를 주는 실수"),
        // 아랫가슴
        createExercise("가슴", "아랫가슴", "디클라인 벤치프레스", 4, "8~12회", "90초", "하흉근 발달", "고급", "머리가 아래로 향하므로 혈압에 주의합니다.", "벤치 각도를 아래로 기울이고 바벨을 명치 쪽으로 내리며 프레스합니다.", "바벨을 목 쪽으로 내리는 실수"),
        createExercise("가슴", "아랫가슴", "딥스", 4, "8~12회", "90초", "하흉근 및 삼두 발달", "중급", "어깨 유연성에 맞게 가동범위를 설정합니다.", "상체를 앞으로 살짝 숙인 상태에서 팔꿈치를 굽혀 내려갔다 올라옵니다.", "상체를 세우고 수행하여 삼두에만 자극이 가는 실수"),
        createExercise("가슴", "아랫가슴", "하이 투 로우 케이블 플라이", 3, "12~15회", "60초", "하흉근 선명도 증가", "중급", "가슴을 활짝 편 상태를 유지합니다.", "위에서 아래로 원을 그리듯 케이블을 모아줍니다.", "상체가 과도하게 숙여지는 실수"),
        // 안쪽가슴
        createExercise("가슴", "가슴 안쪽", "케이블 크로스오버", 3, "12~15회", "60초", "가슴 중앙부 조임", "중급", "팔이 아닌 가슴으로 모아준다는 느낌을 유지합니다.", "양쪽 케이블을 잡고 가슴 앞으로 안듯이 모아줍니다.", "팔꿈치 각도가 계속 변하며 프레스처럼 밀어버리는 실수"),
        createExercise("가슴", "가슴 안쪽", "펙덱 플라이", 3, "12~15회", "60초", "가슴 분리도 향상", "초급", "어깨가 패드에서 떨어지지 않게 합니다.", "팔꿈치를 패드에 대거나 손잡이를 잡고 원을 그리듯 모아줍니다.", "가슴을 내밀지 않고 등이 말린 상태로 모으는 실수")
    ],
    back: [
        // 광배근
        createExercise("등", "광배근", "랫풀다운", 4, "10~12회", "60초", "광배근 너비 발달", "초급", "허리를 과도하게 꺾지 않습니다.", "바를 쇄골 쪽으로 당기며 날개뼈를 아래로 모아줍니다.", "팔 힘으로만 바를 수직으로 끌어내리는 실수"),
        createExercise("등", "광배근", "풀업", 4, "실패지점까지", "90초", "등 전체 너비 증가", "중급", "가슴을 열고 시선은 위를 향합니다.", "견갑을 하강시키며 팔꿈치를 옆구리에 찍는다는 느낌으로 당깁니다.", "반동을 심하게 쓰거나 어깨가 으쓱 올라간 상태로 당기는 실수"),
        createExercise("등", "광배근", "친업", 4, "8~12회", "90초", "광배근 하부 및 이두 발달", "중급", "언더그립으로 잡고 수행합니다.", "손바닥이 내 얼굴을 향하게 잡고 가슴을 바에 닿게 당깁니다.", "팔이 다 펴지기 전에 반동으로 올라가는 실수"),
        createExercise("등", "광배근", "스트레이트 암 풀다운", 3, "12~15회", "60초", "광배근 고립", "중급", "팔꿈치를 살짝 굽혀 고정합니다.", "바를 잡고 포물선을 그리며 허벅지 쪽으로 당겨줍니다.", "당길 때 팔꿈치가 접히면서 삼두 운동이 되는 실수"),
        // 등 상/중/하부, 승모, 기립근 (핵심 위주)
        createExercise("등", "등 상부", "와이드 시티드 로우", 4, "10~12회", "60초", "등 상부 두께 증가", "초급", "당길 때 상체가 너무 뒤로 넘어가지 않게 합니다.", "그립을 넓게 잡고 팔꿈치를 양옆으로 벌리며 명치 쪽으로 당깁니다.", "날개뼈를 접지 않고 팔만 뒤로 빼는 실수"),
        createExercise("등", "등 중부", "바벨로우", 4, "8~12회", "90초", "등 전체 두께 증가", "고급", "허리에 통증이 오면 무게를 낮춥니다.", "상체를 45도 정도 숙이고 바벨을 배꼽 쪽으로 당깁니다.", "상체를 세우면서 승모근 힘으로 들어올리는 실수"),
        createExercise("등", "등 하부", "클로즈그립 시티드로우", 4, "10~12회", "60초", "광배근 하부 발달", "초급", "배꼽 쪽으로 깊게 당겨줍니다.", "좁은 그립을 잡고 팔꿈치를 옆구리에 스치듯 당겨줍니다.", "허리를 앞뒤로 흔들며 반동으로 당기는 실수"),
        createExercise("등", "승모근", "슈러그", 3, "12~15회", "60초", "상부 승모근 발달", "초급", "목을 앞으로 빼지 않습니다.", "덤벨이나 바벨을 들고 어깨를 귀 쪽으로 으쓱 올립니다.", "어깨를 올리면서 뒤로 돌려 관절에 무리를 주는 실수"),
        createExercise("등", "척추기립근", "백익스텐션", 3, "15회", "60초", "코어 및 기립근 강화", "초급", "허리를 과도하게 뒤로 꺾지 않습니다.", "패드에 골반을 고정하고 척추를 바르게 편 상태로 상체를 숙였다 들어 올립니다.", "올라올 때 반동을 치며 허리를 활처럼 휘게 꺾는 실수")
    ],
    shoulder: [
        createExercise("어깨", "전면 삼각근", "오버헤드프레스", 4, "8~12회", "90초", "전면 어깨 및 코어 발달", "중급", "허리가 과도하게 꺾이지 않게 엉덩이에 힘을 줍니다.", "바벨을 쇄골에 얹고 정수리 위로 수직으로 밀어올립니다.", "바벨이 얼굴을 피해 곡선으로 올라가는 실수"),
        createExercise("어깨", "측면 삼각근", "덤벨 레터럴레이즈", 4, "15~20회", "60초", "어깨 넓이 증가", "초급", "승모근 개입을 최소화합니다.", "팔꿈치를 살짝 굽히고 양옆으로 멀리 던지듯 덤벨을 들어올립니다.", "어깨를 으쓱거리며 승모근으로 들어올리는 실수"),
        createExercise("어깨", "후면 삼각근", "리어델트 플라이", 3, "15~20회", "60초", "입체적인 어깨 완성", "초급", "견갑(날개뼈)을 꽉 접지 않고 어깨 관절만 사용합니다.", "머신을 뒤로 앉아 손잡이를 잡고 양옆으로 벌려줍니다.", "등 근육(능형근)을 사용하여 날개뼈를 완전히 접어버리는 실수")
    ],
    arm: [
        // 이두
        createExercise("팔", "이두 장두", "해머컬", 3, "10~12회", "60초", "이두 바깥쪽 및 전완근 발달", "초급", "팔꿈치를 옆구리에 고정합니다.", "덤벨을 세로로 잡고 망치질하듯 그대로 들어올립니다.", "반동을 이용해 허리로 들어올리는 실수"),
        createExercise("팔", "이두 단두", "EZ바 컬", 3, "10~12회", "60초", "이두 안쪽 발달 (봉우리)", "초급", "손목이 꺾이지 않게 꽉 쥡니다.", "EZ바를 잡고 이두근의 수축을 느끼며 말아 올립니다.", "내릴 때 힘을 풀고 확 떨어뜨리는 실수"),
        // 삼두
        createExercise("팔", "삼두 장두", "오버헤드 익스텐션", 3, "10~12회", "60초", "삼두 전체 볼륨 증가", "중급", "팔꿈치가 양옆으로 너무 벌어지지 않게 합니다.", "덤벨을 머리 뒤로 넘겼다가 삼두의 힘으로 위로 펴줍니다.", "허리가 과도하게 꺾이는 실수"),
        createExercise("팔", "삼두 외측두", "케이블 푸시다운", 3, "12~15회", "60초", "삼두 선명도 발달", "초급", "팔꿈치를 고정하고 누릅니다.", "케이블 바를 잡고 바닥 쪽으로 삼두를 쥐어짜며 누릅니다.", "누를 때 상체의 체중을 실어 누르는 실수")
    ],
    legs: [
        createExercise("하체", "대퇴사두근", "스쿼트", 4, "8~12회", "90초", "하체 전반 및 코어 발달", "중급", "무릎이 안쪽으로 모이지 않게 합니다.", "발을 어깨너비로 벌리고 엉덩이를 뒤로 빼며 무릎을 굽혀 앉았다 일어납니다.", "무릎이 발끝보다 과도하게 앞으로 튀어나오고 뒤꿈치가 뜨는 실수"),
        createExercise("하체", "대퇴사두근", "레그익스텐션", 3, "12~15회", "60초", "허벅지 전면 분리도 향상", "초급", "엉덩이가 패드에서 뜨지 않게 손잡이를 꽉 잡습니다.", "발목 패드를 걸고 무릎을 펴면서 허벅지 앞쪽을 수축시킵니다.", "내릴 때 무게를 통제하지 않고 툭 떨어뜨리는 실수"),
        createExercise("하체", "햄스트링", "레그컬", 3, "12~15회", "60초", "허벅지 후면 발달", "초급", "발목을 당긴 상태로 진행하면 자극이 더 좋습니다.", "엎드린 상태에서 패드를 엉덩이 쪽으로 접어 당깁니다.", "허리 반동을 튕기면서 골반이 패드에서 떨어지는 실수"),
        createExercise("하체", "둔근", "힙쓰러스트", 4, "10~12회", "90초", "엉덩이 근육 집중 발달", "중급", "허리를 꺾어서 밀어올리지 않습니다.", "벤치에 등을 대고 골반 위에 바벨을 얹은 뒤 엉덩이 힘으로 들어 올립니다.", "목을 뒤로 젖히고 허리 힘으로 들어올리는 실수")
    ],
    abs: [
        createExercise("복부", "상복부", "크런치", 3, "15~20회", "45초", "상복부 발달", "초급", "목을 꺾어 당기지 않습니다.", "바닥에 누워 무릎을 세우고 상체를 명치까지만 둥글게 말아 올립니다.", "손으로 뒤통수를 세게 잡아당겨 목에 무리를 주는 실수"),
        createExercise("복부", "하복부", "레그레이즈", 3, "15~20회", "45초", "하복부 발달", "초급", "허리가 바닥에서 뜨지 않도록 주의합니다.", "누운 상태에서 다리를 곧게 펴고 복부의 힘으로 들어 올렸다 내립니다.", "다리를 내릴 때 허리가 붕 뜨면서 허리 통증을 유발하는 실수"),
        createExercise("복부", "코어", "플랭크", 3, "60초 유지", "45초", "코어 전체 안정성 강화", "초급", "엉덩이가 너무 솟거나 처지지 않게 합니다.", "팔꿈치와 발끝으로 몸을 지탱하고 일직선을 유지하며 버팁니다.", "고개를 떨구거나 호흡을 참는 실수")
    ]
};

/* ====================================
   DOM 요소 참조 및 전역 상태
   ==================================== */
document.addEventListener("DOMContentLoaded", () => {
    // 섹션 요소
    const sectionInfo = document.getElementById("section-info");
    const sectionDiagnostic = document.getElementById("section-diagnostic");
    const sectionResult = document.getElementById("section-result");

    // 버튼 요소
    const btnNextToDiag = document.getElementById("btn-next-to-diag");
    const btnPrevToInfo = document.getElementById("btn-prev-to-info");
    const btnGenerate = document.getElementById("btn-generate");
    const btnRegenDiet = document.getElementById("btn-regen-diet");
    const btnRestart = document.getElementById("btn-restart");
    const btnSaveDailyCheck = document.getElementById("save-daily-check");
    const dailyCheckDate = document.getElementById("daily-check-date");
    const dailyCheckStatus = document.getElementById("daily-check-status");
    const dailyCheckInputs = [...document.querySelectorAll('#daily-checklist input[type="checkbox"]')];
    const calendarTitle = document.getElementById("calendar-title");
    const calendarGrid = document.getElementById("calendar-grid");
    const totalXp = document.getElementById("total-xp");
    const userLevel = document.getElementById("user-level");
    const levelProgressBar = document.getElementById("level-progress-bar");
    const levelProgressText = document.getElementById("level-progress-text");
    const levelThemeName = document.getElementById("level-theme-name");
    const themeEmblem = document.getElementById("theme-emblem");
    const themeConcept = document.getElementById("theme-concept");
    const btnCalendarPrev = document.getElementById("calendar-prev");
    const btnCalendarNext = document.getElementById("calendar-next");
    const dashboardNavButtons = [...document.querySelectorAll("[data-dashboard-page]")];
    const dashboardPages = [...document.querySelectorAll("[data-page]")];

    function showDashboardPage(requestedPage, updateUrl = true) {
        const validPages = dashboardPages.map(page => page.dataset.page);
        const pageName = validPages.includes(requestedPage) ? requestedPage : "overview";
        dashboardPages.forEach(page => page.classList.toggle("active", page.dataset.page === pageName));
        dashboardNavButtons.forEach(button => {
            const isActive = button.dataset.dashboardPage === pageName;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-current", isActive ? "page" : "false");
        });
        if (updateUrl) history.replaceState(null, "", `#${pageName}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 입력 요소 - 신체 정보
    const inputHeight = document.getElementById("height");
    const inputWeight = document.getElementById("weight");
    const inputAge = document.getElementById("age");

    // 입력 요소 - 자가진단
    const selectGoal = document.getElementById("goal");
    const targetWeightContainer = document.getElementById("target-weight-container");
    const inputTargetWeight = document.getElementById("target-weight");
    const selectBodyType = document.getElementById("body-type");
    const selectFrequency = document.getElementById("frequency");
    const selectDuration = document.getElementById("duration");
    const selectExperience = document.getElementById("experience");
    const inputWeeks = document.getElementById("weeks");

    // 계산 데이터 저장 변수
    let currentUserData = {};
    let activeUserId = window.easyFitAuthUserId || null;
    let calendarViewDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const dailyCheckItemIds = ["breakfast", "lunch", "dinner", "snack", "workout"];
    const levelThemes = [
        { min: 100, key: "legend", icon: "👑", name: "Legend", concept: "전설적인 존재", primary: "#111827", hover: "#000000", contrast: "#FFD700", gradient: "linear-gradient(135deg, #111827 0%, #111827 68%, #FFD700 100%)" },
        { min: 90, key: "champion", icon: "🏆", name: "Champion", concept: "최고의 선수", primary: "#FFD700", hover: "#EAB308", contrast: "#111827", gradient: "linear-gradient(135deg, #FFD700, #EAB308)" },
        { min: 80, key: "space", icon: "🚀", name: "Space", concept: "우주를 향한 무한한 가능성", primary: "#7C3AED", hover: "#6D28D9", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #7C3AED, #4C1D95)" },
        { min: 70, key: "cyber", icon: "⚡", name: "Cyber", concept: "미래지향적인 기술", primary: "#00E5FF", hover: "#00B8D4", contrast: "#0F172A", gradient: "linear-gradient(135deg, #00E5FF, #0891B2)" },
        { min: 60, key: "mountain", icon: "⛰️", name: "Mountain", concept: "정상에 도전하는 의지", primary: "#2563EB", hover: "#1D4ED8", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #2563EB, #1E40AF)" },
        { min: 50, key: "military", icon: "🪖", name: "Military", concept: "규율과 강인한 정신력", primary: "#556B2F", hover: "#3F5123", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #556B2F, #37451F)" },
        { min: 40, key: "power", icon: "🥊", name: "Power", concept: "강인한 힘과 투지", primary: "#DC2626", hover: "#B91C1C", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #DC2626, #991B1B)" },
        { min: 30, key: "sports", icon: "🏀", name: "Sports Arena", concept: "스포츠 선수의 열정", primary: "#F97316", hover: "#EA580C", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #F97316, #C2410C)" },
        { min: 20, key: "gym", icon: "🏋️", name: "Gym", concept: "본격적인 웨이트 트레이닝", primary: "#6B7280", hover: "#4B5563", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #6B7280, #374151)" },
        { min: 10, key: "nature", icon: "🌿", name: "Nature", concept: "건강한 습관과 성장", primary: "#22C55E", hover: "#16A34A", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #22C55E, #15803D)" },
        { min: 1, key: "beginner", icon: "🌱", name: "Beginner", concept: "운동을 처음 시작하는 초보자", primary: "#60A5FA", hover: "#3B82F6", contrast: "#FFFFFF", gradient: "linear-gradient(135deg, #60A5FA, #3B82F6)" }
    ];
    const maxLevelTheme = { key: "ascendant", icon: "🌌", name: "Ascendant", concept: "한계를 넘어선 궁극의 존재", primary: "#7C3AED", hover: "#00E5FF", contrast: "#FFFFFF", gradient: "linear-gradient(120deg, #111827 0%, #7C3AED 28%, #00E5FF 56%, #FFFFFF 78%, #FFD700 100%)" };

    const storageKey = (uid) => `easyfit-saved-plan:${uid}`;
    const localDateKey = (date = new Date()) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    const dailyCheckKey = (uid) => `easyfit-daily-check:${uid}:${localDateKey()}`;

    function calculateLevel(totalExperience) {
        let remainingXp = totalExperience;
        for (let level = 1; level <= 100; level++) {
            const requiredXp = 500 + ((level - 1) * 100);
            if (remainingXp < requiredXp) {
                return { level, isMax: false, currentXp: remainingXp, requiredXp, progress: remainingXp / requiredXp * 100 };
            }
            remainingXp -= requiredXp;
        }
        return { level: "MAX", isMax: true, currentXp: 0, requiredXp: 0, progress: 100 };
    }

    function applyLevelTheme(levelInfo, totalExperience) {
        const theme = levelInfo.isMax
            ? maxLevelTheme
            : levelThemes.find(item => levelInfo.level >= item.min);
        const root = document.documentElement;
        root.style.setProperty("--primary", theme.primary);
        root.style.setProperty("--primary-hover", theme.hover);
        root.style.setProperty("--theme-gradient", theme.gradient);
        root.style.setProperty("--theme-contrast", theme.contrast);
        document.body.dataset.levelTheme = theme.key;

        userLevel.textContent = levelInfo.isMax ? "Lv.MAX" : `Lv.${levelInfo.level}`;
        totalXp.textContent = `${totalExperience.toLocaleString()} XP`;
        levelProgressBar.style.width = `${levelInfo.progress}%`;
        levelProgressText.textContent = levelInfo.isMax
            ? "최고 레벨 달성 · XP MAX"
            : `${levelInfo.currentXp.toLocaleString()} / ${levelInfo.requiredXp.toLocaleString()} XP`;
        levelThemeName.textContent = `${theme.icon} ${theme.name}`;
        themeEmblem.textContent = theme.icon;
        themeConcept.textContent = theme.concept;
    }

    function getXpHistory(uid) {
        const history = { totalXp: 0, records: new Map() };
        if (!uid) return history;
        const prefix = `easyfit-daily-check:${uid}:`;
        const savedRecords = [];

        for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index);
            if (!key?.startsWith(prefix)) continue;
            try {
                const record = JSON.parse(localStorage.getItem(key));
                savedRecords.push({ date: key.slice(prefix.length), record });
            } catch (error) {
                console.error("경험치 기록 확인 오류:", error);
            }
        }

        savedRecords.sort((a, b) => a.date.localeCompare(b.date));
        let fullCompletionStreak = 0;
        let lastFullDay = null;

        savedRecords.forEach(({ date, record }) => {
            const completedCount = dailyCheckItemIds.filter(itemId => Boolean(record.items?.[itemId])).length;
            const isFull = completedCount === dailyCheckItemIds.length;
            const [year, month, day] = date.split("-").map(Number);
            const currentDay = Date.UTC(year, month - 1, day) / 86400000;
            let multiplier = 1;

            if (isFull) {
                fullCompletionStreak = lastFullDay !== null && currentDay === lastFullDay + 1
                    ? fullCompletionStreak + 1
                    : 1;
                multiplier = fullCompletionStreak;
                lastFullDay = currentDay;
            } else {
                fullCompletionStreak = 0;
                lastFullDay = null;
            }

            const earnedXp = isFull ? 120 * multiplier : completedCount * 20;
            history.totalXp += earnedXp;
            history.records.set(date, { completedCount, isFull, multiplier, streak: fullCompletionStreak, earnedXp });
        });
        return history;
    }

    function getProspectiveXp(uid, completedCount) {
        if (completedCount < dailyCheckItemIds.length) {
            return { earnedXp: completedCount * 20, multiplier: 1 };
        }
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const previousRecord = getXpHistory(uid).records.get(localDateKey(yesterday));
        const multiplier = previousRecord?.isFull ? previousRecord.streak + 1 : 1;
        return { earnedXp: 120 * multiplier, multiplier };
    }

    function renderCalendar(uid) {
        const year = calendarViewDate.getFullYear();
        const month = calendarViewDate.getMonth();
        const xpHistory = getXpHistory(uid);
        const firstWeekday = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

        calendarTitle.textContent = `${year}년 ${month + 1}월`;
        applyLevelTheme(calculateLevel(xpHistory.totalXp), xpHistory.totalXp);
        calendarGrid.innerHTML = weekdays.map(day => `<div class="calendar-weekday">${day}</div>`).join("");

        for (let blank = 0; blank < firstWeekday; blank++) {
            calendarGrid.insertAdjacentHTML("beforeend", '<div class="calendar-day empty" aria-hidden="true"></div>');
        }

        for (let day = 1; day <= lastDay; day++) {
            const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const isToday = dateKey === localDateKey();
            const dayRecord = xpHistory.records.get(dateKey);
            const isCompleted = Boolean(dayRecord?.isFull);
            const isPartial = Boolean(dayRecord && !dayRecord.isFull);
            const classes = ["calendar-day", isToday ? "today" : "", isCompleted ? "completed" : "", isPartial ? "partial" : ""].filter(Boolean).join(" ");
            calendarGrid.insertAdjacentHTML("beforeend", `
                <div class="${classes}" title="${dayRecord ? `${dayRecord.completedCount}/5 완료 · ${dayRecord.earnedXp} XP 획득` : ""}">
                    <span>${day}</span>
                    ${isCompleted ? `<i class="fa-solid fa-check"></i>${dayRecord.multiplier > 1 ? `<small>×${dayRecord.multiplier}</small>` : ""}` : isPartial ? `<small>${dayRecord.completedCount}/5</small>` : ""}
                </div>`);
        }
    }

    function updateDailyCheckButton() {
        const completedCount = dailyCheckInputs.filter(input => input.checked).length;
        const hasCompletedItem = completedCount > 0;
        const isLocked = dailyCheckInputs.some(input => input.disabled);
        btnSaveDailyCheck.disabled = !activeUserId || !hasCompletedItem || isLocked;
        if (activeUserId && !isLocked) {
            const xpPreview = getProspectiveXp(activeUserId, completedCount);
            const bonusText = completedCount === dailyCheckInputs.length
                ? ` · 올클리어 보너스${xpPreview.multiplier > 1 ? ` × ${xpPreview.multiplier} 연속 배수` : ""}`
                : "";
            dailyCheckStatus.textContent = `${completedCount}/${dailyCheckInputs.length}개 완료 · 저장 시 +${xpPreview.earnedXp} XP${bonusText}`;
        }
    }

    function loadDailyChecklist(uid) {
        dailyCheckDate.textContent = new Intl.DateTimeFormat("ko-KR", { dateStyle: "full" }).format(new Date());
        renderCalendar(uid);
        dailyCheckInputs.forEach(input => {
            input.checked = false;
            input.disabled = !uid;
        });

        if (!uid) {
            dailyCheckStatus.textContent = "로그인하면 오늘의 실천 기록을 저장할 수 있습니다.";
            updateDailyCheckButton();
            return;
        }

        const savedRecord = localStorage.getItem(dailyCheckKey(uid));
        if (savedRecord) {
            try {
                const record = JSON.parse(savedRecord);
                dailyCheckInputs.forEach(input => {
                    input.checked = Boolean(record.items?.[input.value]);
                    input.disabled = true;
                });
                const completedCount = dailyCheckInputs.filter(input => input.checked).length;
                const dayXp = getXpHistory(uid).records.get(record.date || localDateKey());
                const earnedXp = dayXp?.earnedXp ?? completedCount * 20;
                dailyCheckStatus.textContent = `오늘 기록 완료 · ${completedCount}/${dailyCheckInputs.length}개 실천 · +${earnedXp} XP`;
                btnSaveDailyCheck.textContent = `오늘 기록 완료 · ${earnedXp} XP 획득`;
            } catch (error) {
                console.error("오늘의 체크리스트 복원 오류:", error);
                localStorage.removeItem(dailyCheckKey(uid));
            }
        } else {
            dailyCheckStatus.textContent = "완료한 항목마다 20 XP, 5개 올클리어 시 보너스 20 XP를 받을 수 있습니다.";
            btnSaveDailyCheck.textContent = "오늘 기록 저장하기";
        }
        updateDailyCheckButton();
    }

    function saveDailyChecklist() {
        if (!activeUserId || localStorage.getItem(dailyCheckKey(activeUserId))) return;
        const completedCount = dailyCheckInputs.filter(input => input.checked).length;
        if (completedCount === 0) return;

        const items = Object.fromEntries(dailyCheckInputs.map(input => [input.value, input.checked]));
        localStorage.setItem(dailyCheckKey(activeUserId), JSON.stringify({
            date: localDateKey(),
            savedAt: new Date().toISOString(),
            completedCount,
            items
        }));
        loadDailyChecklist(activeUserId);
    }

    function saveCurrentPlan() {
        if (!activeUserId || !currentUserData.recommendedCalories) return;

        const savedPlan = {
            version: 5,
            savedAt: new Date().toISOString(),
            userData: currentUserData,
            result: {
                bmi: document.getElementById("res-bmi").textContent,
                bmiDesc: document.getElementById("res-bmi-desc").textContent,
                bmr: document.getElementById("res-bmr").textContent,
                calories: document.getElementById("res-cal").textContent,
                carbsText: document.getElementById("bar-carbs").textContent,
                carbsWidth: document.getElementById("bar-carbs").style.width,
                proteinText: document.getElementById("bar-protein").textContent,
                proteinWidth: document.getElementById("bar-protein").style.width,
                fatText: document.getElementById("bar-fat").textContent,
                fatWidth: document.getElementById("bar-fat").style.width,
                macroHtml: document.getElementById("macro-text").innerHTML,
                dietHtml: document.getElementById("diet-container").innerHTML,
                splitType: document.getElementById("res-split-type").textContent,
                workoutHtml: document.getElementById("workout-container").innerHTML
            }
        };

        localStorage.setItem(storageKey(activeUserId), JSON.stringify(savedPlan));
    }

    function fillSavedInputs(data) {
        inputHeight.value = data.height ?? "";
        inputWeight.value = data.weight ?? "";
        inputAge.value = data.age ?? "";
        const genderInput = document.querySelector(`input[name="gender"][value="${data.gender}"]`);
        if (genderInput) genderInput.checked = true;
        selectGoal.value = data.goal || "diet";
        inputTargetWeight.value = data.targetWeight ?? "";
        selectBodyType.value = data.bodyType || "normal";
        selectFrequency.value = data.frequency || "2-3";
        selectDuration.value = data.duration || "30-60";
        selectExperience.value = data.experience || "beginner";
        inputWeeks.value = data.weeks ?? "";
        targetWeightContainer.classList.toggle("hidden", data.goal === "health");
    }

    function restoreSavedPlan(uid) {
        if (!uid) return;

        try {
            const rawPlan = localStorage.getItem(storageKey(uid));
            if (!rawPlan) return;
            const savedPlan = JSON.parse(rawPlan);
            if (!savedPlan.userData || !savedPlan.result) return;

            currentUserData = savedPlan.userData;
            fillSavedInputs(currentUserData);

            if (savedPlan.version !== 5) {
                generateResults(currentUserData);
                sectionInfo.classList.add("hidden");
                sectionDiagnostic.classList.add("hidden");
                sectionResult.classList.remove("hidden");
                sectionResult.classList.add("active");
                saveCurrentPlan();
                return;
            }

            const result = savedPlan.result;
            document.getElementById("res-bmi").textContent = result.bmi;
            document.getElementById("res-bmi-desc").textContent = result.bmiDesc;
            document.getElementById("res-bmr").textContent = result.bmr;
            document.getElementById("res-cal").textContent = result.calories;
            document.getElementById("bar-carbs").textContent = result.carbsText;
            document.getElementById("bar-carbs").style.width = result.carbsWidth;
            document.getElementById("bar-protein").textContent = result.proteinText;
            document.getElementById("bar-protein").style.width = result.proteinWidth;
            document.getElementById("bar-fat").textContent = result.fatText;
            document.getElementById("bar-fat").style.width = result.fatWidth;
            document.getElementById("macro-text").innerHTML = result.macroHtml;
            document.getElementById("diet-container").innerHTML = result.dietHtml;
            document.getElementById("res-split-type").textContent = result.splitType;
            document.getElementById("workout-container").innerHTML = result.workoutHtml;

            sectionInfo.classList.add("hidden");
            sectionDiagnostic.classList.add("hidden");
            sectionResult.classList.remove("hidden");
            sectionResult.classList.add("active");
        } catch (error) {
            console.error("저장된 프로그램 복원 오류:", error);
            localStorage.removeItem(storageKey(uid));
        }
    }

    window.addEventListener("easyfit-auth-changed", (event) => {
        activeUserId = event.detail.uid;
        if (activeUserId) restoreSavedPlan(activeUserId);
        loadDailyChecklist(activeUserId);
    });

    if (activeUserId) restoreSavedPlan(activeUserId);
    loadDailyChecklist(activeUserId);

    dailyCheckInputs.forEach(input => input.addEventListener("change", updateDailyCheckButton));
    btnSaveDailyCheck.addEventListener("click", saveDailyChecklist);
    btnCalendarPrev.addEventListener("click", () => {
        calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1);
        renderCalendar(activeUserId);
    });
    btnCalendarNext.addEventListener("click", () => {
        calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1);
        renderCalendar(activeUserId);
    });
    dashboardNavButtons.forEach(button => {
        button.addEventListener("click", () => showDashboardPage(button.dataset.dashboardPage));
    });
    window.addEventListener("hashchange", () => showDashboardPage(window.location.hash.slice(1), false));
    showDashboardPage(window.location.hash.slice(1), false);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") loadDailyChecklist(activeUserId);
    });

    /* ====================================
       1. 이벤트 리스너 설정
       ==================================== */

    // 운동 목적 변경에 따른 목표 체중 입력란 표시 여부
    selectGoal.addEventListener("change", () => {
        if (selectGoal.value === "diet" || selectGoal.value === "muscle") {
            targetWeightContainer.classList.remove("hidden");
        } else {
            targetWeightContainer.classList.add("hidden");
        }
    });

    // 섹션 1 -> 섹션 2 이동 (신체정보 검수)
    btnNextToDiag.addEventListener("click", () => {
        const height = parseFloat(inputHeight.value);
        const weight = parseFloat(inputWeight.value);
        const age = parseInt(inputAge.value);

        if (!height || height <= 0 || !weight || weight <= 0 || !age || age <= 0) {
            alert("키, 몸무게, 나이를 바르게 입력해주세요.");
            return;
        }

        switchSection(sectionInfo, sectionDiagnostic);
    });

    // 섹션 2 -> 섹션 1 이동
    btnPrevToInfo.addEventListener("click", () => {
        switchSection(sectionDiagnostic, sectionInfo);
    });

    // 결과 생성 버튼 클릭
    btnGenerate.addEventListener("click", () => {
        if (!activeUserId) {
            alert("맞춤 프로그램을 저장하려면 먼저 상단의 익명 로그인 버튼을 눌러주세요.");
            return;
        }

        const weeks = parseInt(inputWeeks.value);
        if (!weeks || weeks <= 0) {
            alert("프로그램 이용 기간을 올바르게 입력해주세요.");
            return;
        }

        // 데이터 수집
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const height = parseFloat(inputHeight.value);
        const weight = parseFloat(inputWeight.value);
        const age = parseInt(inputAge.value);
        const goal = selectGoal.value;
        const targetWeight = parseFloat(inputTargetWeight.value) || weight;
        const bodyType = selectBodyType.value;
        const frequency = selectFrequency.value;
        const duration = selectDuration.value;
        const experience = selectExperience.value;

        currentUserData = {
            gender, height, weight, age,
            goal, targetWeight, bodyType,
            frequency, duration, experience, weeks
        };

        // 결과 계산 및 화면 출력
        generateResults(currentUserData);

        // 화면 전환
        switchSection(sectionDiagnostic, sectionResult);
        showDashboardPage("overview");
        saveCurrentPlan();
    });

    // 식단 다시 뽑기 버튼
    btnRegenDiet.addEventListener("click", () => {
        if (currentUserData.recommendedCalories) {
            renderDietPlan(currentUserData.recommendedCalories, currentUserData.macroTargets);
            saveCurrentPlan();
        }
    });

    // 처음으로 돌아가기 버튼
    btnRestart.addEventListener("click", () => {
        if (activeUserId) localStorage.removeItem(storageKey(activeUserId));
        currentUserData = {};
        document.getElementById("form-info").reset();
        document.getElementById("form-diagnostic").reset();
        targetWeightContainer.classList.remove("hidden");
        
        switchSection(sectionResult, sectionInfo);
    });

    /* ====================================
       2. 화면 전환 헬퍼 함수
       ==================================== */
    function switchSection(fromSection, toSection) {
        fromSection.classList.add("hidden");
        fromSection.classList.remove("active");
        
        toSection.classList.remove("hidden");
        toSection.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    /* ====================================
       3. 핵심 계산 및 결과 생성 함수
       ==================================== */
    function generateResults(data) {
        // A. BMI 계산식: 몸무게 ÷ (키(m)²)
        const heightM = data.height / 100;
        const bmi = (data.weight / (heightM * heightM)).toFixed(1);
        let bmiDesc = "";
        
        if (bmi < 18.5) bmiDesc = "저체중";
        else if (bmi < 23) bmiDesc = "정상";
        else if (bmi < 25) bmiDesc = "과체중";
        else bmiDesc = "비만";

        // B. BMR (기초대사량) 계산식
        let bmr = 0;
        if (data.gender === "male") {
            bmr = 88.362 + (13.397 * data.weight) + (4.799 * data.height) - (5.677 * data.age);
        } else {
            bmr = 447.593 + (9.247 * data.weight) + (3.098 * data.height) - (4.330 * data.age);
        }
        bmr = Math.round(bmr);

        // C. 활동량 및 목적에 따른 권장 하루 칼로리
        let activityMultiplier = 1.375; // 주 2-3회 기준 기본 활동량
        if (data.frequency === "4-5") activityMultiplier = 1.55;
        if (data.frequency === "5+") activityMultiplier = 1.725;

        const maintenanceCal = bmr * activityMultiplier;
        let recommendedCalories = maintenanceCal;

        if (data.goal === "diet") {
            recommendedCalories = maintenanceCal - 400; // 약 300~500kcal 적게
        } else if (data.goal === "muscle") {
            recommendedCalories = maintenanceCal + 250; // 약 200~300kcal 높게
        }
        data.targetProteinGrams = Math.round(data.weight * 2);
        const minimumCaloriesForProteinPlan = (data.targetProteinGrams * 4) + 600;
        recommendedCalories = Math.min(2500, Math.max(Math.round(recommendedCalories), Math.min(2500, minimumCaloriesForProteinPlan)));
        data.recommendedCalories = recommendedCalories;

        // 화면 표출 - 신체 스탯
        document.getElementById("res-bmi").textContent = bmi;
        document.getElementById("res-bmi-desc").textContent = `(${bmiDesc})`;
        document.getElementById("res-bmr").textContent = bmr.toLocaleString();
        document.getElementById("res-cal").textContent = recommendedCalories.toLocaleString();

        // D. 영양소 비율 계산 (탄수화물 : 단백질 : 지방)
        data.macroTargets = calculateMacros(recommendedCalories, data);

        // E. 식단 추천 생성
        renderDietPlan(recommendedCalories, data.macroTargets);

        // F. 운동 프로그램 생성
        renderWorkoutPlan(data);
    }

    /* ====================================
       4. 영양소 비율 계산 및 표시
       ==================================== */
    function calculateMacros(calories, data) {
        const proteinGrams = data.targetProteinGrams;
        const proteinCalories = proteinGrams * 4;
        const caloriesAfterProtein = Math.max(0, calories - proteinCalories);
        const desiredFatRatio = data.goal === "muscle" ? 0.20 : 0.25;
        const fatCalories = Math.min(calories * desiredFatRatio, caloriesAfterProtein * 0.5);
        const fatGrams = Math.round(fatCalories / 9);
        const carbGrams = Math.max(0, Math.round((calories - proteinCalories - (fatGrams * 9)) / 4));

        const carbRatio = (carbGrams * 4) / calories;
        const proteinRatio = proteinCalories / calories;
        const fatRatio = (fatGrams * 9) / calories;

        // 프로그레스 바 적용
        document.getElementById("bar-carbs").style.width = `${carbRatio * 100}%`;
        document.getElementById("bar-carbs").textContent = `탄수화물 ${Math.round(carbRatio * 100)}%`;

        document.getElementById("bar-protein").style.width = `${proteinRatio * 100}%`;
        document.getElementById("bar-protein").textContent = `단백질 ${Math.round(proteinRatio * 100)}%`;

        document.getElementById("bar-fat").style.width = `${fatRatio * 100}%`;
        document.getElementById("bar-fat").textContent = `지방 ${Math.round(fatRatio * 100)}%`;

        // 텍스트 표출
        const macroText = document.getElementById("macro-text");
        macroText.innerHTML = `
            <span><strong>탄수화물:</strong> ${carbGrams}g</span>
            <span><strong>단백질 (체중×2):</strong> ${proteinGrams}g</span>
            <span><strong>지방:</strong> ${fatGrams}g</span>
        `;

        return { carbGrams, proteinGrams, fatGrams };
    }

    /* ====================================
       5. 4끼 식단 랜덤 생성
       ==================================== */
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function renderDietPlan(totalCal, macroTargets) {
        const dietContainer = document.getElementById("diet-container");
        dietContainer.innerHTML = "";

        const meals = [
            { name: "아침 🍳", cWeight: 0.25, kind: "breakfast" },
            { name: "점심 🍱", cWeight: 0.35, kind: "lunch" },
            { name: "저녁 🥗", cWeight: 0.30, kind: "dinner" },
            { name: "간식 🍌", cWeight: 0.10, kind: "snack" }
        ];

        const dailyTotal = { kcal: 0, carbs: 0, protein: 0, fat: 0 };
        const mealCards = [];

        const servingFromGrams = (food, requestedGrams, step = 1) => {
            const grams = Math.max(step, Math.round(requestedGrams / step) * step);
            const ratio = grams / 100;
            return {
                ...food,
                grams,
                totalKcal: food.kcal * ratio,
                totalCarbs: food.carbs * ratio,
                totalProtein: food.protein * ratio,
                totalFat: food.fat * ratio
            };
        };

        const servingFromCalories = (food, targetCalories, step = 1) =>
            servingFromGrams(food, targetCalories / food.kcal * 100, step);

        const solveCarbAndProtein = (carbFood, proteinFood, targetCalories, targetProtein) => {
            const denominator = (carbFood.kcal * proteinFood.protein) - (proteinFood.kcal * carbFood.protein);
            let carbUnits = 0;
            let proteinUnits = 0;

            if (Math.abs(denominator) > 0.001) {
                carbUnits = ((targetCalories * proteinFood.protein) - (proteinFood.kcal * targetProtein)) / denominator;
                proteinUnits = ((carbFood.kcal * targetProtein) - (targetCalories * carbFood.protein)) / denominator;
            }

            if (carbUnits < 0 || proteinUnits < 0 || !Number.isFinite(carbUnits) || !Number.isFinite(proteinUnits)) {
                proteinUnits = Math.max(0, targetProtein / proteinFood.protein);
                carbUnits = Math.max(0, (targetCalories - (proteinUnits * proteinFood.kcal)) / carbFood.kcal);
            }

            return {
                carb: servingFromGrams(carbFood, carbUnits * 100),
                protein: servingFromGrams(proteinFood, proteinUnits * 100)
            };
        };

        const foodsNamed = (category, names) => dietData[category].filter(food => names.includes(food.name));

        const renderFood = (role, icon, color, food) => `
            <div class="diet-item">
                <div class="food-heading">
                    <span class="food-role"><i class="fa-solid ${icon}" style="color:${color}"></i> ${role}</span>
                    <strong>${food.name}</strong>
                    <b>${food.grams}g</b>
                </div>
                <div class="food-nutrition" aria-label="${food.name} 영양성분">
                    <span><strong>${Math.round(food.totalKcal)}</strong> kcal</span>
                    <span>탄 ${food.totalCarbs.toFixed(1)}g</span>
                    <span>단 ${food.totalProtein.toFixed(1)}g</span>
                    <span>지 ${food.totalFat.toFixed(1)}g</span>
                </div>
            </div>`;

        meals.forEach(meal => {
            const mealCal = Math.round(totalCal * meal.cWeight);
            const mealProteinTarget = macroTargets.proteinGrams * meal.cWeight;
            const mealFatCalories = macroTargets.fatGrams * 9 * meal.cWeight;
            let foods = [];

            if (meal.kind === "snack") {
                const snackProtein = foodsNamed("protein", ["무지방 그릭요거트"]);
                const snackFats = foodsNamed("fats", ["아몬드", "호두", "캐슈넛"]);
                const carbFood = getRandomItem(dietData.fruits);
                const proteinFood = getRandomItem(snackProtein);
                const fatServing = servingFromCalories(getRandomItem(snackFats), mealFatCalories);
                const solved = solveCarbAndProtein(
                    carbFood,
                    proteinFood,
                    Math.max(20, mealCal - fatServing.totalKcal),
                    Math.max(1, mealProteinTarget - fatServing.totalProtein)
                );
                foods = [
                    { role: "과일", icon: "fa-apple-whole", color: "#ef4444", food: solved.carb },
                    { role: "유제품", icon: "fa-cow", color: "var(--protein)", food: solved.protein },
                    { role: "견과류", icon: "fa-seedling", color: "var(--fat)", food: fatServing }
                ];
            } else {
                const vegetableGrams = meal.kind === "breakfast" ? 100 : 150;
                const vegetablePool = meal.kind === "breakfast"
                    ? foodsNamed("vegetables", ["오이", "방울토마토", "파프리카"])
                    : dietData.vegetables;
                const carbPool = meal.kind === "breakfast"
                    ? foodsNamed("carbs", ["오트밀", "통밀빵", "고구마"])
                    : dietData.carbs;
                const proteinPool = meal.kind === "breakfast"
                    ? foodsNamed("protein", ["달걀 흰자", "무지방 그릭요거트"])
                    : dietData.protein.filter(food => !["무지방 그릭요거트", "달걀", "달걀 흰자", "두부"].includes(food.name));
                const fatPool = meal.kind === "breakfast"
                    ? foodsNamed("fats", ["아몬드", "호두", "캐슈넛", "아보카도"])
                    : dietData.fats;
                const vegetableFood = getRandomItem(vegetablePool);
                const vegetableServing = servingFromGrams(vegetableFood, vegetableGrams);
                const fatServing = servingFromCalories(getRandomItem(fatPool), mealFatCalories);
                const solved = solveCarbAndProtein(
                    getRandomItem(carbPool),
                    getRandomItem(proteinPool),
                    Math.max(20, mealCal - vegetableServing.totalKcal - fatServing.totalKcal),
                    Math.max(1, mealProteinTarget - vegetableServing.totalProtein - fatServing.totalProtein)
                );

                foods = [
                    { role: "탄수화물", icon: "fa-bowl-rice", color: "var(--carbs)", food: solved.carb },
                    { role: "단백질", icon: "fa-egg", color: "var(--protein)", food: solved.protein },
                    { role: "채소", icon: "fa-carrot", color: "#22c55e", food: vegetableServing },
                    { role: "지방", icon: "fa-seedling", color: "var(--fat)", food: fatServing }
                ];
            }

            const mealTotal = foods.reduce((total, item) => {
                total.kcal += item.food.totalKcal;
                total.carbs += item.food.totalCarbs;
                total.protein += item.food.totalProtein;
                total.fat += item.food.totalFat;
                return total;
            }, { kcal: 0, carbs: 0, protein: 0, fat: 0 });

            Object.keys(dailyTotal).forEach(key => dailyTotal[key] += mealTotal[key]);

            const mealCard = document.createElement("div");
            mealCard.className = "diet-card";
            mealCard.innerHTML = `
                <div class="meal-heading">
                    <h3>${meal.name}</h3>
                    <span>목표 ${mealCal} · 구성 ${Math.round(mealTotal.kcal)} kcal</span>
                </div>
                ${foods.map(item => renderFood(item.role, item.icon, item.color, item.food)).join("")}
                <div class="meal-total">
                    <span>끼니 합계</span>
                    <strong>탄 ${mealTotal.carbs.toFixed(1)}g · 단 ${mealTotal.protein.toFixed(1)}g · 지 ${mealTotal.fat.toFixed(1)}g</strong>
                </div>
            `;
            mealCards.push(mealCard);
        });

        const summary = document.createElement("div");
        summary.className = "diet-summary";
        summary.innerHTML = `
            <div><span>하루 목표</span><strong>${Math.round(totalCal).toLocaleString()} kcal</strong></div>
            <div><span>추천 식단 합계</span><strong>${Math.round(dailyTotal.kcal).toLocaleString()} kcal</strong></div>
            <div><span>영양성분 합계</span><strong>탄 ${dailyTotal.carbs.toFixed(0)}g · 단 ${dailyTotal.protein.toFixed(0)}g (목표 ${macroTargets.proteinGrams}g) · 지 ${dailyTotal.fat.toFixed(0)}g</strong></div>
        `;
        dietContainer.appendChild(summary);
        mealCards.forEach(card => dietContainer.appendChild(card));
    }

    /* ====================================
       6. 분할 운동 프로그램 생성 알고리즘
       ==================================== */
    function renderWorkoutPlan(data) {
        const workoutContainer = document.getElementById("workout-container");
        workoutContainer.innerHTML = "";

        const splitTypeSpan = document.getElementById("res-split-type");
        let splitDays = [];
        let splitName = "";

        // 운동 주간 횟수에 따른 자동 분할 로직
        if (data.frequency === "2-3") {
            splitName = "주 2~3회 무분할/상하체 루틴";
            splitDays = [
                { title: "Day 1: 전신 A", parts: ["chest", "back", "legs", "abs"] },
                { title: "Day 2: 전신 B", parts: ["shoulder", "arm", "legs", "abs"] }
            ];
        } else if (data.frequency === "4-5") {
            splitName = "주 4~5회 2분할 (Upper/Lower) 루틴";
            splitDays = [
                { title: "Day 1: 상체 (Upper A)", parts: ["chest", "back", "shoulder"] },
                { title: "Day 2: 하체 및 코어 (Lower A)", parts: ["legs", "abs"] },
                { title: "Day 3: 상체 (Upper B - 팔 집중)", parts: ["chest", "back", "arm"] },
                { title: "Day 4: 하체 및 코어 (Lower B)", parts: ["legs", "abs"] }
            ];
        } else {
            splitName = "주 5회 이상 3분할 (Push/Pull/Legs) 루틴";
            splitDays = [
                { title: "Day 1: 밀기 (Push - 가슴/어깨/삼두)", parts: ["chest", "shoulder"] },
                { title: "Day 2: 당기기 (Pull - 등/이두)", parts: ["back", "arm"] },
                { title: "Day 3: 하체 & 복근 (Legs & Abs)", parts: ["legs", "abs"] },
                { title: "Day 4: 상체 통합 (Upper)", parts: ["chest", "back", "shoulder"] },
                { title: "Day 5: 하체 & 팔 (Lower & Arms)", parts: ["legs", "arm"] }
            ];
        }

        splitTypeSpan.textContent = splitName;

        const durationPlan = data.duration === ">60"
            ? { exerciseCount: 7, timeLabel: "약 65~80분" }
            : data.duration === "30-60"
                ? { exerciseCount: 5, timeLabel: "약 45~60분" }
                : { exerciseCount: 3, timeLabel: "약 25~30분" };

        const shuffleExercises = (exercises) => {
            const shuffled = [...exercises];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
            }
            return shuffled;
        };

        const selectExercisesForDay = (parts, targetCount) => {
            const queues = parts
                .map(partKey => shuffleExercises(workoutData[partKey] || []))
                .filter(queue => queue.length > 0);
            const selected = [];

            while (selected.length < targetCount && queues.some(queue => queue.length > 0)) {
                queues.forEach(queue => {
                    if (selected.length < targetCount && queue.length > 0) {
                        selected.push(queue.shift());
                    }
                });
            }
            return selected;
        };

        // 분할일자별 카드 렌더링
        splitDays.forEach(day => {
            const dayBox = document.createElement("div");
            dayBox.className = "mt-4";
            const selectedExercises = selectExercisesForDay(day.parts, durationPlan.exerciseCount);

            const exercisesHTML = selectedExercises.map((ex, index) => `
                        <div class="workout-card mt-2">
                            <h3>${index + 1}. ${ex.name}</h3>
                            <div class="workout-meta">
                                <span><strong>부위:</strong> ${ex.part}</span> | 
                                <span><strong>세부 근육:</strong> ${ex.subPart}</span> | 
                                <span><strong>난이도:</strong> ${ex.difficulty}</span>
                            </div>
                            <div class="workout-details">
                                <p><strong>세트 / 횟수:</strong> ${ex.sets}세트 × ${ex.reps}</p>
                                <p><strong>휴식 시간:</strong> 세트 간 ${ex.rest}</p>
                                <p><strong>운동 목적:</strong> ${ex.purpose}</p>
                                <p><strong>운동 방법:</strong> ${ex.description}</p>
                                <p style="color:#e11d48;"><strong>주의사항:</strong> ${ex.caution}</p>
                                <p style="color:#d97706;"><strong>자주 하는 실수:</strong> ${ex.mistakes}</p>
                            </div>
                            <a href="${ex.youtube}" target="_blank" rel="noopener noreferrer" class="workout-link">
                                <i class="fa-brands fa-youtube"></i> 유튜브 가이드 영상 보기
                            </a>
                        </div>
                    `).join("");

            dayBox.innerHTML = `
                <div class="workout-day-heading">
                    <h3>${day.title}</h3>
                    <span>${durationPlan.timeLabel} · ${selectedExercises.length}종목</span>
                </div>
                ${exercisesHTML}
            `;
            workoutContainer.appendChild(dayBox);
        });
    }
});
