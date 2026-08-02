import type { InfoPageData } from "@/components/InfoPage";

export const GOODS = [
  { icon: "🎰", title: "가챠(캡슐토이)", tag: "₩4,000~10,000", description: "블로그 후기 기준 가격" },
  { icon: "🔑", title: "손바닥 마스코트 키링", tag: "약 ₩7,000", description: "인기 아이템 · 블로그 후기 기준" },
  { icon: "🧸", title: "몬스터볼 케이스 봉제인형", tag: "₩15,000~88,000", description: "인기 아이템 · 블로그 후기 기준" },
];

export const GOODS_PAGE: InfoPageData = {
  icon: "🎁",
  title: "굿즈",
  summary: "인기 굿즈와 대략적인 가격대입니다. (블로그 후기 기준)",
  cards: GOODS,
  details: [
    "굿즈 가격은 공식 판매가가 아직 공개되지 않아, 방문객 후기에서 확인된 가격대를 참고용으로 표기했습니다. 실제 현장 가격과 다를 수 있습니다.",
    "인기 캐릭터: 피카츄 · 이브이 · 리자몽 · 잠만보 순으로 후기에서 자주 언급됩니다. 인기 상품일수록 조기 품절 가능성이 있어 오픈 직후 방문이 권장됩니다.",
    "예산 가이드(후기 기준): 1만원 이하는 스티커·문구, 3만원 이하는 키링·소형 인형, 5만원 이하는 중형 인형·굿즈 조합이 무난합니다.",
  ],
  faq: [
    { question: "이 가격이 공식 가격인가요?", answer: "아니요, 방문객 후기에서 확인된 가격대이며 공식 판매가가 아닙니다. 현장에서 정확한 가격을 확인해 주세요." },
    { question: "가장 먼저 확인해야 할 상품은?", answer: "한정판 상품과 피카츄 굿즈입니다. 재입고가 불확실해 오픈 직후 확인이 권장됩니다." },
  ],
  related: [
    { label: "팝업스토어", href: "/popup" },
    { label: "스탬프랠리", href: "/stamp-rally" },
  ],
};
