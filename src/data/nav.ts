export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "/", icon: "🏠" },
  { label: "일정", href: "/schedule", icon: "🗓️" },
  { label: "지도", href: "/map", icon: "🗺️" },
  { label: "지하철", href: "/subway", icon: "🚇" },
  { label: "스탬프랠리", href: "/stamp-rally", icon: "🎫" },
  { label: "팝업", href: "/popup", icon: "🛍️" },
  { label: "굿즈", href: "/goods", icon: "🎁" },
  { label: "포토존", href: "/photo-zone", icon: "📸" },
  { label: "먹거리", href: "/food", icon: "🍡" },
  { label: "화장실", href: "/toilet", icon: "🚻" },
  { label: "주차", href: "/parking", icon: "🅿️" },
  { label: "FAQ", href: "/faq", icon: "❓" },
];
