import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  reset, themes, List, ListItem, Divider,
} from 'react95';

import './App.css';

const ResetStyles = createGlobalStyle`
  ${reset}
`;


function App() {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <List>
          <ListItem>Sing</ListItem>
          <ListItem>Dance</ListItem>
          <Divider />
          <ListItem disabled>Sleep</ListItem>
        </List>
      </ThemeProvider>
    </div>
  );
}

export default App;
