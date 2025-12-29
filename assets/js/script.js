document.addEventListener('DOMContentLoaded', () => {
    initParticulas();
});

function initParticulas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particulas-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let w, h;
    let particulas = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function criarParticula(isMobile) {
        const maxOpacity = isMobile ? 0.3 : 0.5;
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            tamanho: Math.random() * 2 + 1,
            cor: `rgba(187, 134, 252, ${Math.random() * maxOpacity})`
        };
    }

    function init() {
        resize();
        const isMobile = w < 768;
        const quantidade = isMobile ? 10 : 15; // Atualizado: 10 mobile, 15 PC

        for (let i = 0; i < quantidade; i++) {
            particulas.push(criarParticula(isMobile));
        }
        loop();
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);
        particulas.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            ctx.fillStyle = p.cor;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.tamanho, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', () => {
        resize();
        // Não resetamos as partículas para evitar flicker, apenas ajustamos o canvas
    });
    init();
}
