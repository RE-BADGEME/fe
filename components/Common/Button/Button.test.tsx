import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import mockRouter from 'next-router-mock';
import RoundRoutingButton from './RoundRoutingButton';
import TestWrapper from '@/__tests__/utils';
import { AppRouterContextProviderMock } from '@/test-utils';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'));

describe('RoundRoutingButtonTest', () => {
  it('RENDERING ALL TEXT', () => {
    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <RoundRoutingButton>test</RoundRoutingButton>
      </AppRouterContextProviderMock>,

      { wrapper: TestWrapper },
    );

    expect(document.querySelector('button')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('CLICK EVENT', async () => {
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <RoundRoutingButton routingPath="dashboard/selection">
          test
        </RoundRoutingButton>
      </AppRouterContextProviderMock>,

      { wrapper: TestWrapper },
    );

    userEvent.click(screen.getByText('test'));

    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: '/dashboard/selection',
        pathname: '/dashboard/selection',
        query: {},
      });
    });
  });

  it('Check Default Path', async () => {
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <RoundRoutingButton>test</RoundRoutingButton>
      </AppRouterContextProviderMock>,

      { wrapper: TestWrapper },
    );

    userEvent.click(screen.getByText('test'));

    await waitFor(() => {
      expect(mockRouter).toMatchObject({
        asPath: '/home',
        pathname: '/home',
        query: {},
      });
    });
  });
});
