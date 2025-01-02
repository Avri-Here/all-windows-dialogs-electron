







const soundName = required('playSoundViaWindows');
const soundElement = document.querySelector('.playAudio');

soundElement.src = './wav/speech.wav';

soundElement.play()
    .then(() => { document.body.style.display = 'block'; })
    .catch(console.error);


UIkit.util.ready(function () {

    var bar = document.getElementById('js-progressbar');

    var animate = setInterval(function () {

        bar.value += 10;

        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 1000);

});










const inProgressTask = () => {

    progressBar.style.display = 'block';
    progressBar.value = 0;

    let value = 0;

    intervalId = setInterval(() => {

        value = (value + 1) % 101;
        progressBar.value = value;

    }, 100);
};

const stopProgressTask = () => {

    playSoundViaWindows('20startupSound');

    const progressBar = document.getElementById("progressBar");
    progressBar.value = 0;

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};


inProgressTask();

setTimeout(() => { stopProgressTask() }, 35000);



const bestFtEver = async () => {

    progressBar.value = 0;

    await new Promise(res => setTimeout(res, 1000));

    statusLive.style.color = "green";
    statusLive.innerHTML = 'in progress ...';
    progressBar.value = 35;

    await new Promise(res => setTimeout(res, 1500));
    progressBar.value = 65;

    await new Promise(res => setTimeout(res, 800));
    progressBar.value = 90;

    await new Promise(res => setTimeout(res, 1000));

    simulateTyping(userCode, 'process__env__userCodeGov', 110);
    await new Promise(res => setTimeout(res, 1200));

    simulateTyping(userCode, 'process__env__userPassGov', 110);
    await new Promise(res => setTimeout(res, 1500));

    progressBar.value = 100;

    statusLive.style.color = "#0cf514";
    statusLive.innerHTML = 'completed successfully - ' + '👍';
    await new Promise(res => setTimeout(res, 1500));

    statusLive.innerHTML = 'Starting connection ...';
    await new Promise(res => setTimeout(res, 1500));


    setTimeout(() => { playSoundViaWindows('musicOnHold') }, 60000);
}

if (67) bestFtEver();


const simulateTyping = (inputElement, text, delay = 200) => {

    let index = 0;
    inputElement.value = "";

    const interval = setInterval(() => {

        if (index < text.length) {
            inputElement.value += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
};






















// fullFlowEduGov();



// const logIn = document.getElementById('logIn');
// const userPass = document.getElementById('userPass');
// const submitBtn = document.querySelector('.login-btn');
// const statusLiveText = document.getElementById('statusLiveText');




// ipcRenderer.on('update-progress', (event, message) => {

//     const statusLive = document.getElementById('statusLive');

//     if (statusLive) {
//         statusLive.innerHTML = message;
//     };

//     console.log({ updateProgress: message });
// });


// await new Promise(res => setTimeout(res, 500));

// logIn.style.visibility = "hidden";


// await new Promise(res => setTimeout(res, 1200));


// await new Promise(res => setTimeout(res, 1200));

// await playSoundViaWindows('20startupSound');

// await new Promise(res => setTimeout(res, 1500));

// statusLive.innerHTML = 'Starting ...';


// await new Promise(res => setTimeout(res, 2500));
