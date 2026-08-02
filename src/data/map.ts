import type { InfoPageData } from "@/components/InfoPage";

export const ZONES = [
  { icon: "🏬", title: "롯데백화점 부산본점", description: "B1F 팝업스토어 · 부산진구 가야대로 772" },
  { icon: "🚇", title: "지하철 5개 역", description: "부산역·범내골·전포·광안·센텀시티 테마역" },
  { icon: "🏖️", title: "광안리해수욕장", description: "7.25 드론쇼 개최 (진행 종료)" },
  { icon: "🏢", title: "BEXCO", description: "8.1 카드게임 배틀 토너먼트 · 전시장1관 2B홀" },
];

export const ROUTES = [
  { icon: "👨‍👩‍👧", title: "아이와 함께", tag: "4~5시간", description: "부산역 → 광안역 → 센텀시티역 · 이동 부담이 적고 휴식 공간이 충분합니다" },
  { icon: "📸", title: "사진 여행", tag: "4시간", description: "전포역 → 광안역 → 센텀시티역 · 감성 카페와 광안대교 배경 사진 코스" },
  { icon: "🎁", title: "굿즈 구매", tag: "오전 추천", description: "롯데백화점 → 센텀시티역 → 광안역 · 상품을 먼저 확인한 뒤 관광" },
  { icon: "⭐", title: "전체 완주", tag: "6~8시간", description: "부산역 → 범내골역 → 전포역 → 광안역 → 센텀시티역 · 스탬프 5개 모두 수집" },
];

export const CHECKLIST = [
  { icon: "🎒", title: "필수 준비물", description: "편한 운동화 · 보조배터리 · 물 · 교통카드 · 큰 가방" },
  { icon: "👶", title: "아이 동반 시", description: "간식 · 물티슈 · 유모차 · 여벌 옷" },
  { icon: "☀️", title: "여름 방문 준비", description: "휴대용 선풍기 · 양산 또는 모자 · 선크림 · 우산" },
];

export const MAP_PAGE: InfoPageData = {
  icon: "🗺️",
  title: "행사 지도",
  summary: "롯데백화점·지하철 5개 역·광안리·BEXCO 등 부산 전역에서 동시에 진행됩니다.",
  cards: ZONES,
  details: [
    "이번 행사는 한 곳에 모인 단일 행사장이 아니라, 롯데백화점 부산본점·지하철 5개 역·광안리·BEXCO 등 부산 전역에서 동시에 진행되는 도시형 행사입니다.",
    "실제 배치도(지도 이미지)는 공식 발표 시 추가될 예정입니다.",
  ],
  faq: [{ question: "행사장이 한 곳인가요?", answer: "아니요, 부산 전역 여러 장소에서 동시에 진행되는 도시형 행사입니다." }],
  related: [
    { label: "지하철 코스", href: "/subway" },
    { label: "팝업스토어", href: "/popup" },
    { label: "주차", href: "/parking" },
  ],
};
