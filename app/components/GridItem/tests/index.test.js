import React from 'react';
import { render } from 'react-testing-library';

import GridItem from '../index';

describe('<GridItem />', () => {
  it('should render the passed component if no children are passed', () => {
    const { container } = render(<GridItem></GridItem>);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should render the passed component if children are passed', () => {
    const { container } = render(<GridItem src=""><li>item</li></GridItem>);
    expect(container.querySelector('li')).not.toBeNull();
  });

  it('should render without children passed', () => {
    const {container} = render(<GridItem src=""/>)
    expect(container).not.toBeNull();
  });
});
