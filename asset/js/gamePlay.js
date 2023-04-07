const fullGame = document.getElementById("")
const helpBoxIngame = document.getElementById("helpBoxIngame")
var helpItemIngame = helpBoxIngame.getElementsByClassName("helpItem")
var answer = document.getElementsByClassName("answer")
const bgGameIngame = document.getElementById("bgGame")
const gameplaySence = document.getElementById("game-sence")
const lockQ = document.getElementById("lockQ")
const timeRemain = document.getElementById("timeQ")
const numQ = document.getElementById("numQ")
const imgPlayer = document.getElementById("player").querySelector("img")
var musicGameplay = new Audio("/Ailaphu/asset/audio/ingame/1-5.ogg")
const correct15 = new Audio("/Ailaphu/asset/audio/ingame/1-5Correct.ogg")
const wrong15 = new Audio("/Ailaphu/asset/audio/ingame/1-5Wrong.ogg")
const pathImgPlayer = ["/Ailaphu/asset/img/player/playerCorrect.png", "/Ailaphu/asset/img/player/playerThink.png", "/Ailaphu/asset/img/player/playerWrong.png"]
musicGameplay.volume = 0.2
gameplaySence.style.display = 'block';
//BIẾN DATA NGƯỜI CHƠI
var Level = 1
    //CODE
var timeSecord = 30
gameplaySence.style.display = 'none';

var intervalClock
var clock = () => {
    timeSecord = 30
    intervalClock = setInterval(() => {
        timeRemain.innerText = timeSecord--
            if (timeSecord < 0) {
                clearInterval(intervalClock)
                console.log("TimeOut")
                answer[correct].classList.add("answerCorrect")
                lockQ.style.display = "block"
                wrong15.play()
                musicGameplay.pause()
                hideAns(correct)
                imgPlayer.src = pathImgPlayer[2]
            }
    }, 1000)

}

const hideAns = function(x, y) {
    if (x == null && y == null) {
        for (let i = 0; i < 4; i++) {
            answer[i].style.opacity = 1
        }
    }
    if (x != null && y == null) {
        for (let i = 0; i < 4; i++) {
            if (i != x) {
                answer[i].style.opacity = 0
            }
        }
    }
    if (x != null && y != null) {
        for (let i = 0; i < 4; i++) {
            if (i != x && i != y) {
                answer[i].style.opacity = 0
            }
        }
    }
}

//End15
var end15 = () => {
    introSence.style.display = "block"
    itemScore[0].classList.remove("lightItem")
    itemScore[Level - 2].classList.add("lightItem")
    musicGameplay.pause()
    gameplaySence.style.display = 'none';
    musicGameplay = new Audio("/Ailaphu/asset/audio/ingame/end15.ogg")
    musicGameplay.play()
    bgGameIngame.style.backgroundImage = `url("/Ailaphu/asset/img/bg.webp")`

}

const playGameplay15 = () => {
    introSence.style.display = "none"
    introMusic.pause()
    gameplaySence.style.display = 'block';
    numQ.innerText = "Câu " + Level
    console.log(Level)
    clock()
    createQ()
    musicGameplay.play()
    bgGameIngame.style.backgroundImage = `url("/Ailaphu/asset/img/bg-gameplay.png")`
    for (let i = 0; i < helpItemIngame.length; i++) {
        helpItemIngame[i].onclick = () => {

        }
    }
    for (let i = 0; i < answer.length; i++) {
        answer[i].onclick = () => {
            clearInterval(intervalClock)
            lockQ.style.display = "block"
            checkAns(i)
            answer[i].classList.add("answerSelect")
        }
    }
}


const checkAns = (i) => {
    setTimeout(() => {
        answer[i].classList.remove("answerSelect")
        if (i == correct) {
            imgPlayer.src = pathImgPlayer[0]

            hideAns(correct)
            Level++;
            correct15.play()
            answer[i].classList.add("answerCorrect")
            setTimeout(() => {
                answer[i].classList.remove("answerCorrect")
                console.log("ok")
                if (Level <= 5) {
                    playGameplay15()
                } else {
                    end15()
                }
                lockQ.style.display = "none"
                hideAns()
                imgPlayer.src = pathImgPlayer[1]

            }, 2000)
        } else {
            hideAns(correct, i)
            wrong15.play()
            imgPlayer.src = pathImgPlayer[2]
            musicGameplay.pause()
            answer[i].classList.add("answerWrong")
            answer[correct].classList.add("answerCorrect")
            setTimeout(() => {
                answer[i].classList.remove("answerWrong")
                answer[correct].classList.remove("answerCorrect")
                hideAns()
            }, 8000)
        }
    }, 1000)

}
