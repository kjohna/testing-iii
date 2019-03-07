// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  it('renders w/o crashing', () => {
    const tmp = render(<Controls />);
  });

  // Controls receives props according to default state from Dashboard:
  // { locked: false, closed: false }

  // test that buttons are provided to toggle closed and locked
  it('provides "Close Gate" button with default state', () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/close gate/i)).toBeInTheDocument;
  });

  it('provides "Lock Gate" button with default state', () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/lock gate/i)).toBeInTheDocument;
  });

  // test that buttons' text change when state is updated
  it('provides "Open Gate" button when state is closed: true', () => {
    const { getByText } = render(<Controls closed={true} />);
    expect(getByText(/open gate/i)).toBeInTheDocument;
  });

  it('provides "Unlock Gate" button when state is locked: true', () => {
    const { getByText } = render(<Controls locked={true} />);
    expect(getByText(/lock gate/i)).toBeInTheDocument;
  });

  // test that "open gate" toggle button is disabled if gate is closed and locked
  it('disables "open gate" toggle button if gate is locked', () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    // console.log('here', getByText(/open gate/i).disabled);
    expect(getByText(/open gate/i).disabled).toBe(true);
  });

  // test that locked toggle button is disabled if the gate is open
  // default props work for this
  it('disables the "lock gate" toggle button if gate is open', () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/lock gate/i).disabled).toBe(true);
  });
});