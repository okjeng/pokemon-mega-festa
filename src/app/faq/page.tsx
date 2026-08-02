import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { FAQ_PAGE } from "@/data/faq";

export const metadata: Metadata = { title: FAQ_PAGE.title, description: FAQ_PAGE.summary };

export default function FaqPage() {
  return <InfoPage {...FAQ_PAGE} />;
}
