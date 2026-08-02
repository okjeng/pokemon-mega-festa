import type { InfoPageData } from "@/components/InfoPage";
import { STATION_DETAILS } from "./stationDetails";

export const STATIONS = STATION_DETAILS.map((s) => ({
  icon: s.icon,
  title: s.short,
  description: s.summary,
  href: `/subway/${s.slug}`,
}));

export const STATIONS_PAGE: InfoPageData = {
  icon: "🚇",
  title: "지하철 코스",
  summary: "5개 역에 테마 스크린도어와 래핑 열차가 운행됩니다. 역을 눌러 상세 정보를 확인하세요.",
  cards: [
    ...STATIONS,
    { icon: "🚈", title: "포켓몬 래핑 열차", tag: "1·2호선", description: "두 호선에 테마 랩핑 열차 운행" },
  ],
  details: [
    "부산 도시철도 1호선과 2호선에 포켓몬 테마 랩핑 열차가 운행되며, 위 5개 역에는 테마 스크린도어가 설치되어 있습니다.",
    "포켓몬 디자인 한정판 QR 승차권이 유상 판매됩니다. 정확한 가격은 아직 공식 공지되지 않아 확인되는 대로 업데이트합니다.",
  ],
  faq: [
    { question: "래핑 열차 운행 시간표는 어디서 확인하나요?", answer: "부산교통공사 공식 홈페이지의 '포켓몬 래핑열차 운행시각표' 페이지에서 확인할 수 있습니다." },
    { question: "QR 승차권은 얼마인가요?", answer: "유상 판매되는 것은 확인됐지만 정확한 가격은 아직 공식 공지되지 않았습니다." },
  ],
  related: [
    { label: "스탬프랠리", href: "/stamp-rally" },
    { label: "행사 지도", href: "/map" },
    { label: "화장실", href: "/toilet" },
  ],
};
