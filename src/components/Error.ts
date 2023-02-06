import styled from 'styled-components';

const Error = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.primary.red};
  line-height: 33px;

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export default Error;