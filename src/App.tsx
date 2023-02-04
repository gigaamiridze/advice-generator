import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;