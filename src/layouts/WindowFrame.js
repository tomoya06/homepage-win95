import React from 'react';
import {
  Window, WindowHeader, WindowContent,
  Button,
} from 'react95';
import { Rnd } from 'react-rnd';
import PropTypes from 'prop-types';

class WindowFrame extends React.Component {
  parentClassname = null

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.parentClassname = this.getParentClassName();
  }

  handleCloseApp = () => {
    const { appid } = this.props;
    window.terminateApp(appid);
  }

  getParentClassName = () => this._reactInternalFiber._debugOwner.type.name

  render() {
    const {
      header, content, width, height, enableResizing,
    } = this.props;
    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width,
          height,
        }}
        dragHandleClassName="header"
        enableResizing={enableResizing}
      >
        <Window
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <WindowHeader
            className="header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {header}
            <Button
              onClick={this.handleCloseApp}
              style={{ marginRight: '-6px', marginTop: '1px' }}
              size="sm"
              square
            >
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>X</span>
            </Button>
          </WindowHeader>
          <WindowContent
            style={{
              overflow: 'hidden',
            }}
          >
            {content}
          </WindowContent>
        </Window>
      </Rnd>
    );
  }
}

WindowFrame.propTypes = {
  appid: PropTypes.string.isRequired,
  header: PropTypes.node,
  content: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableResizing: PropTypes.bool,
};

WindowFrame.defaultProps = {
  header: (<span>APPLICATION</span>),
  content: (<div>_BLANK</div>),
  width: 'auto',
  height: 'auto',
  enableResizing: true,
};

export default WindowFrame;
