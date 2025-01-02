


document.addEventListener('DOMContentLoaded', () => {
    
    const { ipcRenderer } = require('electron');
    const closeBtn = document.querySelector('.closeBtn');

    closeBtn.addEventListener('click', async () => {

        await ipcRenderer.invoke(`dialogWindowVista`, { action: 'close', title: 'winVista' });
        console.log('closeBtn clicked !');
    });

});

