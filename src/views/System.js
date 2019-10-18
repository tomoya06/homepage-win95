import React, { Component } from 'react';
import { Bar } from 'react95';

export default class System extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          {children}
        </div>
        <Bar />
      </div>
    );
  }
}
