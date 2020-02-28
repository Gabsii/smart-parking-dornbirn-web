import styled from 'styled-components';

const Button = styled.a`
  height: 2.5rem;
  min-width: 175px;

  border: none;
  border-radius: 30px;
  margin-bottom: 10px;
  padding: 5px 20px;
  outline: none;

  font-size: 1rem;
  line-height: 1.8rem;
  color: white;
  background-color: ${props => (props.disabled ? '#8d8d8d' : '#09ae41')};
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 1024px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => (props.disabled ? '#8d8d8d' : '#0ac64a')};
  }
`;

export default Button;
