

const soundElement = document.querySelector('.playAudio');

soundElement.src = './sounds/notify.wav';

soundElement.play()
    .then(() => { document.body.style.display = 'block'; })
    .catch(console.error);














    
// for %f in (*.wav) do ffmpeg -i "%f" -filter:a "volume=3.0" "boosted\%f"
