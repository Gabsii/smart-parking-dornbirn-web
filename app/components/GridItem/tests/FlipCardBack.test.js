import React from 'react';
import { render } from 'react-testing-library';

import FlipCardBack from '../FlipCardBack';

describe('<FlipCardBack />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<FlipCardBack />);
    expect(container.firstElementChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<FlipCardBack />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<FlipCardBack id={id} />);
    const element = container.firstElementChild;
    expect(element.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<FlipCardBack attribute="test" />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('attribute')).toBe(false);
  });
});
