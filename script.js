const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 320;

let particles = [];

function createParticle() {
    const angle = Math.random() * Math.PI * 2;
    const radius = 130;
    const speed = 0.01 + Math.random() * 0.02;

    particles.push({
        angle,
        radius,
        speed,
        size: 2 + Math.random() * 3,
        glow: 15 + Math.random() * 25
    });
}

for (let i = 0; i < 30; i++) createParticle();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.angle += p.speed;

        const x = canvas.width / 2 + Math.cos(p.angle) * p.radius;
        const y = canvas.height / 2 + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.fillstyle = "#ff0033";
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = "#ff0033";
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();