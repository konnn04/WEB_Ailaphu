let flag = {
    intro : true
}

function playAudio(audio,vol) {
    audio.volume = vol ? vol : .3;
    audio.play()
}

function playGamePhase1(json) {
    
}

window.onload = ()=>{
    let asset = {
        "intro" : new Audio("./asset/audio/Intro_2021.mp3"),
    }
    //Skip intro
    document.querySelector("#opening .skip").onclick = ()=>{
        document.querySelector("#opening").innerHTML = ""
        playAudio(asset['intro'])
    }
}