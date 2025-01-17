window.onload = function () {
    const name = prompt("Enter the name of the birthday person:");
    if (name) {
        document.getElementById("birthday-message").textContent = `Happy Birthday, ${name}!`;
    }
};
