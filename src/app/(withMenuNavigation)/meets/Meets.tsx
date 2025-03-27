'use client';

import { ChevronRight } from 'lucide-react';

import { InfoCard } from '@/components/Cards/InfoCard';
import { MeetCard } from '@/components/Cards/MeetCard';
import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { CustomImage } from '@/components/ui/CustomImage';
import { MainLoader } from '@/components/ui/MainLoader';
import { Header } from '@/components/ui/Texts/Header';

import { MeetsPageData } from '@/lib/types/meets';

export default function Meets({ data }: { data: MeetsPageData }) {
  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.title}</Header>

      <div className="flex justify-between items-center w-full">
        <p className="text-lg">Скоро будет</p>
        <ChevronRight className="w-6 h-6" />
      </div>

      <div className="flex gap-3 mt-3 w-full overflow-x-auto self-start hide-scrollbar">
        {data.upcomingEvents?.map((event, index) => (
          <MeetCard
            key={index}
            title={event.title}
            text={event.description}
            href="#"
            date={event.date}
            type={event.time}
            time={event.type}
          />
        ))}
      </div>

      <SmallButton className="mt-6 py-6">{data.calendarButton}</SmallButton>

      <div className="flex justify-between items-center w-full mt-6">
        <p className="text-lg">Регулярные активности</p>
        <ChevronRight className="w-6 h-6" />
      </div>

      <div className="flex flex-col gap-3 w-full mt-3">
        {data.regularActivities?.map((activity, index) => (
          <InfoCard
            key={index}
            title={activity.title}
            text={activity.description}
            href="#"
            buttonText={activity.buttonText}
          />
        ))}
      </div>

      <div className="flex gap-4 p-4 flex-wrap w-full">
        {data.gallery?.map((image, index) => <CustomImage key={index} src={image.asset.url} description={image.alt} />)}
      </div>
    </Page>
  );
}
