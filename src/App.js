import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes } from 'react95';

import System from './views/System/index';

import SystemStore from './core/System';

import './App.css';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <System store={SystemStore} />
      </ThemeProvider>
    </div>
  );
}

export default App;
