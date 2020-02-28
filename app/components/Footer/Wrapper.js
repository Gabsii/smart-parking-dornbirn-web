import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 15% 3em;
  width: 100vw;
  color: #ffffff;
  background-color: #c1352e;
  top: -50px;
  z-index: +1;

  @media screen and (min-width: 1024px) {
    padding: 0 15% 3em;
  }
`;

export default Wrapper;
