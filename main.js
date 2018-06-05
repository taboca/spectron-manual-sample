const {app, BrowserWindow} = require('electron');
const createVideoRecorder = require('electron-recorder')

console.log('init');

let win;

app.on('ready', () => {
  win = new BrowserWindow();
  win.once('did-finish-load', () => {
  //  win.show()
  })
  win.loadURL('file://' + __dirname + '/recorder.html');

});
