




const { ipcMain } = require('electron');
const { BrowserWindow } = require('electron');


const handleAndServeApp = (winTitle = 'vista') => {

    ipcMain.handle(`dialogWindow${winTitle}`, (_, { action, title }) => {

        const dialogWindow = BrowserWindow.getAllWindows().find(win => win.getTitle() === title);

        if (action === 'close') {

            dialogWindow.close();
        };


    });



};


module.exports = handleAndServeApp;








