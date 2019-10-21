import ClockSetting from './system/ClockSetting';
import IE from './system/Ie/index';

export const CATALOG = {
  APP: 'APPS',
  SETTING: 'SETTINGS',
  ABOUT: 'ABOUT',
};

export const REGISTRY = [
  {
    id: 'system.clocksetting',
    app: ClockSetting,
    catalog: CATALOG.SETTING,
    name: 'Clock Setting',
  },
  {
    id: 'system.ie',
    app: IE,
    catalog: CATALOG.APP,
    name: 'IE',
  },
];
