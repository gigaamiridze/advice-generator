import styled from 'styled-components';

const Error = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.red};
  line-height: 33px;
`;

export default Error;