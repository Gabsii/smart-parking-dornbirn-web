import styled from 'styled-components';

const FlipCardWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  
  &:hover {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
`

export default FlipCardWrapper;