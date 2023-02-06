import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdviceCard = styled(motion.div)`
  max-width: 445px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.neutral.darkGrayishBlue};
  border-radius: 13px;
  padding: 40px 40px 60px;
  text-align: center;
  position: relative;

  @media (max-width: 375px) {
    padding: 30px 20px 50px;
  }
`;

export default AdviceCard;