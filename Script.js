const themeBtn = document.getElementById("themeBtn");
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");
const signal = document.getElementById("signal");

// Alternar tema
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Iniciar investigação
contactBtn.addEventListener("click", () => {
    message.scrollIntoView({
        behavior: "smooth"
    });

    signal.textContent = "SINAL RECEBIDO... 👽";

    setTimeout(() => {
        signal.textContent = "01001000 01001001 👽";
    }, 2500);
});

// Efeito de digitação no título
const title = document.querySelector(".hero h2");
const originalText = title.textContent;

title.textContent = "";

let index = 0;

function typeWriter() {
    if (index < originalText.length) {
        title.textContent += originalText.charAt(index);
        index++;
        setTimeout(typeWriter, 45);
    }
}

typeWriter();
