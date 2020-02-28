import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.02),
    0 1.3px 5.3px rgba(0, 0, 0, 0.028), 0 2.7px 10px rgba(0, 0, 0, 0.035),
    0 5.2px 17.9px rgba(0, 0, 0, 0.042), 0 11.1px 33.4px rgba(0, 0, 0, 0.05),
    0 40px 80px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 20px 35px 30px;
  background-color: white;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default Wrapper;
