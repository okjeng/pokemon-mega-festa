import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import Accordion from "@/components/Accordion";
import { NAV_ITEMS } from "@/data/nav";
import { SCHEDULE } from "@/data/schedule";
import { STATIONS } from "@/data/stations";
import { POPUPS } from "@/data/popup";
import { FAQ_ITEMS } from "@/data/faq";

const QUICK_LINKS = NAV_ITEMS.filter((item) => item.href !== "/");

const TODAY_STATUS = {
  icon: "🕒",
  title: "팝업스토어 운영시간",
  tag: "월~목 10:30-20:00",
  description: "금~일 10:30-20:30 · 롯데백화점 부산본점 B1F",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 pb-14">
      <PageHero
        icon="⚡"
        title="2026 부산 메가페스타 정보"
        description="2026.7.17(금)~8.9(일) · 부산 느긋느긋 바캉스 일정·지도·지하철·굿즈 정보를 가장 빠르게 확인하세요."
      />

      <section className="px-4">
        <Card {...TODAY_STATUS} />
      </section>

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">빠른 메뉴</h2>
        <div className="grid grid-cols-2 gap-3">
          {QUICK_LINKS.map((item) => (
            <Card key={item.href} icon={item.icon} title={item.label} href={item.href} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">인기 정보</h2>
        <Card icon={POPUPS[0].icon} title={POPUPS[0].title} tag={POPUPS[0].tag} description={POPUPS[0].description} href="/popup" />
        <Card icon="🎫" title="스탬프랠리" tag="인기" description="지하철 5개 역을 돌며 테마별 스탬프를 모아보세요." href="/stamp-rally" />
      </section>

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">행사 일정</h2>
        {SCHEDULE.slice(0, 2).map((item, idx) => (
          <Card key={idx} icon={item.icon} title={item.title} tag={item.tag} description={item.description} />
        ))}
        <Card title="전체 일정 보기 →" href="/schedule" />
      </section>

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">지하철</h2>
        {STATIONS.slice(0, 2).map((item) => (
          <Card key={item.title} icon={item.icon} title={item.title} description={item.description} href={item.href} />
        ))}
        <Card title="지하철 코스 전체 보기 →" href="/subway" />
      </section>

      <section className="flex flex-col gap-3 px-4">
        <h2 className="text-sm font-bold text-black">팝업</h2>
        {POPUPS.slice(0, 2).map((item) => (
          <Card key={item.title} icon={item.icon} title={item.title} tag={item.tag} description={item.description} />
        ))}
        <Card title="팝업스토어 전체 보기 →" href="/popup" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="px-4 text-sm font-bold text-black">FAQ</h2>
        <Accordion items={FAQ_ITEMS.slice(0, 3)} />
        <div className="px-4">
          <Card title="FAQ 전체 보기 →" href="/faq" />
        </div>
      </section>
    </div>
  );
}
