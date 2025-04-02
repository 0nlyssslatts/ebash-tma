'use client';

import { useEffect } from 'react';

import { Page } from '@/components/Page';
import { Button } from '@/components/ui/Buttons/Button';
import { ClosingSection } from '@/components/ui/ClosingSection';
import { List } from '@/components/ui/List';
import { MainLoader } from '@/components/ui/MainLoader';
import { Section } from '@/components/ui/Section';
import { Header } from '@/components/ui/Texts/Header';
import { Text } from '@/components/ui/Texts/Text';
import { TextLight } from '@/components/ui/Texts/TextLight';
import { TextLighter } from '@/components/ui/Texts/TextLighter';

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
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.requestFullscreen();
      } catch (error) {
        console.log(error);
        tg.expand();
      }
    }
  }, []);

  if (!data) {
    return <MainLoader />;
  }
  return (
    <Page>
      <Header>{data.header}</Header>

      <ClosingSection header="Наши ценности">
        {data.values.map(({ titleValue, descriptionValue }) => (
          <div className="mb-5">
            <TextLight>{titleValue}</TextLight>
            <TextLighter>{descriptionValue}</TextLighter>
          </div>
        ))}
      </ClosingSection>
      <ClosingSection header="MINDSET REPKA">
        {data.mindsetREPKA.map(({ titleREPKA, descriptionREPKA, hrefREPKA }) => (
          <div className="mb-5">
            <div>
              <TextLight>{titleREPKA}</TextLight>
              <TextLighter>{descriptionREPKA}</TextLighter>
            </div>
            <div>
              <a href={hrefREPKA}>
                <Button>Смотреть вебинар</Button>
              </a>
            </div>
          </div>
        ))}
      </ClosingSection>

      <ClosingSection header="Словарь">
        {data.dictionary.map(({ term, meaning }) => (
          <div className="mb-5">
            <TextLight>{term}</TextLight>
            <TextLighter>{meaning}</TextLighter>
          </div>
        ))}
      </ClosingSection>

      <Section>
        <Text>Чек-лист EБАШера</Text>
        <TextLighter>пункты кликабельные, нажимай на них</TextLighter>
        <List className="mt-3" listArray={data.checklist} />
      </Section>
    </Page>
  );
}
