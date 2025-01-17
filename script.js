window.onload = () => {
    const giftBox = document.getElementById("gift-box");
    const openButton = document.getElementById("open-button");
    const balloonsContainer = document.getElementById("balloons-container");
    const balloonsDiv = document.getElementById("balloons");
    const finalMessage = document.getElementById("final-message");
    const wishText = document.getElementById("wish-text");

    // Double Click to Open Gift
    openButton.ondblclick = () => {
        giftBox.classList.add("hidden");
        balloonsContainer.classList.remove("hidden");
        createBalloons();
    };

    // Create 5-6 Balloons
    function createBalloons() {
        for (let i = 0; i < 6; i++) {
            const balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.onclick = () => {
                balloon.remove();
                if (balloonsDiv.childElementCount === 1) {
                    showFinalMessage();
                }
            };
            balloonsDiv.appendChild(balloon);
        }
    }

    // Show Final Message
    function showFinalMessage() {
        balloonsContainer.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        wishText.textContent = `Happy Birthday, Friend! 🎉`;
    }
};
