import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const TestWrapper = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default TestWrapper;
