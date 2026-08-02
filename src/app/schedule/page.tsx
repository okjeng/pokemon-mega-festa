import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SCHEDULE_PAGE } from "@/data/schedule";

export const metadata: Metadata = { title: SCHEDULE_PAGE.title, description: SCHEDULE_PAGE.summary };

export default function SchedulePage() {
  return <InfoPage {...SCHEDULE_PAGE} />;
}
