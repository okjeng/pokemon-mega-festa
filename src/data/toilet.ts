import type { InfoPageData } from "@/components/InfoPage";

export const TOILETS = [
  { icon: "🚻", title: "지하철 5개 역", tag: "이용 가능", description: "부산역·범내골·전포·광안·센텀시티 모든 역에 화장실이 있습니다." },
  { icon: "🚻", title: "롯데백화점 부산본점", tag: "수유실 있음", description: "각 층 화장실 이용 가능, 수유실·유아휴게실도 함께 있습니다." },
  { icon: "⭐", title: "가장 편한 화장실", tag: "센텀시티역", description: "5개 역 중 접근성이 가장 좋다는 후기가 많습니다." },
];

export const TOILET_PAGE: InfoPageData = {
  icon: "🚻",
  title: "화장실",
  summary: "지하철 5개 역과 롯데백화점 모두 화장실 이용이 가능합니다.",
  cards: TOILETS,
  details: ["스탬프랠리 참여 역(5곳) 모두 화장실이 있어 이동 중 이용에 어려움은 적습니다.", "아이 동반이라면 수유실·유아휴게실이 있는 롯데백화점을 함께 묶는 동선이 편합니다."],
  faq: [{ question: "수유실이 있는 곳은 어디인가요?", answer: "롯데백화점 부산본점에 수유실·유아휴게실이 마련되어 있습니다." }],
  related: [
    { label: "지하철 코스", href: "/subway" },
    { label: "팝업스토어", href: "/popup" },
  ],
};
