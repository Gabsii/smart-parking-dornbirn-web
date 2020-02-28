import styled from 'styled-components';

const FlipCardWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  background: #fafafa;

  box-shadow: 0 2.2px 3.4px rgba(0, 0, 0, 0.012),
    0 4.8px 5.4px rgba(0, 0, 0, 0.019), 0 8px 6.4px rgba(0, 0, 0, 0.024),
    0 12px 7.5px rgba(0, 0, 0, 0.027), 0 17.6px 9.9px rgba(0, 0, 0, 0.03),
    0 26.2px 15.2px rgba(0, 0, 0, 0.035), 0 41px 24.7px rgba(0, 0, 0, 0.046),
    0 77px 40px rgba(0, 0, 0, 0.07);

  border-radius: 10px;

  &:hover,
  &:active {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default FlipCardWrapper;
