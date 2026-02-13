const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const chiikawaGif = document.getElementById("chiikawa");
const questionText = document.getElementById("question");

const noMessages = [
    "T'es sûre ?",
    "Vraiment sûre ??",
    "Tu me brises le cœur...",
    "Pitié 😭",
    "Regarde comme il est triste !"
]

let yesScale = 1;
let noScale = 1;
let clickCount = 0;

const sadGifs = [
    "resources/gif/rainhachiware.gif",
    "resources/gif/cryinghachiware.gif",
    "resources/gif/cryingusagi.gif",
    "resources/gif/cryingchiikawa.gif",
    "resources/gif/rollingmomonga.gif"
]

noBtn.addEventListener("click", () => {
    clickCount++;

    yesScale += 0.5;
    noScale -= 0.1;

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${Math.max(0.3, noScale)})`;

    if (clickCount <= noMessages.length) {
        noBtn.innerText = noMessages[clickCount - 1];
    }

    if (clickCount < sadGifs.length) {
        chiikawaGif.src = sadGifs[clickCount];
    }

    const safeMargin = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - safeMargin;
    const maxY = window.innerHeight - noBtn.offsetHeight - safeMargin;

    const randomX = Math.max(safeMargin, Math.floor(Math.random() * maxX));
    const randomY = Math.max(safeMargin, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
    questionText.innerText = "YAAAAY ! Je savais que tu dirais oui ❤️";
    chiikawaGif.src = "resources/gif/excitedhachiware.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});