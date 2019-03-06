// Test away
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  it('should render w/o crashing', () => {
    render(<Dashboard />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders display', () => {
    const { getByText } = render(<Dashboard />);
    // initial state is locked: false, closed: false
    // displays 'unlocked' and 'open'
    expect(getByText(/unlocked/i)).toBeInTheDocument;
    expect(getByText(/open/i)).toBeInTheDocument;
  });

  it('renders controls', () => {
    const { getByText } = render(<Dashboard />);
    // initial state is locked: false, closed: false
    // displays 'lock gate' and 'close gate' buttons
    expect(getByText(/lock gate/i)).toBeInTheDocument;
    expect(getByText(/close gate/i)).toBeInTheDocument;
  })
});