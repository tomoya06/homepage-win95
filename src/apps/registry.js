import ClockSetting from './system/ClockSetting';

export const CATALOG = {
  APP: 'APPLICATION',
  IFRAME: 'SITES',
  SETTING: 'SETTINGS',
  ABOUT: 'ABOUT',
};

export const REGISTRY = [
  {
    id: 'system.clocksetting',
    app: ClockSetting,
    catalog: CATALOG.SETTING,
    name: 'Clock',
  },
];
