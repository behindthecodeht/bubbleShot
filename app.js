let duration = 6;
let time = 1000;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let playerName = localStorage.getItem("playerName") || undefined;
let runStop = false;
let run;

const scoreBox = document.getElementById("score");
const highScoreBox = document.getElementById("highScore");
highScoreBox.textContent = highScore;

const bubbleGenarate = () => {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    document.getElementById("app").appendChild(bubble);

    const size = Math.random() * 50 + 50;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.top = Math.random() * 50 + 50 + "%";

    bubble.style.setProperty("--animD", duration + "s");
    bubble.style.setProperty("--top", size / 2 + "px");
    bubble.style.setProperty("--left", Math.random() * 100 + "%");

    let bubbleAlive = setTimeout(() => {
        stopRun();
    }, duration * 1000);

    bubble.addEventListener("click", (e) => {
        clearTimeout(bubbleAlive);
        score++;
        scoreBox.textContent = score;
        e.target.remove();

        if (score % 5 === 0 && time > 200) time -= 100;
        if (score % 10 === 0 && duration > 2) duration -= 1;
    });
};

const stopRun = () => {
    document.querySelectorAll(".bubble").forEach((bubble) => bubble.remove());
    clearInterval(run);

    if (score > highScore) localStorage.setItem("highScore", score);

    if (!runStop) {
        runStop = true;
        let message = `${playerName} Vous Avez Perdu, Desolé !!! \n${
            score > highScore ? "Meilleur Score : " : "Votre Score : "
        }  ${score}`;
        let reload = confirm(message);
        if (reload) location.pathname = "./";
        else window.close;
    }
};

(() => {
    console.log(alert("Commencer le Jeu"));
    if (playerName == undefined) {
        playerName = prompt("Entrer Votre Nom :");
        localStorage.setItem("playerName", playerName);
    }
    run = setInterval(bubbleGenarate, time);
})();
