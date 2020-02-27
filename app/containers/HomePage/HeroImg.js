import styled from 'styled-components';

import NormalImg from 'components/Img';

const HeroImg = styled(NormalImg)`
  width: 50%;
  display: block;
  margin: 30px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default HeroImg;
