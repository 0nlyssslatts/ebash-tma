'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { ClosingSection } from '@/components/ui/ClosingSection';
import { MainLoader } from '@/components/ui/MainLoader';
import { Section } from '@/components/ui/Section';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';
import { TextLighter } from '@/components/ui/Texts/TextLighter';

const List = dynamic(() => import('@/components/ui/List').then((mod) => mod.List), {
  ssr: false,
  loading: () => <div>Загрузка чек-листа...</div>,
});

interface GuidePageData {
  header: string;
  values: {
    titleValue: string;
    descriptionValue: string;
  }[];
  mindsetREPKA: {
    titleREPKA: string;
    descriptionREPKA: string;
    hrefREPKA: string;
  }[];
  dictionary: {
    term: string;
    meaning: string;
  }[];
  checklist: {
    check: string;
  }[];
}

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
            <TextLight>{titleValue}</TextLight>
            <TextLighter>{descriptionValue}</TextLighter>
          </div>
        ))}
      </ClosingSection>

      <ClosingSection header="MINDSET REPKA">
        {data.mindsetREPKA.map(({ titleREPKA, descriptionREPKA, hrefREPKA }, index) => (
          <div key={index} className="mb-3">
            <div>
              <TextLight>{titleREPKA}</TextLight>
              <TextLighter>{descriptionREPKA}</TextLighter>
            </div>
            <div>
              <a href={hrefREPKA} target="_blank" rel="noopener noreferrer">
                <Button>Смотреть вебинар</Button>
              </a>
            </div>
          </div>
        ))}
      </ClosingSection>

      <ClosingSection header="Словарь">
        {data.dictionary.map(({ term, meaning }, index) => (
          <div key={index} className="mb-3">
            <TextLight>{term}</TextLight>
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
