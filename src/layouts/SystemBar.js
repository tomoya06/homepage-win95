import React from 'react';
import {
  AppBar, Toolbar,
} from 'react95';

import StartMenu from '../apps/system/StartMenu';
import ClockApp from '../apps/system/Clock';
import FullScreenToggle from '../apps/system/FullScreenToggle';

export default class SystemBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppBar style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-begin' }}>
            <StartMenu />
          </div>
          <div style={{ display: 'flex' }}>
            <FullScreenToggle />
            <ClockApp />
            <div />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
