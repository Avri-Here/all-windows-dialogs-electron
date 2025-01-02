

const soundElement = document.querySelector('.playAudio');

soundElement.src = './sounds/notify.wav';

soundElement.play().catch(console.error);
document.body.style.display = 'block';















// for %f in (*.wav) do ffmpeg -i "%f" -filter:a "volume=3.0" "boosted\%f"
