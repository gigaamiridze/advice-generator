import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { defaultTheme } from './theme/defaultTheme';
import { Slip } from './types/slip';
// Importing svgs
import divider from './assets/svg/pattern-divider.svg';
import dice from './assets/svg/dice.svg';
// Importing Components
import GlobalStyle from './components/GlobalStyle';
import AdviceCard from './components/AdviceCard';
import Title from './components/Title';
import Text from './components/Text';
import Divider from './components/Divider';
import RefreshBox from './components/RefreshBox';
import Dice from './components/Dice';

function App() {
  const [slip, setSlip] = useState({} as Slip);

  const getAdvice = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    const data = await response.data.slip;
    setSlip(data);
  }
    
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <AdviceCard 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Title>advice #{slip.id}</Title>
        <Text>“{slip.advice}”</Text>
        <Divider src={divider} alt="Divider" />
        <RefreshBox onClick={getAdvice}>
          <Dice src={dice} alt="Dice" />
        </RefreshBox>
      </AdviceCard>
    </ThemeProvider>
  )
}

export default App;