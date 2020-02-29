import styled from "styled-components";
import Img from 'components/Img';

const TeamImg = styled(Img)`
  width: 33%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default TeamImg;