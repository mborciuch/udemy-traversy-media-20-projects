const labels = document.querySelectorAll(".form-control label")

labels.forEach(label => {
    label.innerHTML = label.innerText.split("")
        .map((character, index) => `<span style="transition-delay: ${index * 50}ms" ">${character}</span>`)
        .join("")
})