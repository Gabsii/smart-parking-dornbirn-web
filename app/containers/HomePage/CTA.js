import styled from 'styled-components';

const CTA = styled.a`
  padding: 20px 50px;
  border-radius: 50px;
  background-color: #c1352e;
  color: #fff;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  font-size: 1.2rem;
  font-weight: bold;

  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.02),
    0 1.3px 5.3px rgba(0, 0, 0, 0.028), 0 2.7px 10px rgba(0, 0, 0, 0.035),
    0 5.2px 17.9px rgba(0, 0, 0, 0.042), 0 11.1px 33.4px rgba(0, 0, 0, 0.05),
    0 40px 80px rgba(0, 0, 0, 0.07);

  &:hover {
    background-color: #d04039;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    min-width: 250px;
  }
`;

export default CTA;
