import styled from 'styled-components';

const Street = styled.div`
  width: 100vw;
  height: 100px;
  background-color: grey;
  position: absolute;
  left: 0;
  top: 355px;

  &::after {
    content: '';
    width: 100%;
    height: 10%;
    background-color: darkgray;
    position: absolute;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export default Street;
