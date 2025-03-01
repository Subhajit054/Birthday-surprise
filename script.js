const giftBox = document.getElementById("gift-box");
const giftImage = document.getElementById("gift-image");
const balloonsContainer = document.getElementById("balloons-container");
const finalMessage = document.getElementById("final-message");
const doubleClickMessage = document.getElementById("double-click-message");

// Double-click event to open the gift box
giftBox.addEventListener("dblclick", () => {
    // Fade out the gift image
    giftImage.style.opacity = "0";
    doubleClickMessage.style.opacity = "0";

    // After 1 second, hide the gift box and release balloons
    setTimeout(() => {
        giftBox.classList.add("hidden"); // Hide gift box
        releaseBalloons(); // Show balloons
        setTimeout(() => {
            finalMessage.classList.remove("hidden"); // Show birthday wishes
        }, 5000); // After balloons animation
    }, 1000);
});

function releaseBalloons() {
    balloonsContainer.classList.remove("hidden");
    for (let i = 0; i < 50; i++) {
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
   
