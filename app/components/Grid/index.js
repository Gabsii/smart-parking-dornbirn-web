import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function Grid({children}) {
  return (<Wrapper>{ children }</Wrapper>);
}

Grid.propTypes = {
  children: PropTypes.array,
};

export default Grid;
