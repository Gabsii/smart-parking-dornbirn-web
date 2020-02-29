import styled from 'styled-components';

const TeamMessageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 50px 0 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: row-reverse;
    padding: 20px 50px 0;
  }
`;

export default TeamMessageWrapper;
