let buttons = document.querySelectorAll('.myButton');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // Remove 'active' class from all buttons
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('selected');
        }
        // Add 'active' class to the clicked button
        this.classList.add('selected');
    });
}

let portfolioDiv = document.getElementById('portfolio-card');
let cvDiv = document.getElementById('cv-card');

buttons[0].addEventListener('click', function () {
    portfolioDiv.style.display = 'block';
    cvDiv.style.display = 'none';
});

buttons[1].addEventListener('click', function () {
    portfolioDiv.style.display = 'none';
    cvDiv.style.display = 'block';
});
