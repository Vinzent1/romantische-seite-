const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Animation für funkelnde Sterne
let stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        color: "white",
        speed: Math.random() * 2 + 0.5
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(drawStars);
}

drawStars();

// Feuerwerk bei Ja
function showFireworks() {
    alert("Ja gesagt! 💍✨ Ich liebe dich!");
    document.body.innerHTML = "<div style='color: white; font-size: 2rem; text-align: center; margin-top: 20%;'>🎆 🎉 Vielen Dank, Helena! 🎉 🎆</div>";
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.width = '5px';
            firework.style.height = '5px';
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.borderRadius = '50%';
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 2000);
        }
    }, 500);
}

// Traurige Gesichter bei Nein
function showSadFaces() {
    alert("Oh nein 😢...");
    document.body.innerHTML = "<div style='color: white; font-size: 2rem; text-align: center; margin-top: 20%;'>😢 Ich bin traurig, Helena... 😢</div>";
    for (let i = 0; i < 20; i++) {
        const sadFace = document.createElement('div');
        sadFace.innerHTML = "😢";
        sadFace.style.fontSize = "3rem";
        sadFace.style.position = 'absolute';
        sadFace.style.left = `${Math.random() * 100}%`;
        sadFace.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(sadFace);
        setTimeout(() => sadFace.remove(), 3000);
    }
}

// Event-Listener für die Buttons
document.getElementById('yes-btn').addEventListener('click', showFireworks);
document.getElementById('no-btn').addEventListener('click', showSadFaces);