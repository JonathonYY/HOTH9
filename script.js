var clicks = 0;
function myFunction(){
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
}

function playAudio() {
    let audio = document.getElementById("audio");
    audio.play();
}