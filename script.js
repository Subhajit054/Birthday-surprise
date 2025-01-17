window.onload = () => {
    const giftBox = document.getElementById("gift-box");
    const openButton = document.getElementById("open-button");
    const balloonsContainer = document.getElementById("balloons-container");
    const balloonsDiv = document.getElementById("balloons");
    const finalMessage = document.getElementById("final-message");

    // Double Click to Open Gift
    openButton.ondblclick = () => {
        giftBox.classList.add("hidden");
        balloonsContainer.classList.remove("hidden");
        createBalloons();
    };

    // Create Balloons
    function createBalloons() {
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.left = Math.random() * 90 + "vw";
            balloon.style.animationDelay = Math.random() * 2 + "s";
            balloonsDiv.appendChild(balloon);

            // Pop Balloon Event
            balloon.onclick = () => {
                balloon.remove();
                if (balloonsDiv.childElementCount === 0) {
                    showFinalMessage();
                }
            };
        }
    }

    // Show Final Message
    function showFinalMessage() {
        balloonsContainer.classList.add("hidden");
        finalMessage.classList.remove("hidden");
    }
};
