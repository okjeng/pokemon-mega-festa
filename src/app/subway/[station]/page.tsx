import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import { STATION_DETAILS } from "@/data/stationDetails";

export function generateStaticParams() {
  return STATION_DETAILS.map((s) => ({ station: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ station: string }>;
}): Promise<Metadata> {
  const { station } = await params;
  const data = STATION_DETAILS.find((s) => s.slug === station);
  if (!data) return {};
  return { title: data.title, description: data.summary };
}

export default async function StationPage({ params }: { params: Promise<{ station: string }> }) {
  const { station } = await params;
  const data = STATION_DETAILS.find((s) => s.slug === station);
  if (!data) notFound();
  return <InfoPage {...data} />;
}
