import React from 'react';
import {
  AppBar, Toolbar,
} from 'react95';

import ClockApp from '../apps/system/Clock';
import StartMenu from '../apps/system/StartMenu';

export default class SystemBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppBar style={{ top: 'auto', bottom: 0 }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div>
            <StartMenu />
          </div>
          <div>
            <ClockApp />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
