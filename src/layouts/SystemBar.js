import React from 'react';
import {
  AppBar, Toolbar, Divider,
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
          <div>
            <StartMenu />
          </div>
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-begin' }} />
          <div style={{ display: 'flex' }}>
            <Divider vertical style={{ margin: '6px 0', height: 'auto' }} />
            <FullScreenToggle />
            <ClockApp />
            <div />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
