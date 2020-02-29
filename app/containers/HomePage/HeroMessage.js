import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c1352e;
  color: #ffffff;
  padding: 30px 40px;
  text-align: center;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morphing 15s infinite;

  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.4);
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 75px 30px;
    width: auto;
  }
`;

export default Hero;
