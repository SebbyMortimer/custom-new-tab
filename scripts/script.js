function ToggleBGMusic() {
    const music = document.getElementById("backgroundMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function ToggleCharlesThumbs(toggle) {
    const charles = document.getElementById("charles");

    if (toggle) {
        charles.src = "images/charles/charles-thumbs.gif";

        const tingSound = new Audio("audio/charles-over.mp3");
        tingSound.volume = 0.3;
        tingSound.play();
    } else {
        charles.src = "images/charles/charles-idle.png";
    }
}

/* let lastRipple = 0
const rippleWait = 100 // how long to wait between ripples in milliseconds

function CreateRipple(event) {
    if (!(Date.now() - rippleWait > lastRipple)) {
        return;
    }

    lastRipple = Date.now()

    const ripple = document.createElement("img");
    ripple.className = "ripple";
    ripple.src = "images/ripple.png";
    ripple.alt = "Graphic of a ripple";
    ripple.style.position = "absolute";
    ripple.style.left = event.clientX - 50 + "px";
    ripple.style.top = event.clientY - 50 + "px";
    ripple.style.zIndex = "-1";
    ripple.style.pointerEvents = "none";
    document.body.appendChild(ripple);

    ripple.addEventListener("animationend",function() { // Remove ripple after animation ends
        ripple.remove();
    });
}

document.body.addEventListener("mousemove", CreateRipple); */

function CreateRipple(event) {
    const plopSound = new Audio("audio/water-plop.mp3");
    plopSound.play();

    const ripple = document.createElement("img");
    ripple.className = "ripple";
    ripple.src = "images/ripple.png";
    ripple.alt = "Graphic of a ripple";
    ripple.style.position = "absolute";
    ripple.style.left = event.clientX - 50 + "px";
    ripple.style.top = event.clientY - 50 + "px";
    ripple.style.zIndex = "-2";
    ripple.style.pointerEvents = "none";
    document.body.appendChild(ripple);

    ripple.addEventListener("animationend",function() { // Remove ripple after animation ends
        ripple.remove();
    });
}

document.body.addEventListener("mousedown", CreateRipple);