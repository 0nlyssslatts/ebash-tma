import type { Metadata } from 'next';

import Meets from './Meets';

export const metadata: Metadata = {
  title: 'Встречи',
  description: 'Расписание встреч',
};

export default async function MeetsPage() {
  return <Meets />;
}
