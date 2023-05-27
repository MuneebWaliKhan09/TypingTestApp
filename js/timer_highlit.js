const btntim = document.querySelector('#btntimer');
const inpu = document.getElementById("input");


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0 + alert("Time ends up !") + setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }, 1000);
}


btntim.onclick = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    inpu.style.display = "block";


}





//  auto write text

var i = 0;
var txt = 'This is a dummy text and it is auto writable so you can write it easily and enjoy  the typing master taste';
var speed = 50;

let myfunc = () => {
    if (i < txt.length) {
        document.getElementById("paragraph").innerHTML += txt.charAt(i);
        i++;
        setTimeout(myfunc, speed);

    }

}










// highlight text on typing 

function highlight() {
    var text = document.getElementById("paragraph").innerText;
    var inputText = document.getElementById("input").value;
    var index = text.indexOf(inputText);
    let x = 1;




    if (index >= 0) {
        document.getElementById("paragraph").innerHTML = text.substring(0, index) + "<span class='highlight'>" + inputText + "</span>" + text.substring(index + inputText.length);
    }
    else { document.getElementById("paragraph").innerHTML = text; }

    if (inputText.length == text.length) {
        alert("Completed congrats..🥳🥳");
        location.reload();
    }
}

