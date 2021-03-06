import React from 'react';
import { observable, autorun, computed } from 'mobx';

import systemEvt from './SystemEventBus';
import { REGISTRY } from '../apps/registry';

export class SystemStore {
  appid = 0

  @observable runningApps = []

  @computed get runningAppids() {
    return this.runningApps.map((app) => app.id);
  }

  constructor() {
    autorun(() => console.log('system'));
  }

  launchApp(newApp) {
    const appid = newApp.id;
    if (this.runningAppids.includes(appid)) return -1;

    this.appid += 1;
    const App = newApp.app;
    const theApp = <App key={this.appid} />;
    const defaultDisplayName = newApp.name || 'UNKNOWN APP';
    this.runningApps.push({
      id: appid,
      displayName: defaultDisplayName,
      app: theApp,
      pid: this.appid,
      isActive: true,
    });

    this.activateApp(appid);

    return this.appid;
  }

  activateApp(appid) {
    for (let i = 0; i < this.runningApps.length; i += 1) {
      this.runningApps[i].isActive = appid === this.runningApps[i].id;
    }
  }

  terminateApp(appid) {
    this.runningApps = this.runningApps.filter((app) => app.id !== appid);
  }

  killApp(pid) {
    this.runningApps = this.runningApps.filter((app) => app.pid !== pid);
  }
}

const systemStore = new SystemStore();

systemEvt.on('launch', (appid) => {
  const targetApp = REGISTRY.find((app) => app.id.split('#')[0] === appid);
  if (!targetApp) return;
  console.log(systemStore.launchApp(targetApp));
});

systemEvt.on('terminate', (appid) => {
  systemStore.terminateApp(appid);
});

systemEvt.on('kill', (pid) => {
  systemStore.killApp(pid);
});

export default systemStore;
