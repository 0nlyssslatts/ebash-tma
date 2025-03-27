'use client';

import { ChevronRight } from 'lucide-react';

import { InfoCard } from '@/components/Cards/InfoCard';
import { MeetCard } from '@/components/Cards/MeetCard';
import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { Header } from '@/components/ui/Texts/Header';
import { CustomImage } from '@/components/ui/CustomImage';

export default function Meets() {
  return (
    <Page>
      <Header>MEETS</Header>

      <div className="flex justify-between items-center w-full">
        <p className="text-lg">Скоро будет</p>
        <ChevronRight className="w-6 h-6" />
      </div>

      <div className="flex gap-3 mt-3 w-full overflow-x-auto self-start hide-scrollbar">
        <MeetCard
          title="Воркшоп по делегированию"
          text="тут описание тут описание тут описание тут описание тут описание тут описание"
          href="#"
          date="24 марта"
          type="18:30 - 20:00"
          time="Онлайн"
        />
        <MeetCard
          title="Воркшоп по делегированию"
          text="тут описание тут описание тут описание тут описание"
          href="#"
          date="24 марта"
          type="18:30 - 20:00"
          time="Офлайн"
        />
        <MeetCard
          title="Воркшоп по делегированию"
          text="тут описание тут описание тут описание тут описание"
          href="#"
          date="24 марта"
          type="18:30 - 20:00"
          time="Офлайн"
        />
        <MeetCard
          title="Воркшоп по делегированию"
          text="тут описание тут описание тут описание тут описание"
          href="#"
          date="24 марта"
          type="18:30 - 20:00"
          time="Офлайн"
        />
        <MeetCard
          title="Воркшоп по делегированию"
          text="тут описание тут описание тут описание тут описание"
          href="#"
          date="24 марта"
          type="18:30 - 20:00"
          time="Офлайн"
        />
        <MeetCard
          title="Воркшоп по делегированию"
          text="тут описание тут описание тут описание тут описание"
          href="#"
          date="24 марта"
          type="18:30 - 20:00"
          time="Офлайн"
        />
      </div>

      <SmallButton className="mt-6 py-6">Добавить себе Google-календарь движа</SmallButton>

      <div className="flex justify-between items-center w-full mt-6">
        <p className="text-lg">Регулярные активности</p>
        <ChevronRight className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-3 w-full mt-3">
        <InfoCard
          title="SPEAK"
          text="текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст "
          href="#"
          buttonText="Начать говорить"
        />
        <InfoCard
          title="SPEAK"
          text="тут описание тут описание тут описание тут описание тут описание тут описание"
          href="#"
          buttonText="Начать говорить"
        />
        <InfoCard
          title="SPEAK"
          text="тут описание тут описание тут описание тут описание тут описание тут описание"
          href="#"
          buttonText="Начать говорить"
        />
        <InfoCard
          title="SPEAK"
          text="тут описание тут описание тут описание тут описание тут описание тут описание"
          href="#"
          buttonText="Начать говорить"
        />
      </div>

      <div className="flex gap-4 p-4 flex-wrap w-full">
        <CustomImage src="images/image 6.png" description="Описание изображения" />

        <CustomImage src="images/image 7.png" description="Другое изображение" />

        <CustomImage src="images/image 8.png" description="Другое изображение" />
      </div>
    </Page>
  );
}
