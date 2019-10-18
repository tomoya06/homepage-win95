import React from 'react';
import {
  AppBar, Toolbar, Button,
} from 'react95';

import ClockApp from '../apps/system/Clock';

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
            <Button style={{ fontWeight: 'bold' }}>
              Start
            </Button>
          </div>
          <div>
            <ClockApp />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
