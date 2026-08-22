function CreateWave() {
    const randX = Math.random() * (window.innerWidth - 400); // 400 is the width of the wave image
    const randY = Math.random() * (window.innerHeight - 150); // 150 is the height of the wave image

    const wave = document.createElement("img"); // Create wave element
    wave.className = "wave";
    wave.src = "images/wave.png";
    wave.alt = "Graphic of a wave";
    wave.style.width = "200px";
    wave.style.height = "75px";
    wave.style.position = "absolute";
    wave.style.left = randX + "px";
    wave.style.top = randY + "px";
    wave.style.zIndex = "-2";
    document.body.appendChild(wave);

    wave.addEventListener("animationend",function() { // Remove wave after animation ends
        wave.remove();
    });
}

function InitiateWaves() {
    if (document.hidden) { // Don't create waves if the page isn't visible as setInterval() pauses and catches up again
        return;            //  when the page becomes visible, leading to too many waves
    }
    for (let i = 0; i < 4; i++) { // Create 4 waves
        CreateWave();
    }
}

InitiateWaves(); // Call InitiateWaves() initially so that it runs immediately
setInterval(InitiateWaves, 3000); // Call InitiateWaves() every 3 seconds