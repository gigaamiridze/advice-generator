import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { defaultTheme } from './theme/defaultTheme';
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
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <AdviceCard>
        <Title>advice #177</Title>
        <Text>
          “It is easy to sit up and take
          notice, what’s difficult is getting
          up and taking action.”
        </Text>
        <Divider src={divider} alt="Divider" />
        <RefreshBox>
          <Dice src={dice} alt="dice" />
        </RefreshBox>
      </AdviceCard>
    </ThemeProvider>
  )
}

export default App;