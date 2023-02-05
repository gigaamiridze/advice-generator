import styled from 'styled-components';

const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.neonGreen};
`;

export default Title;