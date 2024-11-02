let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
        panel.addEventListener('click', e => {
            e.stopPropagation();
            removeActiveClasses()
            panel.classList.add('active');
        }, true);
        panel.querySelector('h3').addEventListener('click', () => {
            console.log('h3 clicked')
        })
    }
)


function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'));
}
