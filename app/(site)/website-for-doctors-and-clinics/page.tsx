import type { Metadata } from 'next';
import IndustryPage, { industryMetadata } from '@/components/industry/IndustryPage';
import { getIndustry } from '@/data/industries';

const industry = getIndustry('clinics');

export const metadata: Metadata = industryMetadata(industry);

export default function Page() {
  return <IndustryPage industry={industry} />;
}
