import type { Metadata } from 'next';

import Guide from './Guide';

export const metadata: Metadata = {
  title: 'Гайд',
  description: 'Гайд для новичков',
};

export default async function GuidePage() {
  return <Guide />;
}
