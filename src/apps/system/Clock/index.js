import React from 'react';
import ReactClock from 'react-clock';
import { Button } from 'react95';
import moment from 'moment';

import DockApp from '../../../layouts/DockApp';

import './index.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: 'HH:mm:ss',
      currentTime: moment(),
    };
    this.timeout = null;

    this.dockAppRef = React.createRef();
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timeout);
  }

  updateCurrentTime = () => {
    this.setState({
      currentTime: moment(),
    });
  }

  handleClickSetting = () => {
    window.launchApp('system.clocksetting');
  }

  handleClickClose = () => {
    this.dockAppRef.current.handleClose();
  }

  render() {
    const { currentTime, timeFormat } = this.state;
    const trigger = (
      <span>{currentTime.format(timeFormat)}</span>
    );
    const popover = (
      <div className="clock-popover">
        <div className="clock-display">
          <div className="one-clock">
            <ReactClock value={currentTime.toDate()} />
            <div>LOCAL TIME</div>
          </div>
        </div>
        <div className="panel">
          <Button onClick={this.handleClickSetting} variant="menu">SETTING</Button>
          <Button onClick={this.handleClickClose} variant="menu">X</Button>
        </div>
      </div>
    );
    return (
      <DockApp
        trigger={trigger}
        popover={popover}
        closeOnBlur={false}
        ref={this.dockAppRef}
      />
    );
  }
}

export default Clock;
