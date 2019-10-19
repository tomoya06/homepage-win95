import React from 'react';
import {
  Window, WindowHeader, WindowContent,
  Button,
} from 'react95';
import TzEditor from './TzEditor';

class ClockSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Window>
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>Clock Setting</span>
          <Button style={{ marginRight: '-6px', marginTop: '1px' }} size="sm" square>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>X</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <TzEditor />
        </WindowContent>
      </Window>
    );
  }
}

export default ClockSetting;
