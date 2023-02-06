import styled from 'styled-components';

const Title = styled.h3`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.primary.neonGreen};
  margin-bottom: 20px;
`;

export default Title;