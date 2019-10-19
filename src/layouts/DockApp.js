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

  handleClick(e) {
    const { open } = this.state;
    this.setState({
      open: !open,
    });

    e.preventDefault();
  }

  handleBlur() {
    const { closeOnBlur } = this.props;
    if (!closeOnBlur) {
      return;
    }
    this.setState({
      open: false,
    });
  }

  render() {
    const { open } = this.state;
    const {
      trigger, popover, horizontalAlign, verticalAlign,
    } = this.props;
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {(open && popover) && (
          <List
            horizontalAlign={horizontalAlign}
            verticalAlign={verticalAlign}
          >
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
  trigger: PropTypes.node,
  popover: PropTypes.node,
  closeOnBlur: PropTypes.bool,
  horizontalAlign: PropTypes.string,
  verticalAlign: PropTypes.string,
};

DockApp.defaultProps = {
  popover: null,
  closeOnBlur: true,
  trigger: (<span> </span>),
  horizontalAlign: 'right',
  verticalAlign: 'top',
};

export default DockApp;
