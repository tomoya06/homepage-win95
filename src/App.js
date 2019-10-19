import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes } from 'react95';
import { Provider } from 'react-redux';

import System from './views/System/index';

import store from './redux/store';

import './App.css';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <System />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
