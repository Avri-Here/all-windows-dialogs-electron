

const soundElement = document.querySelector('.playAudio');

soundElement.src = null;
soundElement.src = './sounds/notify.wav';
soundElement.play().catch(console.error);

setTimeout(() => {

    document.body.style.display = 'block';
    
}, 950);















// for %f in (*.wav) do ffmpeg -i "%f" -filter:a "volume=3.0" "boosted\%f"
