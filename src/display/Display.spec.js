// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Display from './Display';

describe ('<Display />', () => {
  it('renders w/o crashing', () => {
    const tmp = render(<Display />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  // Display's props default to:
  // { closed: false, locked: false }
  it('displays "open" when gate is open', () => {
    // default props work for this
    const { getByText } = render(<Display />);
    expect(getByText(/open/i)).toBeInTheDocument;
  });

  it('displays "closed" when gate is closed', () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i)).toBeInTheDocument;
  });

  it('displays "unlocked" when gate is unlocked', () => {
    //default props work here
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i)).toBeInTheDocument;
  });

  it('displays "locked" when gate is locked', () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toBeInTheDocument;
  });
});