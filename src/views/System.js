import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SystemBar from '../layouts/SystemBar';

import './System.less';

class System extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { children } = this.props;
    return (
      <div className="system-view">
        <div className="desktop">
          {children}
        </div>
        <div className="dock">
          <SystemBar />
        </div>
      </div>
    );
  }
}

System.propTypes = {
  children: PropTypes.node.isRequired,
};

export default System;
