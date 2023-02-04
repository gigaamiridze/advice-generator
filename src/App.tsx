import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
// Importing Components
import GlobalStyle from './components/GlobalStyle';
import AdviceCard from './components/AdviceCard';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AdviceCard>
        
      </AdviceCard>
    </ThemeProvider>
  )
}

export default App;