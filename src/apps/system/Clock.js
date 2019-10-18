import React from 'react';
import moment from 'moment';

import { Button, List } from 'react95';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      timeFormat: 'YYYY/MM/DD HH:mm',
      currentTime: moment(),
    };
    this.timeout = null;

    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open, currentTime, timeFormat } = this.state;
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {open && (
          <List horizontalAlign="right" verticalAlign="top" open={open}>
            <div>DEMO</div>
          </List>
        )}
        <Button onClick={this.handleClick} active={open} style={{ fontWeight: 'bold' }}>
          { currentTime.format(timeFormat)}
        </Button>
      </div>
    );
  }
}

export default Clock;
