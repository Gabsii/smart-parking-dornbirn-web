import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;

  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);

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

export default Wrapper;
