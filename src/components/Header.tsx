import Link from "next/link";
import AdBanner from "./AdBanner";
import NavTabs from "./NavTabs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-col border-b border-black/10 bg-white">
      <AdBanner position="top" sponsor="알리트랙" href="https://alitrack.kr" />
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-lg text-black">
            ⚡
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold tracking-wide text-zinc-500">2026</span>
            <span className="text-base font-bold">포켓몬 메가페스타 부산</span>
          </div>
        </Link>
      </div>
      <NavTabs />
    </header>
  );
}
