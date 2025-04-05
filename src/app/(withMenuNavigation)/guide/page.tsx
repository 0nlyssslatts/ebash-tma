import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Guide from './Guide';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Гайд',
  description: 'Гайд для новичков',
};

export const revalidate = 600;

async function getGuidePageData() {
  return await client.fetch(groq`*[_type == "guidePage"][0]{
    header, 
    "values": values[] { titleValue, descriptionValue },
    "mindsetREPKA": mindsetREPKA[] { titleREPKA, descriptionREPKA, hrefREPKA },
    "dictionary": dictionary[] { term, meaning },
    "checklist": checklist[] { check },
  }`);
}

export default async function GuidePage() {
  const data = await getGuidePageData();
  return <Guide {...data} />;
}
