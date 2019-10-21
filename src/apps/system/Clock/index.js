import React from 'react';
import ReactClock from 'react-clock';
import { Button } from 'react95';
import moment from 'moment';

import DockApp from '../../../layouts/DockApp';

import {
  bindTimezoneListUpdateHandler, unbindTimezoneListUpdateHandler,
  getTimezoneList,
} from './eventBus';

import './index.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: 'HH:mm:ss',
      currentTime: moment(),
      timezoneList: getTimezoneList() || [],
    };
    this.timeout = null;

    this.dockAppRef = React.createRef();
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.updateCurrentTime();
    }, 10);

    bindTimezoneListUpdateHandler(this.updateTimezoneList);
  }

  componentWillUnmount = () => {
    clearInterval(this.timeout);
    unbindTimezoneListUpdateHandler(this.updateTimezoneList);
  }

  updateCurrentTime = () => {
    this.setState({
      currentTime: moment(),
    });
  }

  updateTimezoneList = () => {
    const timezoneList = getTimezoneList();
    this.setState({
      timezoneList,
    });
  }

  handleClickSetting = () => {
    window.launchApp('system.clocksetting');
  }

  handleClickClose = () => {
    this.dockAppRef.current.handleClose();
  }

  render() {
    const { currentTime, timeFormat, timezoneList } = this.state;
    const trigger = (
      <span>{currentTime.format(timeFormat)}</span>
    );
    const popover = (
      <div className="clock-popover">
        <div className="clock-display">
          <div className="one-clock">
            <ReactClock value={currentTime.toDate()} />
            <div className="desc">LOCAL TIME</div>
          </div>
          {
            timezoneList.map(({ lag, label }) => (
              <div
                key={`display-clock-${label}`}
                className="one-clock"
              >
                <ReactClock value={currentTime.add(lag, 'h').toDate()} />
                <div className="desc">{label.split(' ').join('\n')}</div>
              </div>
            ))
          }
        </div>
        <div className="panel">
          <Button onClick={this.handleClickSetting}>SETTING</Button>
          <Button onClick={this.handleClickClose}>X</Button>
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
