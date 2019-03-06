// Test away!
import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe ('<Display />', () => {
  it('renders w/o crashing', () => {
    const tmp = render(<Display />);
  });
});