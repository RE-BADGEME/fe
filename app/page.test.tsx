import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Page', () => {
  test('should have a title', () => {
    render(<Home />);

    expect(screen.getByText('시작이 반이다. 가보자 넥스트!'));
  });
});
