let confettiSettings = { target: 'confetti-canvas', max: 100 };
let confetti = new ConfettiGenerator(confettiSettings);

let fireworksCanvas = document.getElementById('fireworks-canvas');
let fireworksCtx = fireworksCanvas.getContext('2d');

// Tạo hiệu ứng pháo bông
function startFireworks() {
    fireworksCanvas.style.display = 'block';
    fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    confetti.render(); 
}

function stopFireworks() {
    confetti.clear(); // Dừng confetti
    fireworksCanvas.style.display = 'none';
}

function startQuestions() {
    document.getElementById("que").style.display = "none";
    document.getElementById("questions").style.display = "block";
}

function answerYes() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerHTML = "DM me to let me know.";
    startFireworks(); // Bắt đầu hiệu ứng pháo bông
}

function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("confirm").style.display = "block";
}

function confirmSure() {
    document.getElementById("confirm").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerHTML = "I know you find it awkward. its ok, i respect your choice. 😔";
    stopFireworks(); // Dừng pháo bông và tạo cảm giác buồn
}

function confirmNo() {
    document.getElementById("confirm").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerHTML = "DM me to let me know.";
    startFireworks(); // Bắt đầu lại hiệu ứng pháo bông
}

window.addEventListener('beforeunload', function () {
    confetti.clear(); // Dọn dẹp confetti nếu người dùng rời trang
});