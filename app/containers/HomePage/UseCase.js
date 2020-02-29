import styled from 'styled-components';

const UseCase = styled.div`
  width: 100vw;
  background-color: ${props => (props.even ? '#F5CAC3' : '#FFFFFF')};
  margin-left: -16px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: auto;
  padding: 30px 10px;
  flex-direction: ${props => (props.even ? 'column' : 'column-reverse')};

  div {
    width: auto;
  }

  img {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    height: 75vh;
    margin-left: calc((100vw - 1024px) / -2);
    padding: 30px 50px;
    flex-direction: ${props => (props.even ? 'row' : 'row-reverse')};

    div {
      width: 50%;
    }
  }

  @media screen and (max-width: 1024px) {
  }
`;

export default UseCase;
