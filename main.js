const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

app.setName('Vibe Time');

let controlWin = null;

function createControl() {
  controlWin = new BrowserWindow({
    width: 820,
    height: 900,
    minWidth: 420,
    minHeight: 500,
    title: 'Vibe Time — Control',
    backgroundColor: '#111317',
    autoHideMenuBar: true,
  });

  // control.html opens display.html with window.open(); style that window here.
  controlWin.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('file:') && url.endsWith('display.html')) {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          width: 1280,
          height: 720,
          title: 'Vibe Time — Display',
          backgroundColor: '#000000',
          autoHideMenuBar: true,
        },
      };
    }
    // Anything else (e.g. a web link) goes to the system browser.
    shell.openExternal(url);
    return { action: 'deny' };
  });

  controlWin.loadFile(path.join(__dirname, 'control.html'));

  // Closing the control window ends the show: close the display too.
  controlWin.on('closed', () => {
    controlWin = null;
    app.quit();
  });
}

const isMac = process.platform === 'darwin';
Menu.setApplicationMenu(Menu.buildFromTemplate([
  ...(isMac ? [{ role: 'appMenu' }] : []),
  { role: 'editMenu' },
  {
    label: 'View',
    submenu: [{ role: 'reload' }, { role: 'togglefullscreen' }, { type: 'separator' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }],
  },
  { role: 'windowMenu' },
]));

app.whenReady().then(createControl);
app.on('window-all-closed', () => app.quit());
