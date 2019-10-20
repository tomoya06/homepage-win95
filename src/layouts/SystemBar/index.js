import React from 'react';
import {
  AppBar, Toolbar, Divider, Button,
} from 'react95';
import PropTypes from 'prop-types';

import StartMenu from '../../apps/system/StartMenu';
import ClockApp from '../../apps/system/Clock';
import FullScreenToggle from '../../apps/system/FullScreenToggle';

import { SystemStore } from '../../core/System';

import './index.scss';

class SystemBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (appid) => {
    const { store } = this.props;
    store.activateApp(appid);
  }

  render() {
    const { store } = this.props;
    return (
      <AppBar style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <div>
            <StartMenu />
          </div>
          <div className="running-apps">
            {store.runningApps.map((app) => (
              <Button
                className="app-docker"
                onClick={() => this.handleClick(app.id)}
                active={app.isActive}
              >
                {app.displayName}
              </Button>
            ))}
          </div>
          <div className="widgets">
            <Divider vertical style={{ margin: '6px 0', height: 'auto' }} />
            <FullScreenToggle />
            <ClockApp />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

SystemBar.propTypes = {
  store: PropTypes.instanceOf(SystemStore).isRequired,
};

export default SystemBar;
