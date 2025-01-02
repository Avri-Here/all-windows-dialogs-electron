



// ipcRenderer.on('update-progress', (event, message) => {

//     const statusLive = document.getElementById('statusLive');

//     if (statusLive) {
//         statusLive.innerHTML = message;
//     };

//     console.log({ updateProgress: message });
// });


// const simulateTyping = (inputElement, text, delay = 200) => {

//     let index = 0;
//     inputElement.value = "";

//     const interval = setInterval(() => {

//         if (index < text.length) {
//             inputElement.value += text[index];
//             index++;
//         } else {
//             clearInterval(interval);
//         }
//     }, delay);
// };


// const inProgressTask = () => {

//     const progressBar = document.getElementById("progressBar");
//     progressBar.value = 0;

//     let value = 0;

//     intervalId = setInterval(() => {

//         value = (value + 1) % 101;
//         progressBar.value = value;

//     }, 100);
// };

// const stopProgressTask = () => {

//     const progressBar = document.getElementById("progressBar");
//     progressBar.value = 0;

//     if (intervalId) {
//         clearInterval(intervalId);
//         intervalId = null;
//     }
// };





// const logIn = document.getElementById('logIn');
// const userCode = document.getElementById('userCode');
// const userPass = document.getElementById('userPass');
// const submitBtn = document.querySelector('.login-btn');
// const progressBar = document.getElementById('progressBar');
// const progressForEver = document.getElementById('progressForEver');
// const statusLiveMoreInfo = document.getElementById('statusLiveMoreInfo');






// await new Promise(res => setTimeout(res, 500));

// logIn.style.visibility = "hidden";


// await new Promise(res => setTimeout(res, 1200));


// await new Promise(res => setTimeout(res, 1200));

// await playSoundViaWindows('20startupSound');

// await new Promise(res => setTimeout(res, 1500));

// statusLive.innerHTML = 'Starting ...';


// await new Promise(res => setTimeout(res, 2500));

// progressForEver.style.display = "block";




// await fullFlowEduGov(userCode, userPass);
// progressForEver.style.display = "none";






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






