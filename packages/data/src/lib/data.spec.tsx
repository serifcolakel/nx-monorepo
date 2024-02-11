/* eslint-disable @typescript-eslint/no-unsafe-call */
import { render } from '@testing-library/react';

import Data from './data';

describe('Data', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Data text="123" />);

    expect(baseElement).toBeTruthy();
  });
});
