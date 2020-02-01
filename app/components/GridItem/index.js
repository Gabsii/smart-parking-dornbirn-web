import React from 'react';
import PropTypes from 'prop-types';

import FlipCardFront from './FlipCardFront';
import FlipCardBack from './FlipCardBack';
import FlipCardWrapper from './FlipCardWrapper';

function GridItem({ src, className, children }) {

  return (
    <FlipCardWrapper {...className}>
      <FlipCardFront 
        className='front' 
        style={{backgroundImage: `url('${src}')`}}
      />
      <FlipCardBack className='back'>{children}</FlipCardBack>
    </FlipCardWrapper>
  );
}

GridItem.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default GridItem;
