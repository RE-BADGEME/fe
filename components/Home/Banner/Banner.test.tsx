import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';
import { AppRouterContextProviderMock } from '@/test-utils';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'));

describe('Banner Unit Test', () => {
  it('RENDERING ALL TEXT', () => {
    const push = jest.fn();
    render(<Banner />, {
      wrapper: ({ children }: { children: ReactNode }) => (
        <AppRouterContextProviderMock router={{ push }}>
          {children}
        </AppRouterContextProviderMock>
      ),
    });
    expect(screen.getByText('REBADGE-ME')).toBeInTheDocument();
  });
});
