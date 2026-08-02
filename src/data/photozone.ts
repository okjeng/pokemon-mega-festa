import type { InfoPageData } from "@/components/InfoPage";

export const PHOTO_SPOTS = [
  { icon: "📸", title: "부산역 광장 포토존", description: "부산관광공사 공식 포토존" },
  { icon: "📸", title: "롯데백화점 1F 정문 포토타임", tag: "주말 한정", description: "피카츄·고라파덕 인형탈 촬영" },
];

export const PHOTOZONE_PAGE: InfoPageData = {
  icon: "📸",
  title: "포토존",
  summary: "공식 확인된 포토존은 2곳입니다.",
  cards: PHOTO_SPOTS,
  details: [
    "공식적으로 확인된 포토존은 부산역 광장과 롯데백화점 부산본점 1층 정문(주말 한정)입니다. 추가 포토존 운영 여부는 현장 안내를 확인해 주세요.",
  ],
  faq: [
    { question: "평일에도 캐릭터 포토타임이 있나요?", answer: "확인된 바로는 피카츄·고라파덕 포토타임은 주말 한정으로 운영됩니다." },
  ],
  related: [
    { label: "행사 지도", href: "/map" },
    { label: "지하철 코스", href: "/subway" },
  ],
};
