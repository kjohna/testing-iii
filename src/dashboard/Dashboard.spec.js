// Test away
import React from 'react';
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render w/o crashing', () => {
    const tmp = render(<Dashboard />);
  });
});