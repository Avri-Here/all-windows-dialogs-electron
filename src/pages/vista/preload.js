

const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', async () => {

        await ipcRenderer.invoke('dialogWindow', { action: 'close', title: 'winVista' });
        console.log('closeBtn clicked !');
    });

});

