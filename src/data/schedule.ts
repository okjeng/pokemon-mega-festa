import type { InfoPageData } from "@/components/InfoPage";

export const SCHEDULE = [
  { icon: "📅", title: "행사 기간", tag: "7.17(금)~8.9(일)", description: "부산 전역, 포켓몬 30주년 기념 (24일간)" },
  { icon: "🚌", title: "테마버스 운행", tag: "7.10~8.9", description: "포켓몬 테마 랩핑버스 운행" },
  { icon: "🎆", title: "광안리 드론쇼", tag: "7.25", description: "20:00 · 22:00 광안리해수욕장 (진행 종료)" },
  { icon: "🃏", title: "카드게임 지하철 배틀 토너먼트", tag: "8.1", description: "BEXCO 전시장1관 2B홀 · 부산교통공사 공동주최" },
];

export const SCHEDULE_PAGE: InfoPageData = {
  icon: "🗓️",
  title: "행사 일정",
  summary: "2026.7.17(금)~8.9(일), 부산 전역에서 진행됩니다.",
  cards: SCHEDULE,
  details: [
    "행사는 롯데백화점 부산본점, 부산 도시철도 5개 역(부산역·범내골·전포·광안·센텀시티), 광안리해수욕장, BEXCO 등 부산 전역에서 동시에 진행됩니다.",
    "광안리 드론쇼(7.25)와 카드게임 토너먼트(8.1)는 1회성 프로그램입니다. 정확한 세부 시간은 부산교통공사·롯데백화점 공식 공지를 확인하세요.",
    "방문 후기 공통 팁: 오전 시작 → 팝업 굿즈 먼저 확인 → 광안역에서 사진 → 센텀시티에서 마무리하는 흐름이 가장 만족도가 높다는 평가가 많습니다. 반대로 오후 늦은 방문과 무계획 이동은 아쉬운 점으로 자주 언급됩니다.",
  ],
  faq: [
    { question: "행사는 언제까지 하나요?", answer: "2026년 7월 17일(금)부터 8월 9일(일)까지 24일간 진행됩니다." },
    { question: "광안리 드론쇼도 다시 볼 수 있나요?", answer: "드론쇼는 7월 25일 1회성 이벤트로 이미 종료되었습니다." },
    { question: "가장 만족도 높은 방문 순서는?", answer: "오전 시작 → 굿즈 확인 → 광안역 사진 → 센텀시티 휴식 순서가 방문 후기에서 가장 많이 추천됩니다." },
  ],
  related: [
    { label: "행사 지도", href: "/map" },
    { label: "지하철 코스", href: "/subway" },
    { label: "팝업스토어", href: "/popup" },
  ],
};
