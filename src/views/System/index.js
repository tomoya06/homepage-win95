import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import SystemBar from '../../layouts/SystemBar';

import './index.scss';

@observer
class System extends Component {
  render() {
    const { store } = this.props;
    const { runningApps } = store;
    return (
      <div className="system-view">
        <div className="desktop">
          {runningApps.map(({ app }) => app)}
        </div>
        <div className="dock">
          <SystemBar />
        </div>
      </div>
    );
  }
}

System.propTypes = {
  store: PropTypes.shape({
    runningApps: PropTypes.array,
  }),
};

System.defaultProps = {
  store: {
    runningApps: [],
  },
};

export default System;
