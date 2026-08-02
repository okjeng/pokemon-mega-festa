import type { InfoPageData } from "@/components/InfoPage";

export type StationDetail = InfoPageData & { slug: string; short: string };

export const STATION_DETAILS: StationDetail[] = [
  {
    slug: "busan",
    short: "부산역",
    icon: "🚉",
    title: "부산역 포켓몬 코스",
    summary: "부산 여행의 시작점, 추천 체류 40~60분",
    cards: [
      { icon: "🎫", title: "즐길거리", description: "스탬프 · 대형 포토존 · QR승차권 판매 · 테마열차" },
      { icon: "🚻", title: "편의시설", description: "화장실 · 편의점 · 물품보관함 · 엘리베이터 · 에스컬레이터 · ATM" },
      { icon: "📍", title: "주변", description: "부산역 광장 · 식당가 · 카페" },
    ],
    details: ["부산 도착 거점이자 교통 연결이 가장 편리해 코스 시작점으로 가장 많이 추천됩니다.", "짐을 정리한 뒤 다음 역(범내골)으로 이동하는 동선이 자연스럽습니다."],
    faq: [{ question: "부산역에서 바로 스탬프를 시작할 수 있나요?", answer: "네, 부산역은 스탬프랠리 시작점으로 가장 많이 추천되는 역입니다." }],
    related: [
      { label: "지하철 코스 전체", href: "/subway" },
      { label: "스탬프랠리", href: "/stamp-rally" },
    ],
  },
  {
    slug: "beomnaegol",
    short: "범내골역",
    icon: "🚉",
    title: "범내골역 포켓몬 코스",
    summary: "이동 중심의 짧은 참여 코스, 추천 체류 20~30분",
    cards: [
      { icon: "🎫", title: "즐길거리", description: "스탬프 · 포토존" },
      { icon: "🚻", title: "편의시설", description: "화장실 · 편의점 · 엘리베이터" },
    ],
    details: ["5개 역 중 체류 시간이 가장 짧게 추천되는 역으로, 스탬프를 찍고 다음 역(전포)으로 빠르게 이동하는 경유지 역할입니다."],
    faq: [{ question: "범내골역은 꼭 방문해야 하나요?", answer: "짧게 들러 스탬프만 찍고 이동해도 무방합니다. 5개 역 중 체류 시간이 가장 짧습니다." }],
    related: [
      { label: "지하철 코스 전체", href: "/subway" },
      { label: "전포역", href: "/subway/jeonpo" },
    ],
  },
  {
    slug: "jeonpo",
    short: "전포역",
    icon: "🚉",
    title: "전포역 포켓몬 코스",
    summary: "카페·감성 코스, 추천 체류 50분~1시간 30분",
    cards: [
      { icon: "🎫", title: "즐길거리", description: "스탬프 · 포켓몬스쿨 · 카드게임 체험" },
      { icon: "🚻", title: "편의시설", description: "화장실 · 편의점 · 엘리베이터" },
      { icon: "☕", title: "주변", description: "전포카페거리 · 맛집" },
    ],
    details: ["전포카페거리가 가깝게 있어 점심 식사와 카페 휴식을 함께 즐기기 좋은 역으로 후기에서 자주 언급됩니다."],
    faq: [{ question: "전포역에서 식사도 가능한가요?", answer: "네, 전포카페거리와 맛집이 가까워 점심·카페 휴식을 함께 즐기기 좋습니다." }],
    related: [
      { label: "지하철 코스 전체", href: "/subway" },
      { label: "먹거리", href: "/food" },
    ],
  },
  {
    slug: "gwangan",
    short: "광안역",
    icon: "🚉",
    title: "광안역 포켓몬 코스",
    summary: "사진 명소, 광안리 연계 코스, 추천 체류 50분~2시간",
    cards: [
      { icon: "🎫", title: "즐길거리", description: "스탬프 · 이브이 포토존 · 포켓몬스쿨" },
      { icon: "🚻", title: "편의시설", description: "화장실 · 편의점(역 주변) · 엘리베이터/에스컬레이터" },
      { icon: "📸", title: "포토 스팟", description: "광안대교 배경 촬영 (1순위) · 광안리 해변 인증샷" },
      { icon: "🌊", title: "주변", description: "광안리해수욕장 · 카페거리" },
    ],
    details: ["포켓몬 이벤트 사진과 부산 대표 관광 사진을 함께 남길 수 있어 방문 후기 만족도가 가장 높은 역입니다.", "오전에는 사람이 적고, 해질 무렵에는 분위기가 좋아 두 시간대 모두 추천됩니다. 광안리 해변까지 도보 이동이 가능합니다."],
    faq: [
      { question: "사진 찍기 가장 좋은 역은 어디인가요?", answer: "광안역입니다. 광안대교와 바다를 배경으로 촬영할 수 있어 방문 후기에서 만족도가 가장 높습니다." },
      { question: "비 오는 날에도 방문 가능한가요?", answer: "가능하지만 광안리 해변 이동 구간은 우산이 필요합니다." },
    ],
    related: [
      { label: "지하철 코스 전체", href: "/subway" },
      { label: "포토존", href: "/photo-zone" },
    ],
  },
  {
    slug: "centumcity",
    short: "센텀시티역",
    icon: "🚉",
    title: "센텀시티역 포켓몬 코스",
    summary: "쇼핑·휴식·가족 마무리 코스, 추천 체류 1~3시간",
    cards: [
      { icon: "🎫", title: "즐길거리", description: "스탬프 · 포토존 · 카드게임" },
      { icon: "🚻", title: "편의시설", description: "화장실 · 편의점 · 물품보관함 · 엘리베이터/에스컬레이터 · 수유실 · ATM (5개 역 중 가장 편리)" },
      { icon: "🏢", title: "주변", description: "BEXCO · 신세계 센텀시티" },
    ],
    details: ["실내 이동과 냉방, 식사, 휴식이 모두 가능해 5개 역 중 가족 방문 편의성이 가장 좋다는 평가가 많습니다.", "체력 소모가 적어 하루 코스의 마지막 목적지로 가장 많이 추천됩니다."],
    faq: [
      { question: "아이와 방문하기 가장 편한 역은?", answer: "센텀시티역입니다. 화장실·수유실·식사·쇼핑을 모두 한 곳에서 해결할 수 있습니다." },
      { question: "유모차나 캐리어를 가지고 가도 되나요?", answer: "가능하며, 오히려 이용이 편리한 역으로 꼽힙니다." },
    ],
    related: [
      { label: "지하철 코스 전체", href: "/subway" },
      { label: "굿즈", href: "/goods" },
    ],
  },
];
