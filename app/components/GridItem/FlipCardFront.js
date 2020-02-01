import styled from 'styled-components';

const FlipCardFront = styled.div`
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;

  transform: rotateY(0deg);

  display: block;
  color: white;
  width: inherit;
  height: inherit;
  background-size: cover !important;
  background-position: center !important;
  padding: 1em 2em;
  background: #313131;
  border-radius: 10px;
  
  p {
    font-size: 0.9125rem;
    line-height: 160%;
    color: #999;
  }
`;

export default FlipCardFront;
