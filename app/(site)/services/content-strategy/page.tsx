import type { Metadata } from 'next';
import ServicePage, { serviceMetadata } from '@/components/service/ServicePage';
import { getService } from '@/data/services';

const service = getService('content-strategy');

export const metadata: Metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
