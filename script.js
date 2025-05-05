const message = document.getElementById("message");
    const audio = document.getElementById("bg-music");

    function showMessage() {
      message.style.display = "block";
      popBalloons();
      startConfetti();
      audio.play();
    }

    function popBalloons() {
      for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502"][Math.floor(Math.random() * 4)];
        balloon.style.animationDuration = (4 + Math.random() * 2) + "s";
        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 7000);
      }
    }

    function startConfetti() {
      const canvas = document.getElementById('confetti');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let pieces = [];
      for (let i = 0; i < 150; i++) {
        pieces.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 5 + 2,
          c: `hsl(${Math.random() * 360}, 100%, 50%)`,
          vx: Math.random() - 0.5,
          vy: Math.random() * 2 + 1
        });
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of pieces) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
          ctx.fillStyle = p.c;
          ctx.fill();
          p.y += p.vy;
          p.x += p.vx;
          if (p.y > canvas.height) p.y = 0;
        }
        requestAnimationFrame(draw);
      }
      draw();
    }