import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import Card from "@/components/Card";
import StationMapSvg from "@/components/StationMapSvg";
import { MAP_PAGE, ROUTES, CHECKLIST } from "@/data/map";

export const metadata: Metadata = { title: MAP_PAGE.title, description: MAP_PAGE.summary };

export default function MapPage() {
  return (
    <InfoPage {...MAP_PAGE}>
      <StationMapSvg />

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">추천 코스</h2>
        {ROUTES.map((r) => (
          <Card key={r.title} icon={r.icon} title={r.title} tag={r.tag} description={r.description} />
        ))}
      </section>

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">방문 준비물</h2>
        {CHECKLIST.map((c) => (
          <Card key={c.title} icon={c.icon} title={c.title} description={c.description} />
        ))}
      </section>
    </InfoPage>
  );
}
