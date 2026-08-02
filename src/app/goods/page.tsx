import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { GOODS_PAGE } from "@/data/goods";

export const metadata: Metadata = { title: GOODS_PAGE.title, description: GOODS_PAGE.summary };

export default function GoodsPage() {
  return <InfoPage {...GOODS_PAGE} />;
}
