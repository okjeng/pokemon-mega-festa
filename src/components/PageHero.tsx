type PageHeroProps = {
  icon: string;
  title: string;
  description: string;
};

export default function PageHero({ icon, title, description }: PageHeroProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-black/10 bg-white px-4 py-8">
      <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-accent-soft">
        <svg className="absolute inset-0 h-full w-full" aria-hidden viewBox="0 0 400 112" preserveAspectRatio="none">
          <circle cx="30" cy="20" r="3" fill="#111" opacity="0.08" />
          <circle cx="70" cy="85" r="2" fill="#111" opacity="0.08" />
          <circle cx="360" cy="25" r="2.5" fill="#111" opacity="0.08" />
          <circle cx="330" cy="90" r="3" fill="#111" opacity="0.08" />
          <circle cx="200" cy="10" r="2" fill="#111" opacity="0.08" />
          <circle cx="200" cy="56" r="60" fill="#111" opacity="0.05" />
        </svg>
        <span className="relative text-4xl" aria-hidden>
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-extrabold text-black">{title}</h1>
        <p className="text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
