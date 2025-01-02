




const { ipcMain } = require('electron');
const { BrowserWindow } = require('electron');


// const handleAndServeApp = (mainWindow = new BrowserWindow()) => {

const handleAndServeApp = () => {

    ipcMain.handle('dialogWindow', (_, { action, title }) => {

        console.log( { action, title });

        const dialogWindow = BrowserWindow.getAllWindows().find(win => win.getTitle() === title);

        if (action === 'close') {

            dialogWindow.close();
        };


    });



};


module.exports = handleAndServeApp;








