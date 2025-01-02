



document.addEventListener('DOMContentLoaded', () => {

    const userCode = document.getElementById('userCode');

    const { join } = require('path'), { spawn } = require('child_process');




    const playSoundViaWindows = (soundName = '20startupSound') => {

        const filePath = join('wav', `${soundName}.wav`);

        const command = `(New-Object Media.SoundPlayer '${filePath}').PlaySync()`;
        const args = ['-NoProfile', '-Command', command];

        console.log(`Sound file path : ${filePath}`);

        return new Promise((resolve, reject) => {

            const child = spawn('powershell.exe', args, { stdio: 'ignore' });

            child.on('error', (err) => {

                console.error(`Error starting PowerShell : ${err}`);
                reject(err);
            });

            child.on('close', (code) => {

                if (code) {
                    console.error(`PowerShell exited with code ${code}`);
                    reject(new Error(`PowerShell exited with code ${code}`));
                    return;

                }

                resolve('Sound played successfully !');
                return;
            });
        });
    };

});
module.exports = { playSoundViaWindows };