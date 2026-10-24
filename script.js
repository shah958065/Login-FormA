function flipCard() {
    document.getElementById("authCard").classList.toggle("flipped");
}

// function togglePassword(id, button) {
//     const input = document.getElementById(id);
//     const icon = button.querySelector("i");
//     const showing = input.type === "password";

//     input.type = showing ? "text" : "password";
//     icon.classList.toggle("fa-eye", !showing);
//     icon.classList.toggle("fa-eye-slash", showing);
// }
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector("i");

    const showPassword = input.type === "password";
    input.type = showPassword ? "text" : "password";

    icon.classList.toggle("fa-eye", !showPassword);
    icon.classList.toggle("fa-eye-slash", showPassword);
}

document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const button = form.querySelector(".main-btn");
        const oldText = button.textContent;
        button.textContent = "SUCCESS";

        setTimeout(() => {
            button.textContent = oldText;
        }, 1800);
    });
});