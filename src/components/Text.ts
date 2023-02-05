import styled from 'styled-components';

const Text = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.lightCyan};
  line-height: 33px;
  margin: 20px 0 30px;
`;

export default Text;