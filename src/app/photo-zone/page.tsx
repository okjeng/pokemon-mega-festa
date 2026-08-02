import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { PHOTOZONE_PAGE } from "@/data/photozone";

export const metadata: Metadata = { title: PHOTOZONE_PAGE.title, description: PHOTOZONE_PAGE.summary };

export default function PhotoZonePage() {
  return <InfoPage {...PHOTOZONE_PAGE} />;
}
