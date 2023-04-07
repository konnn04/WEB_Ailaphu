const Q = document.getElementById("ques").getElementsByTagName("p")
const A = document.getElementsByClassName("answer")


var textQ = ""
var textA = ""
var correct = 0
var ranTemp = []
var ezAsked = []
const abc = ["A. ", "B. ", "C. ", "D. "]

const createQ = async() => {
    await fetch("/asset/data.json").then(res => res.json()).then(data => {
        if (Level <= 5) {
            ranTemp = []
            creEz(data["ez"])
        }
    })
}
const creEz = (data) => {
    var okQ = false;
    var ranQ = 0
    var okk

    while (okQ == false) {
        ranQ = Math.floor(Math.random() * data.length)
        okk = true;
        if (ezAsked.length > 0) {
            for (let ii = 0; ii < ezAsked.length; ii++) {
                if (ranQ == ezAsked[ii]) {
                    okk = false;

                    if (ezAsked.length == data.length) {
                        okQ = true
                        console.log("Same")
                    }
                    break;
                }
            }
        }
        if ((okk == true)) {
            if (ezAsked.length != data.length) {
                ezAsked.push(ranQ)
            }
            okQ = true;
            console.log(ezAsked)

            break;

        }
    }

    textQ = data[ranQ]["Q"];
    Q[0].innerText = textQ;
    var i = 0
    for (i = 0; i < 4; i++) {
        var ran = Math.floor(Math.random() * 4)
        var kt = true;
        if (ranTemp.length > 0) {
            for (let j = 0; j < ranTemp.length; j++) {
                if (ran == ranTemp[j]) {
                    kt = false;
                    i--;
                    break;
                }
            }
        }
        if (kt == true) {
            if (i == 0) {
                correct = ran;
            }
            ranTemp.push(ran)
            A[ran].innerHTML = `<p>${abc[ran]}${data[ranQ]["A"][i]}</p>`;
        }
    }
}