'use client';

import { Button } from '@/components/ui/Button';
import { Header } from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="page">
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto p-4">
        <Header text='EBASH' />
        <div className="bg-secondary rounded px-5 py-3">
          <p className="text-lg">Здарова, че бакланишь?</p>
          <p className="text-sm mt-2">
            Мы сообщество тех, кто стремится к саморазвитию, ответственности за свою жизнь и осознанному подходу к ней.
            Не просто работаем, а вкладываемся на полную во все сферы жизни: от работы и учёбы до отдыха и личного роста
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <Button text="Гайд новичка" />
            <Button text="Календарь" />
            <Button text="Чаты" />
            <Button text="Регулярные активности" />
            <Button text="Ништяки и материалы" />
            <Button text="Написать куратору" />
          </div>
        </div>
      </div>
    </div>
  );
}
