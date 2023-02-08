<script>
    import { onMount } from "svelte";

    let canvas;
    onMount(() => {
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;
        ctx.lineWidth = 1;
        //const LINECOLOR = "#ffeb3b";
        const LINECOLOR = "#8c7b9e";
        const ballCount = 0.1 * WIDTH;

        const MAX_DISTANCE = 150;

        class Ball {
            constructor(x, y, r) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * 2 * Math.PI;
                this.speed = 0.6;
                this.xVel = Math.cos(angle) * this.speed;
                this.yVel = Math.sin(angle) * this.speed;
                this.r = r;
            }

            draw(ctx) {
                // ctx.fillStyle = "#999999";
                // ctx.beginPath();
                // ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                // ctx.fill();

                balls
                    .map((a) => a)
                    .filter((a) => a != this)
                    .filter((a) => this.distance(a.x, a.y) < MAX_DISTANCE)
                    .forEach((ball) => {
                        ctx.save();
                        const distance = this.distance(ball.x, ball.y);
                        const test = (MAX_DISTANCE - distance) / MAX_DISTANCE;
                        ctx.globalAlpha = test;
                        ctx.strokeStyle = LINECOLOR;
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
                return Math.sqrt(dx * dx + dy * dy);
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

        let balls = [];

        for (let i = 0; i < ballCount; i++) {
            balls.push(
                new Ball(Math.random() * WIDTH, Math.random() * HEIGHT, 1)
            );
        }

        let interval = setInterval(() => {
            ctx.fillStyle = "#422D5D";
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            balls.forEach((ball) => {
                ball.update();
                ball.draw(ctx, balls);
            });
        }, 1000 / 30);
        return () => clearInterval(interval);
    });
</script>

<canvas
    style="top: 0; left: 0; margin: 0; position: fixed; z-index: -1000"
    bind:this={canvas}
/>
