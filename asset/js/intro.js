const loadSence = document.getElementById("full-loading")
const bufferLoadHome = document.getElementById("box-buffer")
const menuHome = document.getElementById("home-sence")
const startHome = document.getElementById("startHome")
const bgGame = document.getElementById("bgGame")

const progLoadHome = bufferLoadHome.querySelector("progress")
const imgLoadHome = bufferLoadHome.querySelector("img")
var introMusic = new Audio("/asset/audio/intro/On_the_Hot_Seat.mp3")

console.log(bufferLoadHome)
var firstClickIntro = true

startHome.onclick = () => {
    introMusic.pause()
    bgGame.style.display = "block"
    introMusic = new Audio("/asset/audio/intro/letsplay.ogg")
    introMusic.play()
    introMusic.volume = 0.5
    menuHome.style.animation = "zoomLoad .8s ease-in forwards"
    loadSence.style.opacity = 0
    setTimeout(() => {
        loadSence.style.display = "none";
        introGame()
    }, 3000)
}

loadSence.onclick = () => {
    if (firstClickIntro == true) {
        firstClickIntro = false;
        introMusic.play()
            .then(() => {
                var p = 0
                var iLoad = setInterval(() => {
                    progLoadHome.value = p++;
                    if (p > 100) {
                        clearInterval(iLoad);
                        progLoadHome.style.opacity = 0
                        imgLoadHome.style.animation = "zoomLoad .8s 4s ease-in forwards"
                        setTimeout(() => { bufferLoadHome.style.display = "none" }, 8000)
                        setTimeout(() => {
                            menuHome.style.display = "flex";
                            setTimeout(() => {
                                menuHome.style.opacity = 1;

                            }, 100)
                        }, 10000)
                    }

                }, 50)
            })
    }

}