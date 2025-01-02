require('./utils/config');

const { join } = require('path');
const { app, BrowserWindow, ipcMain, screen } = require('electron');

const showWindowsVistaDialog = (pageName = 'winVista') => {


    app.whenReady().then(() => {

        const mainWindow = new BrowserWindow({

            roundedCorners: true, show: false,
            resizable: false, maximizable: false,
            // alwaysOnTop: false, width: 455, height: 245,
            alwaysOnTop: true, width: 455, height: 245,
            frame: false, hasShadow: true, title: 'vistaDialog',
            icon: join(__dirname, `pages/${pageName}/icons/check.ico`),
            webPreferences: {
                sandbox: false, nodeIntegration: true,
                preload: join(__dirname, `pages/${pageName}/preload.js`)
            }
        });

        mainWindow.loadFile(join(__dirname, `pages/${pageName}/index.html`));

        mainWindow.once('ready-to-show', async () => {

            const { width, height } = mainWindow.getBounds();
            const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;

            mainWindow.setBounds({
                width, height,
                x: Math.round((screenWidth - width) / 2),
                y: Math.round((screenHeight - height) / 2)
            });


            if (process.env.IS_DEV_MODE) {
                mainWindow.webContents.openDevTools({ mode: 'undocked' });
            }
            
            await new Promise(resolve => setTimeout(resolve, 700));
            mainWindow.show();

        });

    });

    app.on('window-all-closed', () => {

        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
};

module.exports = { showWindowsVistaDialog };


// const path = require('path');
// const { BrowserWindow, ipcMain, app } = require('electron');


// const showWindowsVistaDialog = () => {

//     return new Promise((resolve, reject) => {

//         const id = `${Date.now()}-${Math.random()}`;


//         const mainWindow = new BrowserWindow({

//             width: 450, height: 650,
//             frame: false, hasShadow: true,
//             resizable: false, maximizable: false,
//             icon: join('assets', 'img', 'icons', 'check.ico'),
//             roundedCorners: true,
//             webPreferences: {
//                 sandbox: false, nodeIntegration: true,
//                 preload: join(__dirname, 'pages', 'winVista', 'preload.js')
//             }
//         });

//         mainWindow.loadFile(join(__dirname, 'pages', 'winVista', 'index.html'));

//         mainWindow.on('ready-to-show', () => {


//         });



//         mainWindow.once('ready-to-show', () => {
//             mainWindow.show();
//         });

//     });
// };

// module.exports = { showWindowsVistaDialog };



// playSoundViaWindows();

// function electronPrompt(options: any, parentWindow: any = null) {

//     return new Promise((resolve, reject) => {
//         //id used to ensure unique listeners per window
//         const id = `${Date.now()}-${Math.random()}`;

//         //custom options override default
//         const options_ = Object.assign(
//             {
//                 width:
//                     options?.type === 'counter'
//                         ? DEFAULT_COUNTER_WIDTH
//                         : options?.type === 'keybind'
//                             ? DEFAULT_KEYBIND_WIDTH
//                             : DEFAULT_WIDTH,
//                 height:
//                     options?.type === 'keybind' && options?.keybindOptions
//                         ? DEFAULT_KEYBIND_HEIGHT(options.keybindOptions)
//                         : DEFAULT_HEIGHT,
//                 resizable: false,
//                 title: 'Prompt',
//                 label:
//                     options?.type === 'multiInput'
//                         ? null
//                         : 'Please input a value:',
//                 buttonLabels: null,
//                 alwaysOnTop: false,
//                 value: null,
//                 type: 'input',
//                 selectOptions: null,
//                 keybindOptions: null,
//                 counterOptions: {
//                     minimum: null,
//                     maximum: null,
//                     multiFire: false,
//                 },
//                 icon: null,
//                 useHtmlLabel: false,
//                 customStylesheet: null,
//                 menuBarVisible: false,
//                 skipTaskbar: true,
//                 frame: true,
//                 customScript: null,
//                 enableRemoteModule: false,
//             },
//             options || {},
//         );

//         if (options_.customStylesheet === 'dark') {
//             options_.customStylesheet = require('node:path').join(
//                 __dirname,
//                 'dark-prompt.css',
//             );
//         }

//         for (const type of ['counter', 'select', 'keybind', 'multiInput']) {
//             if (
//                 options_.type === type &&
//                 (!options_[`${type}Options`] ||
//                     typeof options_[`${type}Options`] !== 'object')
//             ) {
//                 reject(
//                     new Error(
//                         `"${type}Options" must be an object if type = ${type}`,
//                     ),
//                 );
//                 return;
//             }
//         }

//         options_.minWidth =
//             options?.minWidth || options?.width || options_.width;
//         options_.minHeight =
//             options?.minHeight || options?.height || options_.height;

//         let promptWindow = new BrowserWindow({
//             frame: options_.frame,
//             width: options_.width,
//             height: options_.height,
//             minWidth: options_.minWidth,
//             minHeight: options_.minHeight,
//             resizable: options_.resizable,
//             minimizable: !(
//                 options_.skipTaskbar ||
//                 parentWindow ||
//                 options_.alwaysOnTop
//             ),
//             fullscreenable: options_.resizable,
//             maximizable: options_.resizable,
//             parent: parentWindow,
//             skipTaskbar: options_.skipTaskbar,
//             alwaysOnTop: options_.alwaysOnTop,
//             useContentSize: options_.resizable,
//             modal: Boolean(parentWindow),
//             title: options_.title,
//             icon: options_.icon || undefined,
//             webPreferences: {
//                 nodeIntegration: true,
//                 contextIsolation: false,
//                 enableRemoteModule: options_.enableRemoteModule,
//             },
//             show: false,
//         });

//         if (options_.enableRemoteModule) {
//             require('@electron/remote/main').enable(promptWindow.webContents);
//         }

//         promptWindow.setMenu(null);
//         promptWindow.setMenuBarVisibility(options_.menuBarVisible);

//         //called on exit
//         const cleanup = () => {
//             ipcMain.removeListener(
//                 `prompt-get-options:${id}`,
//                 getOptionsListener,
//             );
//             ipcMain.removeListener(`prompt-post-data:${id}`, postDataListener);
//             ipcMain.removeListener(`prompt-error:${id}`, errorListener);
//             parentWindow?.focus();
//         };

//         const cleanAndDestroy = () => {
//             cleanup();
//             if (promptWindow) {
//                 promptWindow.destroy();
//                 promptWindow = null;
//             }
//         };

//         ///transfer options to front
//         const getOptionsListener = (event) => {
//             if (options_.button)
//                 options_.button.click = `(${new String(
//                     options_.button.click,
//                 )})()`;

//             event.returnValue = JSON.stringify(options_);
//         };

//         //get input from front
//         const postDataListener = (event, value) => {
//             if (options_.type === 'keybind' && value) {
//                 for (let i = 0; i < value.length; i++) {
//                     value[i] = JSON.parse(value[i]);
//                 }
//             }
//             resolve(value);
//             event.returnValue = null;
//             cleanAndDestroy();
//         };

//         const unresponsiveListener = () => {
//             reject(new Error('Window was unresponsive'));
//             cleanAndDestroy();
//         };

//         //get error from front
//         const errorListener = (event, message) => {
//             reject(new Error(message));
//             event.returnValue = null;
//             cleanAndDestroy();
//         };

//         //attach listeners
//         ipcMain.once(`prompt-get-options:${id}`, getOptionsListener);
//         ipcMain.once(`prompt-post-data:${id}`, postDataListener);
//         ipcMain.once(`prompt-error:${id}`, errorListener);
//         promptWindow.once('unresponsive', unresponsiveListener);

//         promptWindow.once('close', () => {
//             resolve(null);
//             cleanup();
//         });

//         //should never happen
//         promptWindow.webContents.once(
//             'did-fail-load',
//             (_event, errorCode, errorDescription, validatedURL) => {
//                 const log = {
//                     error: 'did-fail-load',
//                     errorCode,
//                     errorDescription,
//                     validatedURL,
//                 };
//                 reject(
//                     new Error(
//                         `prompt.html did-fail-load, log:\n${log.toString()}`,
//                     ),
//                 );
//             },
//         );

//         const promptUrl = url.format({
//             protocol: 'file',
//             slashes: true,
//             pathname: path.join(__dirname, 'page', 'prompt.html'),
//             hash: id,
//         });

//         //Finally, load prompt
//         promptWindow.loadURL(promptUrl);

//         // show window only when ready
//         promptWindow.once('ready-to-show', () => {
//             promptWindow.show();
//         });
//     });
// }