import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import Card from "@/components/Card";
import { PARKING_PAGE, STATION_PARKING } from "@/data/parking";

export const metadata: Metadata = { title: PARKING_PAGE.title, description: PARKING_PAGE.summary };

export default function ParkingPage() {
  return (
    <InfoPage {...PARKING_PAGE}>
      <section className="flex flex-col gap-4 px-4">
        <h2 className="text-sm font-bold text-black">역별 인근 주차장</h2>
        {STATION_PARKING.map((s) => (
          <div key={s.station} className="flex flex-col gap-2">
            <h3 className="text-xs font-semibold text-zinc-500">{s.station}</h3>
            {s.items.length > 0 ? (
              <div className="flex flex-col gap-2">
                {s.items.map((item) => (
                  <Card key={item.title} icon={item.icon} title={item.title} tag={item.tag} description={item.description} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-400">도보권 내 확인된 주차장 정보가 없습니다.</p>
            )}
          </div>
        ))}
      </section>
    </InfoPage>
  );
}
