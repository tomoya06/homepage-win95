import React from 'react';
import PropTypes from 'prop-types';

import { List, Button } from 'react95';

class DockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick() {
    this.setState({
      open: true,
    });
  }

  handleBlur() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { open } = this.state;
    const { trigger, popover } = this.props;
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {open && (
          <List horizontalAlign="right" verticalAlign="top" open={open}>
            {popover}
          </List>
        )}
        <Button onBlurCapture={this.handleBlur} onClick={this.handleClick} active={open}>
          {trigger}
        </Button>
      </div>
    );
  }
}

DockApp.propTypes = {
  trigger: PropTypes.node.isRequired,
  popover: PropTypes.node.isRequired,
};

export default DockApp;
