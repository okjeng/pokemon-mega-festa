import AdBanner from "./AdBanner";

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col border-t border-black/10 bg-white">
      <div className="flex flex-col gap-2 px-4 py-6 text-center text-xs text-zinc-400">
        <p>본 사이트는 팬이 제작한 비공식 행사 정보 안내 사이트입니다.</p>
        <p>포켓몬(Pokémon) 관련 상표 및 저작권은 각 권리자에게 있습니다.</p>
        <p>&copy; 2026 포켓몬 메가페스타 부산 정보 사이트</p>
      </div>
      <AdBanner position="bottom" sponsor="쿠팡" />
    </footer>
  );
}
