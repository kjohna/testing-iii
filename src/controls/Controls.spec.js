// Test away!
import React from 'react';
import { render } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
  it('renders w/o crashing', () => {
    const tmp = render(<Controls />);
  });
});