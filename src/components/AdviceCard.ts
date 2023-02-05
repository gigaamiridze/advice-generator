import styled from 'styled-components';

const AdviceCard = styled.div`
  max-width: 445px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrayishBlue};
  border-radius: 13px;
  padding: 40px;
  text-align: center;
`;

export default AdviceCard;