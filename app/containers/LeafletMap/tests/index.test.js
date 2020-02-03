import React from 'react';
import { render } from 'react-testing-library';

import LeafletMap from '../index';

describe('<LeafletMap />', () => {
  it('should contain the leaflet-container class ', () => {
    const { container } = render(<LeafletMap />);
    expect(container.firstChild.classList.contains('leaflet-container')).toBe(true);
  });
});
