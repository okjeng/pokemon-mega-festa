import type { ReactNode } from "react";
import PageHero from "./PageHero";
import Card from "./Card";
import Accordion from "./Accordion";
import RelatedLinks from "./RelatedLinks";

type CardData = {
  icon?: string;
  title: string;
  tag?: string;
  description?: string;
  href?: string;
};

type FaqData = {
  question: string;
  answer: string;
};

type RelatedLink = { label: string; href: string };

export type InfoPageData = {
  icon: string;
  title: string;
  summary: string;
  cards?: CardData[];
  details?: string[];
  faq?: FaqData[];
  related?: RelatedLink[];
};

export default function InfoPage({
  icon,
  title,
  summary,
  cards,
  details,
  faq,
  related,
  children,
}: InfoPageData & { children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 pb-14">
      <PageHero icon={icon} title={title} description={summary} />

      {children}

      {cards && cards.length > 0 && (
        <section className="flex flex-col gap-3 px-4">
          {cards.map((c, idx) => (
            <Card key={idx} icon={c.icon} title={c.title} tag={c.tag} description={c.description} href={c.href} />
          ))}
        </section>
      )}

      {details && details.length > 0 && (
        <section className="flex flex-col gap-2 px-4">
          <h2 className="text-sm font-bold text-black">상세 설명</h2>
          {details.map((p, idx) => (
            <p key={idx} className="text-sm leading-relaxed text-zinc-600">
              {p}
            </p>
          ))}
        </section>
      )}

      {faq && faq.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="px-4 text-sm font-bold text-black">자주 묻는 질문</h2>
          <Accordion items={faq} />
        </section>
      )}

      {related && related.length > 0 && <RelatedLinks items={related} />}
    </div>
  );
}
