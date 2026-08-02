type AdBannerProps = {
  position: "top" | "bottom";
  sponsor: string;
  tagline: string;
  href?: string;
  logoSrc?: string;
};

export default function AdBanner({ position, sponsor, tagline, href = "#", logoSrc }: AdBannerProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex w-full items-center gap-3 border-black/10 bg-white px-4 py-3 transition-colors hover:bg-zinc-50"
      style={{
        borderBottomWidth: position === "top" ? 1 : 0,
        borderTopWidth: position === "bottom" ? 1 : 0,
      }}
    >
      {logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoSrc} alt={`${sponsor} 로고`} className="h-11 w-11 shrink-0 rounded-xl object-cover" />
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-400">
          {sponsor.slice(0, 1)}
        </span>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="flex items-center gap-1.5 text-sm font-bold text-black">
          {sponsor}
          <span className="rounded bg-zinc-100 px-1 py-0.5 text-[9px] font-semibold text-zinc-400">AD</span>
        </span>
        <span className="truncate text-xs text-zinc-500">{tagline}</span>
      </div>
      <span className="shrink-0 text-lg text-zinc-300" aria-hidden>
        ›
      </span>
    </a>
  );
}
