import React from 'react';
import { MdFullscreen } from 'react-icons/md';
import DockApp from '../../../layouts/DockApp';

import { toggleFullScreen } from '../../../utils/index';

const trigger = (
  <span><MdFullscreen /></span>
);

const FullScreenToggle = () => (
  <DockApp trigger={trigger} onClick={toggleFullScreen} />
);

export default FullScreenToggle;
