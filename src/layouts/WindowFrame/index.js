import React from 'react';
import {
  Window, WindowHeader, WindowContent,
  Button,
} from 'react95';
import { Rnd } from 'react-rnd';
import PropTypes from 'prop-types';

class WindowFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleCloseApp = () => {
    const { appid } = this.props;
    window.terminateApp(appid);
  }

  render() {
    const {
      header, content, width, height, enableResizing,
      contentClassName,
    } = this.props;
    return (
      <Rnd
        default={{
          x: 0,
          y: 0,
          width,
          height,
        }}
        dragHandleClassName="window--header"
        enableResizing={enableResizing}
      >
        <Window
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <WindowHeader
            className="window--header"
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
            className={contentClassName}
            style={{
              overflow: 'hidden',
              flexGrow: 1,
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
  contentClassName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableResizing: PropTypes.bool,
};

WindowFrame.defaultProps = {
  header: (<span>APPLICATION</span>),
  content: (<div>_BLANK</div>),
  contentClassName: '',
  width: 'auto',
  height: 'auto',
  enableResizing: true,
};

export default WindowFrame;
