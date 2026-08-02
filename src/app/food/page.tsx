import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { FOOD_PAGE } from "@/data/food";

export const metadata: Metadata = { title: FOOD_PAGE.title, description: FOOD_PAGE.summary };

export default function FoodPage() {
  return <InfoPage {...FOOD_PAGE} />;
}
