import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { defaultTheme } from './theme/defaultTheme';
import divider from './assets/svg/pattern-divider.svg';
// Importing Components
import GlobalStyle from './components/GlobalStyle';
import AdviceCard from './components/AdviceCard';
import Title from './components/Title';
import Text from './components/Text';
import Image from './components/Image';

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
        <Image src={divider} alt="Divider" />
      </AdviceCard>
    </ThemeProvider>
  )
}

export default App;