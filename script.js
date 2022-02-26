var clicks = 0;
function myFunction(){
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
}

function playAudio() {
    const audio = document.getElementById("audio");
    audio.play();
    c = document.getElementById("container");
    b = document.getElementById("button");
    if (audio.loop == false){
        audio.loop = true;
        c.style.animationDuration = "6s";
        b.style.animationDuration = "6s";
    }
    else {
        audio.loop = false;
        audio.pause();
        audio.currentTime = 0;
        c.style.animationDuration = "0s";
        b.style.animationDuration = "0s";
    }
}