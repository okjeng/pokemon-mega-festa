import type { InfoPageData } from "@/components/InfoPage";

export const STATION_PARKING = [
  {
    station: "부산역",
    items: [
      { icon: "🅿️", title: "부산역 인근 노외주차장", tag: "블로그 정보", description: "10분당 300원 · 1일 상한 8,000원. 정확한 위치·명칭은 현장 확인 필요" },
    ],
  },
  {
    station: "범내골역",
    items: [],
  },
  {
    station: "전포역",
    items: [
      { icon: "🅿️", title: "전포 노상주차장", tag: "역에서 약 100m", description: "10분당 300원 · 1일 8,000원 · 월정기 90,000원 (부산진구 2급지 기준, 일요일 휴무)" },
    ],
  },
  {
    station: "광안역",
    items: [
      { icon: "🅿️", title: "광안리해수욕장 공영주차장", tag: "24시간", description: "성수기(6~9월) 10분당 500원 · 비수기 10분당 300원, 1일 최대 15,000원. 경차·저공해차·다자녀가정 등 50% 할인" },
    ],
  },
  {
    station: "센텀시티역",
    items: [
      { icon: "🅿️", title: "BEXCO 주차장", tag: "소형 10분 400원", description: "1일 최대 소형 15,000원 / 대형 30,000원. 15분 이내 출차 무료" },
    ],
  },
];

export const PARKING = [
  { icon: "🏬", title: "롯데백화점 부산본점 주차장", tag: "유료", description: "운영시간 10:00~22:00 · 구매 금액에 따라 무료 전환" },
  { icon: "⚠️", title: "혼잡 안내", description: "행사 기간 중 혼잡이 예상되므로 대중교통 이용을 권장합니다." },
];

export const PARKING_PAGE: InfoPageData = {
  icon: "🅿️",
  title: "주차",
  summary: "역별 인근 주차장과 롯데백화점 주차 정보입니다. (대부분 블로그 후기 기준)",
  details: [
    "대부분의 요금 정보는 부산시설공단 공식 포털 확인이 어려워 방문객 블로그 후기를 기반으로 정리했습니다. 실제 요금·위치는 현장에서 다시 확인해 주세요.",
    "범내골역은 도보권 내 확인 가능한 공영주차장을 찾지 못했습니다.",
    "행사 기간 중에는 주차장 혼잡이 예상되므로 가능하면 대중교통 이용을 권장합니다.",
  ],
  faq: [
    { question: "역별 주차장 요금은 공식 요금인가요?", answer: "대부분 블로그 후기 기준 정보입니다. 부산시설공단 공식 요금은 급지별로 달라질 수 있어 현장 확인을 권장합니다." },
    { question: "주차 요금은 얼마인가요?", answer: "롯데백화점은 구매 금액에 따라 무료 전환되는 유료 주차이며, 역별 공영주차장 요금은 위 카드를 참고해 주세요." },
  ],
  related: [
    { label: "행사 지도", href: "/map" },
    { label: "지하철 코스", href: "/subway" },
    { label: "팝업스토어", href: "/popup" },
  ],
};
