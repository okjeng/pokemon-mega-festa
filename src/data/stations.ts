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
    { icon: "🚈", title: "포켓몬 래핑 열차", tag: "1호선(노포)·2호선(다대포)", description: "정규 운행시간표대로 운행 (전용 임시열차 아님)" },
  ],
  details: [
    "부산 도시철도 1호선(노포 방면)과 2호선(다대포 방면)에 포켓몬 테마 랩핑 열차가 편성되어 있으며, 위 5개 역에는 테마 스크린도어가 설치되어 있습니다.",
    "래핑 열차는 별도 특별 시간표가 아니라 정규 지하철 운행시간표에 포함되어 운행됩니다. 부산교통공사 공식 '포켓몬테마열차 실시간 위치 안내' 페이지에서 현재 열차 위치를 실시간으로 확인할 수 있습니다.",
    "포켓몬 디자인 한정판 QR 승차권이 유상 판매됩니다. 정확한 가격은 아직 공식 공지되지 않아 확인되는 대로 업데이트합니다.",
  ],
  faq: [
    { question: "래핑 열차는 몇 시에 오나요?", answer: "정규 지하철 시간표대로 운행되어 정해진 배차 시간은 따로 없습니다. 부산교통공사 공식 실시간 위치 안내 페이지에서 지금 어디 있는지 확인하는 것이 가장 정확합니다." },
    { question: "QR 승차권은 얼마인가요?", answer: "유상 판매되는 것은 확인됐지만 정확한 가격은 아직 공식 공지되지 않았습니다." },
  ],
  related: [
    { label: "스탬프랠리", href: "/stamp-rally" },
    { label: "행사 지도", href: "/map" },
    { label: "화장실", href: "/toilet" },
  ],
};
