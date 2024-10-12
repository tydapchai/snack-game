let confettiSettings = { target: 'confetti-canvas', max: 100 };
let confetti = new ConfettiGenerator(confettiSettings);

function startQuestions() {
    document.getElementById("que").style.display = "none";
    document.getElementById("questions").style.display = "block";
}

function answerYes() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerHTML = "Aww, That's Sweet! 🎉";
    confetti.render(); // Start confetti
}

function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("troll-questions").style.display = "block";
}

function answerNoAgain() {
    document.getElementById("troll-questions").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerHTML = "You Got Trolled! 😜";
}

window.addEventListener('beforeunload', function () {
    confetti.clear(); // Clean up confetti if user leaves page
});