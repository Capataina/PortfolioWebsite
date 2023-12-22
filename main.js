const buttons = document.querySelectorAll('.myButton');
const mainContent = document.getElementById('main-content'); // Get the main content element
const portfolioDiv = document.getElementById('portfolio-card');
const cvDiv = document.getElementById('cv-card');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // Remove 'selected' class from all buttons
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('selected');
        }
        // Add 'selected' class to the clicked button
        this.classList.add('selected');

        // Adjust the size based on the button's id
        if (this.id === 'cv-button') {
            // First change the height
            mainContent.style.height = "800px"; // Double the original height
            // Then set a timeout to change the width after the height transition is complete
            setTimeout(function () {
                mainContent.style.width = "1000px"; // Double the original width
            }, 200); // 500ms corresponds to the transition duration
        } else {
            // For the portfolio button, reverse the order: first reset the width, then the height
            mainContent.style.width = "640px"; // Original width
            setTimeout(function () {
                mainContent.style.height = "400px"; // Original height
            }, 200); // Adjust this duration if needed
        }
    });
}

buttons[0].addEventListener('click', function () {
    portfolioDiv.style.display = 'block';
    cvDiv.style.display = 'none';
});

buttons[1].addEventListener('click', function () {
    portfolioDiv.style.display = 'none';
    cvDiv.style.display = 'block';
});
