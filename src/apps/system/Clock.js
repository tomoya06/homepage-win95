import React from 'react';
import moment from 'moment';
import DockApp from '../../layouts/DockApp';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: 'YYYY/MM/DD HH:mm',
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
      <div>DEMO</div>
    );
    return (
      <DockApp
        trigger={trigger}
        popover={popover}
      />
    );
  }
}

export default Clock;
