'use client';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { ClosingSection } from '@/components/ui/ClosingSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Header } from '@/components/ui/Texts/Header';
import { TextLight } from '@/components/ui/Texts/TextLight';
import { TextLighter } from '@/components/ui/Texts/TextLighter';

import { BonusPageProps } from '@/lib/types/bonus';

export default function Bonus(data: BonusPageProps) {
  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.header}</Header>
      {data.bonuses.map(({ title, description, buttonDescription, buttonText, buttonHref }, index) => (
        <ClosingSection header={title} key={index}>
          <TextLight>{description}</TextLight>
          <TextLighter>{buttonDescription}</TextLighter>
          <Button onClick={() => (window.location.href = buttonHref)}>{buttonText}</Button>
        </ClosingSection>
      ))}
    </Page>
  );
}
