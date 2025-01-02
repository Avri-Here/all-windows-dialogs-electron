




require('./utils/config');
const { join } = require('path');
const handleAndServeApp = require('./utils/handlers');
const { app, BrowserWindow, screen } = require('electron');



const showWindowsVistaDialog = (pageName = 'vista') => {

    let width = 455, height = 213;
    pageName === 'flow' && (width = 485, height = 350);

    return new Promise((resolve, reject) => {

        app.whenReady().then(() => {

            const mainWindow = new BrowserWindow({
                alwaysOnTop: true, width, height,
                roundedCorners: true, show: false,
                resizable: false, maximizable: false,
                frame: false, hasShadow: true, title: 'vistaDialog',
                icon: join(__dirname, `pages/${pageName}/icons/${pageName}.ico`),
                webPreferences: {
                    sandbox: false, nodeIntegration: true,
                    preload: join(__dirname, `pages/${pageName}/preload.js`)
                }
            });

            handleAndServeApp(pageName);
            mainWindow.loadFile(join(__dirname, `pages/${pageName}/index.html`));


            const workAreaSize = screen.getPrimaryDisplay().workAreaSize;
            const screenWidth = workAreaSize.width, screenHeight = workAreaSize.height;

            mainWindow.setBounds({
                width, height,
                x: Math.round((screenWidth - width) / 2),
                y: Math.round((screenHeight - height) / 2)
            });

            mainWindow.once('ready-to-show', async () => {

                if (process.env.IS_DEV_MODE) {
                    mainWindow.webContents.openDevTools({ mode: 'undocked' });
                };

                mainWindow.show();
                resolve('vistaDialog');
            });

        }).catch(reject);

        app.on('window-all-closed', () => {

            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
    });
};

module.exports = { showWindowsVistaDialog };


// const cleanAndDestroy = () => {
//     cleanup();
//     if (promptWindow) {
//         promptWindow.destroy();
//         promptWindow = null;
//     }
// };

