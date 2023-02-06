import styled from 'styled-components';

const Loading = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid ${({theme}) => theme.colors.primary.neonGreen};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin-top: 5px;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 375) {
    width: 40px;
    height: 40px;
  }
`;

export default Loading;