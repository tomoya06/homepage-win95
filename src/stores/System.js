import React from 'react';
import { observable, autorun } from 'mobx';

class SystemStore {
  appid = 0

  @observable runningApps = []

  constructor() {
    autorun(() => console.log('system'));
  }

  launchApp(NewApp) {
    try {
      const app = <NewApp />;
      const appName = app.type.name;
      if (!appName) {
        throw new Error('NO APPNAME ASSIGNED.');
      }
      this.appid += 1;
      this.runningApps.push({
        id: this.appid,
        app,
        appName,
        active: true,
      });

      for (let i = 0; i < this.runningApps.length - 1; i += 1) {
        this.runningApps[i].active = false;
      }
      return this.appid;
    } catch (error) {
      console.log('LAUNCH APP FAILED');
      console.error(error);
      return null;
    }
  }

  killApp(appName) {
    console.log(`CLOSE APP ${appName} ${this.runningApps.length}`);
    this.runningApps = this.runningApps.filter((app) => app.appName !== appName);
  }
}

export default new SystemStore();
