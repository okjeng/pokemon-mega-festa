import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { POPUP_PAGE } from "@/data/popup";

export const metadata: Metadata = { title: POPUP_PAGE.title, description: POPUP_PAGE.summary };

export default function PopupPage() {
  return <InfoPage {...POPUP_PAGE} />;
}
