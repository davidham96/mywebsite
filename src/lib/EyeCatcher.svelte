<script>
    import { onMount } from "svelte";

    onMount(() => {
        const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const MAX_DISTANCE = 150;

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * 2 * Math.PI;
        this.speed = 0.2;
        this.xVel = Math.cos(angle) * this.speed;
        this.yVel = Math.sin(angle) * this.speed;
        this.r = r;
    }

    draw(ctx) {
        ctx.fillStyle = "#999999";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();

        balls.map(a => a).filter(a => a != this).filter(a => this.distance(a.x, a.y) < MAX_DISTANCE).forEach(ball => {
            ctx.save();
            const distance = this.distance(ball.x, ball.y);
            const test = (MAX_DISTANCE - distance) / MAX_DISTANCE;
            ctx.globalAlpha = test
            ctx.strokeStyle = "#999999";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(ball.x, ball.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.restore();
        });
    }

    distance(x, y) {
        let dx = this.x - x;
        let dy = this.y - y;
        return Math.sqrt((dx * dx) + (dy * dy))
    }

    update() {
        this.x += this.xVel;
        this.y += this.yVel;
        if (this.x + this.r > WIDTH || this.x - this.r < 0)
            this.xVel *= -1;
        if (this.y + this.r > HEIGHT || this.y - this.r < 0)
            this.yVel *= -1;
    }
}

let balls = []

for (let i = 0; i < 200; i++) {
    balls.push(new Ball(Math.random() * 1000, Math.random() * 1000, 1));
}

setInterval(() => {
    ctx.fillStyle = "#422D5D";
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    balls.forEach(ball => {
        ball.update();
        ball.draw(ctx, balls);
    });
}, 1000 / 60)
    });
</script>

<canvas width="6000px" height="6000px" style="top: 0; left: 0; margin: 0; position: fixed; z-index: -1000"></canvas>