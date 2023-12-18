import { ReactNode } from 'react';
import HeaderTemplate from '@/components/Common/Template/HeaderTemplate';

type Layouts = {
  selection: ReactNode;
  result: ReactNode;
  children: ReactNode;
};

export default function Layout({ selection, result, children }: Layouts) {
  return (
    <HeaderTemplate>
      {children}
      {selection}
      {result}
    </HeaderTemplate>
  );
}
