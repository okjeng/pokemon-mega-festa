import Link from "next/link";
import AdBanner from "./AdBanner";
import NavTabs from "./NavTabs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-col border-b border-black/10 bg-white">
      <AdBanner
        position="top"
        sponsor="알리트랙"
        tagline="AI 주식 가치분석 · 기술분석 · Market Flow"
        href="https://alitrack.kr"
        logoSrc="/alitrack-logo.png"
      />
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-lg text-black">
            ⚡
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold tracking-wide text-zinc-500">2026</span>
            <span className="text-base font-bold">부산 메가페스타 정보</span>
          </div>
        </Link>
      </div>
      <p className="border-t border-black/5 bg-zinc-50 px-4 py-1.5 text-center text-[11px] text-zinc-500">
        비공식 팬 정보 사이트 · 포켓몬 관련 상표·저작권은 각 권리자에게 있습니다
      </p>
      <NavTabs />
    </header>
  );
}
