function PlayPiplupAnimation() {
    const piplup = document.getElementById("piplup");
    const newPiplup = piplup.cloneNode();
    piplup.parentNode.replaceChild(newPiplup, piplup);
}

setInterval(PlayPiplupAnimation, 20000);