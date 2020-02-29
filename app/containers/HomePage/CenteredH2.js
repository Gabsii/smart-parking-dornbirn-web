import styled from 'styled-components';
import H2 from '../../components/H2';

const CenteredH2 = styled(H2)`
  text-align: center;
  /* border-bottom: 1px solid black; */
  display: inline-flex;
  font-size: 2.25rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.9rem;
  }
`;

export default CenteredH2;
