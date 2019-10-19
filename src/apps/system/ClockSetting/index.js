import React from 'react';
import TzEditor from './TzEditor';
import WindowFrame from '../../../layouts/WindowFrame';

class ClockSetting extends React.Component {
  appName = 'system.clocksettings'

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const header = (<span>Clock Setting</span>);
    const content = (<TzEditor />);
    return (
      <WindowFrame header={header} content={content} enableResizing={false} />
    );
  }
}

export default ClockSetting;
