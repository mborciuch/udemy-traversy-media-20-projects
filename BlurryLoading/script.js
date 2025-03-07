const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(
        load, 0, 100, 30, 0
    )}px)`
}

function scale(num, inputMin, inputMax, outputMin, outputMax) {
    return (num - inputMin) * (outputMax - outputMin) / (inputMax - inputMin) + outputMin;
}