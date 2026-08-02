import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { STAMP_PAGE } from "@/data/stamp";

export const metadata: Metadata = { title: STAMP_PAGE.title, description: STAMP_PAGE.summary };

export default function StampRallyPage() {
  return <InfoPage {...STAMP_PAGE} />;
}
