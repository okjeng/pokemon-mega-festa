import type { InfoPageData } from "@/components/InfoPage";

export const FOODS = [
  { icon: "☕", title: "전포카페거리", tag: "도보 5~10분", description: "디저트 카페 등 감성 카페 밀집 (롯데백화점 인근)" },
  { icon: "🍜", title: "서면 먹자골목", tag: "도보 5~10분", description: "다양한 맛집 · 프랜차이즈 음식점" },
  { icon: "🍽️", title: "롯데백화점 식당가", tag: "백화점 내", description: "팝업스토어와 같은 건물에서 바로 식사 해결 가능" },
];

export const FOOD_PAGE: InfoPageData = {
  icon: "🍡",
  title: "먹거리",
  summary: "롯데백화점 식당가와 전포카페거리·서면 먹자골목을 이용할 수 있습니다.",
  cards: FOODS,
  details: ["행사 전용 푸드 부스에 대한 공식 정보는 없으며, 롯데백화점 식당가와 인근 상권(전포카페거리·서면 먹자골목)을 이용하는 방식입니다."],
  faq: [{ question: "행사장 안에 먹거리 부스가 있나요?", answer: "행사 전용 푸드 부스 공식 정보는 없으며, 롯데백화점 식당가나 인근 전포카페거리·서면 먹자골목을 이용하는 것이 일반적입니다." }],
  related: [
    { label: "팝업스토어", href: "/popup" },
    { label: "지하철 코스", href: "/subway" },
  ],
};
