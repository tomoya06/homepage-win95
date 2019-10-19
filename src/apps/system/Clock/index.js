import React from 'react';
import ReactClock from 'react-clock';
import moment from 'moment';
import DockApp from '../../../layouts/DockApp';

import './clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: 'HH:mm:ss',
      currentTime: moment(),
    };
    this.timeout = null;

    this.updateCurrentTime = this.updateCurrentTime.bind(this);
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  updateCurrentTime() {
    this.setState({
      currentTime: moment(),
    });
  }

  render() {
    const { currentTime, timeFormat } = this.state;
    const trigger = (
      <span>{currentTime.format(timeFormat)}</span>
    );
    const popover = (
      <div className="clock-popover">
        <div className="clock-display">
          <ReactClock value={currentTime.toDate()} />
        </div>
      </div>
    );
    return (
      <DockApp
        trigger={trigger}
        popover={popover}
        closeOnBlur={false}
      />
    );
  }
}

export default Clock;
