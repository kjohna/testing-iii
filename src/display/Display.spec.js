// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Display from './Display';

afterEach(cleanup);

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

  // test gate open: text and class
  // default props work for this
  it('displays "open" when gate is open', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/open/i)).toBeInTheDocument;
  });

  it('uses "green-led" class when gate is open', () => {
    const { getByText } = render(<Display />);
    // console.log(getByText(/open/i).classList);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
  });

  // test gate closed: text and class
  it('displays "closed" when gate is closed', () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i)).toBeInTheDocument;
  });

  it('uses "red-led" class when gate is closed', () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
  })

  // test gate unlocked: text and class
  //default props work here
  it('displays "unlocked" when gate is unlocked', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i)).toBeInTheDocument;
  });

  it('uses "green-led" class when gate is unlocked', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
  });

  // test gate locked: text and class
  it('displays "locked" when gate is locked', () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toBeInTheDocument;
  });

  it('uses "red-led" class when gate is locked', () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i).classList.contains('red-led')).toBe(true);
  });
});