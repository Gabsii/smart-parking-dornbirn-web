import React from 'react';
import { render } from 'react-testing-library';

import FlipCardFront from '../FlipCardFront';

describe('<FlipCardFront />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<FlipCardFront />);
    expect(container.firstElementChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<FlipCardFront />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<FlipCardFront id={id} />);
    const element = container.firstElementChild;
    expect(element.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<FlipCardFront attribute="test" />);
    const element = container.firstElementChild;
    expect(element.hasAttribute('attribute')).toBe(false);
  });
});
