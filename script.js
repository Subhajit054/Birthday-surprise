window.onload = function () {
    const name = prompt("Enter the name of the birthday person:");
    if (name) {
        document.getElementById("birthday-message").textContent = `Happy Birthday, ${name}!`;
    }

    // Generate floating confetti
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('span');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiContainer.appendChild(confetti);
    }
};
