import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 50px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 600px) {
    margin: 10px 0;
    grid-template-columns: 1fr;
  }
`;

export default Wrapper;
