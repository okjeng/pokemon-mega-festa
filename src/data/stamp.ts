import type { InfoPageData } from "@/components/InfoPage";

export const STAMPS = [
  { icon: "🎫", title: "부산역 스탬프", description: "역별 테마 도장" },
  { icon: "🎫", title: "범내골역 스탬프", description: "역별 테마 도장" },
  { icon: "🎫", title: "전포역 스탬프", description: "역별 테마 도장" },
  { icon: "🎫", title: "광안역 스탬프", description: "역별 테마 도장" },
  { icon: "🎫", title: "센텀시티역 스탬프", description: "역별 테마 도장" },
];

export const STAMP_REWARDS = [
  { icon: "🧢", title: "스탬프 3개", tag: "블로그 정보", description: "포켓몬 선캡 증정" },
  { icon: "🎁", title: "스탬프 5개 (완주)", tag: "블로그 정보", description: "클리어파일 + QR승차권 홀더 증정" },
];

export const STAMP_PAGE: InfoPageData = {
  icon: "🎫",
  title: "스탬프랠리",
  summary: "지하철 5개 역에서 테마별 스탬프를 모으면 개수별 경품을 받을 수 있습니다.",
  cards: [...STAMPS, ...STAMP_REWARDS],
  details: [
    "참여 방법: 롯데백화점 부산본점에서 스탬프 대지를 수령 → 5개 역을 방문해 스탬프를 찍음 → 롯데백화점으로 돌아와 개수에 맞는 경품을 수령합니다.",
    "경품 구성과 수령 장소(9층 L.아레나 광장)는 블로그 후기 기준 정보이며, 공식 공지로 확정되면 업데이트합니다. 준비 수량 소진 시 조기 종료될 수 있습니다.",
  ],
  faq: [
    { question: "스탬프는 어디서 모으나요?", answer: "부산역·범내골·전포·광안·센텀시티 5개 역에서 각각 다른 테마의 스탬프를 모을 수 있습니다." },
    { question: "리워드는 어디서 받나요?", answer: "블로그 후기 기준 롯데백화점 부산본점 9층 L.아레나 광장에서 교환 가능한 것으로 확인됩니다. 공식 확정 정보가 아니므로 현장에서 다시 확인해 주세요." },
    { question: "스탬프 대지는 어디서 받나요?", answer: "롯데백화점 부산본점 행사장에서 수령하는 것으로 알려져 있습니다." },
  ],
  related: [
    { label: "지하철 코스", href: "/subway" },
    { label: "팝업스토어", href: "/popup" },
  ],
};
