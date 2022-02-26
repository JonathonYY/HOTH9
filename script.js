var clicks = 0;
function myFunction(){
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
}

function playAudio() {
    const audio = document.getElementById("audio");
    audio.play();
    if (audio.loop == false)
        audio.loop = true;
    else {
        audio.loop = false;
        audio.pause();
        audio.currentTime = 0;
    }
}