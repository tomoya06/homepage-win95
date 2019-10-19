import React from 'react';
import {
  Window, WindowHeader, WindowContent,
  Button,
} from 'react95';
import PropTypes from 'prop-types';
import SystemStore from '../stores/System';

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
    SystemStore.killApp(this.parentClassname);
  }

  getParentClassName = () => this._reactInternalFiber._debugOwner.type.name

  render() {
    const { header, content } = this.props;
    return (
      <Window>
        <WindowHeader
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
        <WindowContent>
          {content}
        </WindowContent>
      </Window>
    );
  }
}

WindowFrame.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
};

WindowFrame.defaultProps = {
  header: (<span>APPLICATION</span>),
  content: (<div>_BLANK</div>),
};

export default WindowFrame;
