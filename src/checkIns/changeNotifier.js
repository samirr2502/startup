// const GameEvent = {
//   System: 'system',
//   End: 'gameEnd',
//   Start: 'gameStart',
// };

// class ChangesMessage {
//   constructor(userName, change) {
//     this.userName = userName;
//     this.change = change;
//   }
// }

class ChangeNotifierClass {
  changes = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.receiveChange({userName:{userName:'System'},change:'connected'});
    };
    this.socket.onclose = (event) => {
      this.receiveChange({userName:{userName:'System'},change:'disconnected'});
    };
    this.socket.onmessage = async (msg) => {
      try {
        const change = JSON.parse(await msg.data.text());
        this.receiveChange(change);
      } catch {}
    };
  }

  broadcastChange(userName, _change) {
    const change = {userName:userName,change:_change};
    console.log(change)
    this.socket.send(JSON.stringify(change));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveChange(change) {
    this.changes.push(change);
    console.log(this.changes)
    this.changes.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}

const ChangeNotifier = new ChangeNotifierClass();
export {  ChangeNotifier };
