

const soundElement = document.getElementById('notificationSound');
soundElement.src = './sounds/notify.wav';
soundElement.volume = 1.0;
soundElement.play().catch(console.error);


// for %f in (*.wav) do ffmpeg -i "%f" -filter:a "volume=3.0" "boosted\%f"
