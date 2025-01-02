




const { ipcMain } = require('electron');
const { BrowserWindow, screen } = require('electron');


const handleAndServeApp = (mainWindow = new BrowserWindow()) => {

    ipcMain.handle('dialogWindow', (_, action) => {

        const dialogWindow = BrowserWindow.getAllWindows().find(win => win.getTitle() === 'winVista');

        if (action === 'close') {
            dialogWindow.close();
        }


    });



};


module.exports = handleAndServeApp;








