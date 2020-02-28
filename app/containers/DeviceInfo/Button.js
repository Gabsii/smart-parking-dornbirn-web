import styled from 'styled-components';

const Button = styled.button`
  border-radius: 30px;
  min-width: 150px;
  outline: none;
  border: none;
  padding: 5px 20px;
  background-color: #09ae41;
  color: white;
  font-size: 1rem;
  height: 2.5rem;

  @media screen and (max-width: 1024px) {
    margin-top: 25px;
  }

`;

export default Button;
