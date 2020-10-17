const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path =require("path")
const isDev = require("electron-is-dev");

let mainWindow;

 
function createWindow() {
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false,
        frame: false,

    });
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadURL(startURL);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);