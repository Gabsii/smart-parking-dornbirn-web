import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export default Hero;
