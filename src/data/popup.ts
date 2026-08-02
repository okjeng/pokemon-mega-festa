import type { InfoPageData } from "@/components/InfoPage";

export const POPUPS = [
  { icon: "🛍️", title: "포켓몬 팝업스토어", tag: "B1F", description: "롯데백화점 부산본점 지하 1층 Kinetic Stage (서면역 지하 연결)" },
  { icon: "🕐", title: "운영시간", tag: "월~목 10:30-20:00", description: "금·토·일·공휴일 10:30-20:30" },
  { icon: "🎁", title: "판매 굿즈", tag: "Chillin' Summer Days", description: "봉제인형·마스코트·키링·문구·에코백·파우치·텀블러 등" },
  { icon: "🎰", title: "캡슐토이존", tag: "요트 선착장 테마", description: "이치방쿠지 등 캡슐토이 구성" },
  { icon: "📸", title: "주말 포토타임", tag: "1F 정문", description: "피카츄·고라파덕 인형탈과 촬영 (주말 한정)" },
];

export const POPUP_PAGE: InfoPageData = {
  icon: "🛍️",
  title: "팝업스토어",
  summary: "롯데백화점 부산본점 지하 1층 Kinetic Stage에서 운영됩니다.",
  cards: POPUPS,
  details: [
    "사전 예약 없이 현장 대기로 운영됩니다.",
    "개장 전(09:00~10:20)에는 매장 후면 발렛파킹 구역에서 대기하며, 개장 후에는 매장 입구에서 대기합니다.",
    "팝업스토어와 카드샵은 대기 등록이 별도로 진행됩니다.",
    "예상 대기시간(블로그 후기 기준): 평일 오전 10~30분, 평일 오후 20~40분, 토·일요일 40~90분, 공휴일 60분 이상 소요될 수 있습니다.",
  ],
  faq: [
    { question: "사전 예약이 가능한가요?", answer: "사전 예약 없이 현장 대기로만 입장 가능합니다." },
    { question: "오픈 전에는 어디서 기다리나요?", answer: "개장 전(09:00~10:20)에는 매장 후면 발렛파킹 구역에서 대기 후, 개장과 함께 매장 입구로 이동해 대기합니다." },
    { question: "포토타임은 매일 있나요?", answer: "피카츄·고라파덕과의 포토타임은 주말에만 운영됩니다." },
    { question: "대기 시간이 가장 짧은 시간대는?", answer: "평일 오전(10~30분)이 가장 여유롭다는 후기가 많습니다." },
  ],
  related: [
    { label: "굿즈", href: "/goods" },
    { label: "먹거리", href: "/food" },
    { label: "지하철 코스", href: "/subway" },
  ],
};
