'use client';

import { useRouter } from 'next/navigation';

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

import { GuidePageData } from '@/lib/types/guide';

export default function Guide(data: GuidePageData) {
  const router = useRouter();

  if (!data) {
    return <MainLoader />;
  }

  return (
    <Page>
      <Header>{data.header}</Header>

      <ClosingSection header="Наши ценности">
        {data.values.map(({ titleValue, descriptionValue }, index: number) => (
          <div key={index} className="mb-3">
            <TextLight>{titleValue}</TextLight>
            <TextLighter>{descriptionValue}</TextLighter>
          </div>
        ))}
      </ClosingSection>
      <ClosingSection header="MINDSET REPKA">
        {data.mindsetREPKA.map(({ titleREPKA, descriptionREPKA, hrefREPKA }, index: number) => (
          <div key={index} className="mb-3">
            <div>
              <TextLight>{titleREPKA}</TextLight>
              <TextLighter>{descriptionREPKA}</TextLighter>
            </div>
            <div>
              <Button onClick={() => router.push(hrefREPKA)}>Смотреть вебинар</Button>
            </div>
          </div>
        ))}
      </ClosingSection>

      <ClosingSection header="Словарь">
        {data.dictionary.map(({ term, meaning }, index: number) => (
          <div key={index} className="mb-3">
            <TextLight>{term}</TextLight>
            <TextLighter>{meaning}</TextLighter>
          </div>
        ))}
      </ClosingSection>

      <Section className="mt-7">
        <Text>Чек-лист EБАШера</Text>
        <List className="mt-3" listArray={data.checklist} />
      </Section>
    </Page>
  );
}
