import type { Metadata } from 'next';
import { groq } from 'next-sanity';

import Meets from './Meets';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Встречи',
  description: 'Расписание встреч',
};

export const revalidate = 600;

async function getMeetsPageData() {
  return await client.fetch(groq`
    *[_type == "meetsPage"][0]{
      title,
      upcomingEvents[] {
        title,
        description,
        date,
        time,
        type
      },
      calendarButton,
      regularActivities[] {
        title,
        description,
        buttonText
      },
      gallery[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            }
          }
        },
        alt
      }
    }
  `);
}

export default async function MeetsPage() {
  const data = await getMeetsPageData();
  return <Meets data={data} />;
}
