



const { showWindowsVistaDialog } = require('../app.js');


(async () => {

    console.log('localRun.js');

    try {

        await showWindowsVistaDialog();
        console.log('showWindowsVistaDialog called with no arguments');

        
        await showWindowsVistaDialog('flow');
        console.log('showWindowsVistaDialog called with "flow" argument');


    } catch (e) {

        console.error(e);
    }
})();