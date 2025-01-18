const giftBox = document.getElementById("gift-box");
const balloonsContainer = document.getElementById("balloons-container");
const finalMessage = document.getElementById("final-message");

giftBox.addEventListener("click", () => {
    giftBox.classList.add("hidden"); // Hide gift box
    releaseBalloons(); // Show balloons
    setTimeout(() => {
        finalMessage.classList.remove("hidden"); // Show birthday wishes
    }, 5000); // After balloons animation
});

function releaseBalloons() {
    balloonsContainer.classList.remove("hidden");
    for (let i = 0; i < 100; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.background = getRandomColor();
        balloon.style.animationDuration = `${Math.random() * 2 + 4}s`;
        balloonsContainer.appendChild(balloon);

        balloon.addEventListener("animationend", () => {
            balloon.remove();
        });
    }
}

function getRandomColor() {
    const colors = ["#ff69b4", "#ff1493", "#ffa500", "#32cd32", "#87ceeb", "#ff4500"];
    return colors[Math.floor(Math.random() * colors.length)];
}
