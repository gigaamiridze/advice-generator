import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdviceCard = styled(motion.div)`
  max-width: 445px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrayishBlue};
  border-radius: 13px;
  padding: 40px 40px 60px 40px;
  text-align: center;
  position: relative;
`;

export default AdviceCard;