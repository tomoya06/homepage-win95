import React from 'react';
import DockApp from '../../layouts/DockApp';

import StartMenuPopover from './StartMenuPopover';

import './StartMenu.scss';

class StartMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const trigger = (
      <span>START</span>
    );
    const popover = (<StartMenuPopover />);
    return (
      <DockApp trigger={trigger} popover={popover} horizontalAlign="left" closeOnBlur={false} />
    );
  }
}

export default StartMenu;
