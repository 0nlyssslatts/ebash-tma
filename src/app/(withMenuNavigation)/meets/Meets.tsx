'use client';

import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Texts/Header';

export default function Meets() {
  return (
    <Page>
      <Header>MEETS</Header>
      <DarkSection>
        <p className='text-center font-bold'>В этом календаре весь наш движ</p>
      </DarkSection>

      {/* Сюда календарь */}

      <SmallButton className='mt-6 rounded-lg'>Написать в поддержку</SmallButton>

      <p className='mt-6 text-lg self-start'>Скоро будет</p>
    </Page>
  );
}
