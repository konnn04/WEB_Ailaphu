const itemScore = document.getElementsByClassName("itemScore")
const itemHelp = document.getElementsByClassName("helpItem")
const introSence = document.getElementById("introGamePlay")

const linkVocal = ["/Ailaphu/asset/audio/intro/vocal_odayseco.mp3", "/Ailaphu/asset/audio/intro/tucauso10.mp3", "/Ailaphu/asset/audio/intro/trogiup1.mp3", "/Ailaphu/asset/audio/intro/trogiup4.mp3"]
bgGame.style.display = "block"


introVocal = new Audio(linkVocal[0])


var introGame = function() {

    setTimeout(() => {
        introVocal.play()
    }, 4000)

    setTimeout(() => {
        var i = 0
        var k
        var ok = false
        var lightIntro = setInterval(() => {

            k = Math.abs(i)
            if (i == 0) {
                itemScore[k].classList.toggle("lightItem")
            } else {
                itemScore[k - 1].classList.toggle("lightItem")
                itemScore[k].classList.toggle("lightItem")
            }
            i++
            if (i >= 15) {
                i = -14;
                ok = true
            }
            if (ok == true && i == 0) {
                clearInterval(lightIntro)
            }
        }, 200)
    }, 7000)
    setTimeout(() => {
        introVocal = new Audio(linkVocal[1])
        introVocal.play()
    }, 15000)


    setTimeout(() => {
        setTimeout(() => {
            var i = 0
            helpSfx1 = new Audio("/Ailaphu/asset/audio/intro/50-50.mp3")
            helpSfx2 = new Audio("/Ailaphu/asset/audio/intro/PAF.mp3")
            helpSfx3 = new Audio("/Ailaphu/asset/audio/intro/ATA.mp3")
            helpSfx4 = new Audio("/Ailaphu/asset/audio/intro/ATA.mp3")
            var h1 = false;
            var h2 = false;
            var h3 = false;
            var h4 = false;
            var lightHelp = setInterval(() => {
                i++
                if (i > 4 && i < 27) {
                    itemHelp[0].classList.add("lightHelpItem")
                    if (h1 == false) {
                        helpSfx1.play()
                        h1 = true
                    }
                } else {
                    itemHelp[0].classList.remove("lightHelpItem")
                }
                if (i > 29 && i < 43) {
                    itemHelp[1].classList.add("lightHelpItem")
                    if (h2 == false) {
                        helpSfx2.play()
                        h2 = true
                    }
                } else {
                    itemHelp[1].classList.remove("lightHelpItem")
                }
                if (i > 45 && i < 69) {
                    itemHelp[2].classList.add("lightHelpItem")
                    if (h3 == false) {
                        helpSfx3.play()
                        h3 = true
                    }
                } else {
                    itemHelp[2].classList.remove("lightHelpItem")
                }
                if (i == 75) {
                    introVocal = new Audio(linkVocal[3])
                    introVocal.play()
                }
                if (i > 98 && i < 120) {
                    itemHelp[3].classList.add("lightHelpItem")
                    if (h4 == false) {
                        helpSfx4.play()
                        h4 = true
                    }
                } else {
                    itemHelp[3].classList.remove("lightHelpItem")
                }
                if (i > 150) {
                    clearInterval(lightHelp);
                    playGameplay15();
                    console.log("lkkk")
                }
            }, 100)


        }, 3000)

        introVocal = new Audio(linkVocal[2])
        introVocal.play()
    }, 21000)
}
