import styled from 'styled-components';

const Text = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.primary.lightCyan};
  line-height: 33px;

  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export default Text;