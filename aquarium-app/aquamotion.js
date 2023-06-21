let startFish = 5
let random = (min, max) => Math.random() * (max - min) + min
let randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)
let box = document.querySelector("body")
// Preference for Inteval, Values Define
const initIntervalPrefNumConValue1 = randomInt(1,5) * 500;  //setInterval(..., const value1) just like this..
const initIntervalPrefNumConValue2 = randomInt(1,5) * 400;
const initIntervalPrefNumConValue3 = randomInt(1,5) * 600;
const initIntervalPrefNumConValue4 = randomInt(1,5) * 700;

function fish(e) {

    e ? 1 : 0;

    let fish = document.createElement("div")

    fish.className = "fish"
    fish.style.setProperty("--size", random(5,7))
    fish.style.setProperty("--color", random(-65, 25))
    fish.style.setProperty("--duration", random(5,7))
    fish.style.setProperty(
        "--top", random(100, window.innerHeight)
    );
    fish.innerHTML = [
        '<span class="body"></span>',
        '<span class="eye"></span>',
        '<span class="fin"></span>',
        '<span class="tail"></span>',

    ].join("");
    box.appendChild(fish);
}



function createRipple(e) {
    let ripple = document.createElement("div");

    ripple.className = "ripple";
    ripple.style.setProperty("--left", e.clientX);
    ripple.style.setProperty("--top", e.clientY);

    box.append(ripple);
}

function setInfiniteAnimationClocks() {
    setInterval(fish, initIntervalPrefNumConValue1);
    setInterval(fish, initIntervalPrefNumConValue2);
    setInterval(fish, initIntervalPrefNumConValue3);
    setInterval(fish, initIntervalPrefNumConValue4);
}

function init() {
    window.addEventListener("click", fish);
    window.addEventListener("click", createRipple);

    Array(startFish).fill("").forEach(fish);
    setInfiniteAnimationClocks();

    let d = new Date();
    setTimeout(function() { location.reload() }, 1000 * (60 - d.getSeconds()));
}


window.onload = init;