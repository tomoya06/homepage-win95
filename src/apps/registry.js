import ClockSetting from './system/ClockSetting';

const CATALOG = {
  APP: 'APPLICATION',
  IFRAME: 'SITES',
  SETTING: 'SETTINGS',
  ABOUT: 'ABOUT',
};

const REGISTRY = [
  {
    id: 'system.clocksetting',
    app: ClockSetting,
    catalog: CATALOG.SETTING,
  },
];

export default {
  CATALOG,
  REGISTRY,
};
