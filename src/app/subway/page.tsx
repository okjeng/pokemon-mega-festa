import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { STATIONS_PAGE } from "@/data/stations";

export const metadata: Metadata = { title: STATIONS_PAGE.title, description: STATIONS_PAGE.summary };

export default function SubwayPage() {
  return <InfoPage {...STATIONS_PAGE} />;
}
