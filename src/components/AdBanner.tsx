type AdBannerProps = {
  position: "top" | "bottom";
  sponsor: string;
  href?: string;
  logoSrc?: string;
};

export default function AdBanner({ position, sponsor, href = "#", logoSrc }: AdBannerProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex w-full items-center justify-center gap-2 border-black/10 bg-zinc-100 px-4 py-2 text-xs text-zinc-500 transition-colors hover:bg-zinc-200"
      style={{
        borderBottomWidth: position === "top" ? 1 : 0,
        borderTopWidth: position === "bottom" ? 1 : 0,
      }}
    >
      {logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoSrc} alt={`${sponsor} 로고`} className="h-5 w-5 shrink-0 rounded-full" />
      ) : (
        <span className="rounded bg-zinc-300 px-1.5 py-0.5 font-semibold text-zinc-600">AD</span>
      )}
      <span className="truncate">{sponsor} 광고 영역 (자리표시자)</span>
    </a>
  );
}
