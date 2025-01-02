





(async () => {
    
    
    
    try {
        
        const { showWindowsVistaDialog } = require('../app.js');
        
        // const isExitByX = await showWindowsVistaDialog();
        // console.log('showWindowsVistaDialog called with no arguments');

        
        await showWindowsVistaDialog('flow');
        console.log('showWindowsVistaDialog called with "flow" argument');


    } catch (e) {

        console.error(e);
    }
})();