import React from 'react';
import { render } from 'react-testing-library';

import Grid from '../index';

describe('<Grid />', () => {
  it('should render the passed component if no items are passed', () => {
    const { container } = render(<Grid />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should render all childrens', () => {
    const { container } = render(
      <Grid>
        <span>Item1</span>
        <span>Item2</span>
      </Grid>,
    );
    const elements = container.querySelectorAll('span');
    expect(elements).toHaveLength(2);
  });
});
