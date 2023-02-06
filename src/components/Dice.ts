import styled from 'styled-components';

const Dice = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow .25s ease-in-out;

  &:hover {
    box-shadow: 0 0 25px ${({theme}) => theme.colors.primary.neonGreen};
  }

  @media (max-width: 375px) {
    width: 55px;
    height: 55px;
  }
`;

export default Dice;