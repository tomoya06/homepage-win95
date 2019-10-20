import { EventEmitter } from 'events';

const system = new EventEmitter();

window.launchApp = (appid) => system.emit('launch', appid);
window.terminateApp = (appid) => system.emit('terminate', appid);
window.killApp = (pid) => system.emit('kill', pid);

export default system;
