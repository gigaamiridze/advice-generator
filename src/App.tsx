import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { defaultTheme } from './theme/defaultTheme';
// Importing Components
import GlobalStyle from './components/GlobalStyle';
import AdviceCard from './components/AdviceCard';
import Title from './components/Title';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      <AdviceCard>
        <Title>advice #177</Title>
      </AdviceCard>
    </ThemeProvider>
  )
}

export default App;