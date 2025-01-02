

const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {

    const closeBtn = document.querySelector('.closeBtn');

    closeBtn.addEventListener('click', async () => {

        await ipcRenderer.invoke(`dialogWindowvista`, { action: 'close', title: 'vista' });
        console.log('closeBtn clicked !');
    });

});

