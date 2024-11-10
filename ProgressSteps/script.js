const progressBar = document.getElementById("progress-bar");
const circles = document.querySelectorAll(".circle");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let currentActiveStep = 1;

previous.addEventListener("click", function () {
    currentActiveStep--;

    if (currentActiveStep < 1) {
        currentActiveStep = 1;
    }
    update();
})

next.addEventListener("click", function () {
    currentActiveStep++;

    if (currentActiveStep > 4) {
        currentActiveStep = 4;
    }

    update();
})

function update() {

    circles.forEach((circle, i) => {
        if (i < currentActiveStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active")
        }
    })
    const circlesActive = document.querySelectorAll(".circle.active");
    progressBar.style.width = `${((circlesActive.length - 1) / (circles.length - 1)) * 100}%`;

    if (currentActiveStep === 1) {
        previous.disabled = true;
    } else if (currentActiveStep === circles.length) {
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    }
}