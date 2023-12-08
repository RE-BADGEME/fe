import { ReactNode } from 'react';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return <HeaderTemplate>{children}</HeaderTemplate>;
}
