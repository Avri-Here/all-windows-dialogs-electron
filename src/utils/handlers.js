




const { ipcMain } = require('electron');
const { BrowserWindow } = require('electron');


const handleAndServeApp = (winTitle) => {

    const withApperCase = winTitle.charAt(0).toUpperCase() + winTitle.slice(1);
    
    ipcMain.handle(`dialogWindow${withApperCase}`, (_, { action, title }) => {

        const dialogWindow = BrowserWindow.getAllWindows().find(win => win.getTitle() === title);

        if (action === 'close') {

            dialogWindow.close();
        };


    });



};


module.exports = handleAndServeApp;








