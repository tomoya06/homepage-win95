import { EventEmitter } from 'events';
import { setStorage, getStorage } from '../../../utils';

const clock = new EventEmitter();

const CONSTANT = {
  TIMEZONELIST: 'TIMEZONE_LIST',
  TIMEZONELIST_UPDATE: 'TIMEZONELIST_UPDATE',
};

const triggerTimezoneListUpdate = () => clock.emit(CONSTANT.TIMEZONELIST_UPDATE);
const bindTimezoneListUpdateHandler = (func) => clock.on(CONSTANT.TIMEZONELIST_UPDATE, func);
const unbindTimezoneListUpdateHandler = (func) => clock.off(CONSTANT.TIMEZONELIST_UPDATE, func);

const updateTimezoneList = (timezoneList) => setStorage(CONSTANT.TIMEZONELIST, timezoneList);
const getTimezoneList = () => getStorage(CONSTANT.TIMEZONELIST);

export {
  updateTimezoneList,
  getTimezoneList,
  triggerTimezoneListUpdate,
  bindTimezoneListUpdateHandler,
  unbindTimezoneListUpdateHandler,
};
