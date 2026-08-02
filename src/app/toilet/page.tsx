import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { TOILET_PAGE } from "@/data/toilet";

export const metadata: Metadata = { title: TOILET_PAGE.title, description: TOILET_PAGE.summary };

export default function ToiletPage() {
  return <InfoPage {...TOILET_PAGE} />;
}
