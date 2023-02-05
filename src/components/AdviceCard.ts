import styled from 'styled-components';

const AdviceCard = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrayishBlue};
  border-radius: 10px;
  padding: 48px;
  text-align: center;
`;

export default AdviceCard;