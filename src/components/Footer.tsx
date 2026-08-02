import AdBanner from "./AdBanner";

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col border-t border-black/10 bg-white">
      <div className="mx-4 my-6 flex flex-col gap-1 rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-center text-xs text-zinc-600">
        <p className="font-semibold text-black">⚠️ 비공식 팬 정보 사이트입니다</p>
        <p>본 사이트는 팬이 제작한 비공식 행사 정보 안내 사이트이며, 포켓몬 공식 사이트가 아닙니다.</p>
        <p>공식 이미지·로고는 사용하지 않으며, 굿즈 판매도 하지 않습니다.</p>
        <p>포켓몬(Pokémon) 관련 상표 및 저작권은 각 권리자에게 있습니다.</p>
        <p className="pt-1 text-zinc-400">&copy; 2026 부산 메가페스타 정보</p>
      </div>
      <AdBanner position="bottom" sponsor="쿠팡" tagline="필요한 상품을 최저가로 만나보세요" href="https://www.coupang.com" />
    </footer>
  );
}
