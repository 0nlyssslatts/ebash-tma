'use client';

import dynamic from 'next/dynamic';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { ClosingSection } from '@/components/ui/ClosingSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Section } from '@/components/ui/Section';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLighter } from '@/components/ui/Texts/TextLighter';

import { GuidePageData } from '@/lib/types/guide';

const List = dynamic(() => import('@/components/ui/List').then((mod) => mod.List), {
  ssr: false,
  loading: () => <MainLoader />,
});

export default function Guide(data: GuidePageData) {
  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.header}</Header>

      <ClosingSection header="Наши ценности">
        {data.values.map(({ titleValue, descriptionValue }, index) => (
          <div key={index} className="mb-3">
            <Text>{titleValue}</Text>
            <TextLighter>{descriptionValue}</TextLighter>
          </div>
        ))}
      </ClosingSection>

      <ClosingSection header="MINDSET REPKA">
        {data.mindsetREPKA.map(({ titleREPKA, descriptionREPKA, hrefREPKA }, index) => (
          <div key={index} className="mb-3">
            <div>
              <Text>{titleREPKA}</Text>
              <TextLighter>{descriptionREPKA}</TextLighter>
            </div>
            <div>
              <Button onClick={() => (window.location.href = hrefREPKA)}>Смотреть вебинар</Button>
            </div>
          </div>
        ))}
      </ClosingSection>

      <ClosingSection header="Словарь">
        {data.dictionary.map(({ term, meaning }, index) => (
          <div key={index} className="mb-3">
            <Text>{term}</Text>
            <TextLighter>{meaning}</TextLighter>
          </div>
        ))}
      </ClosingSection>

      <Section className="mt-7">
        <Text>Чек-лист EБАШера</Text>
        <List listArray={data.checklist} />
      </Section>
    </Page>
  );
}
