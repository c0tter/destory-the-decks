// Game Constants
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const keys = {};
const stars = [];

// Load Synthesia logo for spaceship
const logoImage = new Image();
logoImage.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAADAAcCBQYEAf/EADkQAAIBAgMCDAMGBwAAAAAAAAECAAMEBREhBtEHEhMUMUFRVHGRkpNERcEVMlJhsfAXIiMlc4Hi/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EACsRAQEAAQMCBAYBBQAAAAAAAAABAgMRUQQSFBUhMQUTIkFSYaEygZGx8P/aAAwDAQACEQMRAD8A9CtPVWOYVWlbAqtK7BlaVsDK0rYFVpWwMrSlgVWlUGRpFgVWlLAytK7BA+kgV6rTsWJMrStgVWldgytK2BVaVsDK0rYFRpWwMrSuyCq0rYGVpSwKrSAobSV2Feq07KTK0pYFVpWwMryAqOO2UsCq47ZXYMrjtkWBVcdspYgyN+crYGVpWwKjStgUNpK7CvVadnZJVaVsHX7I7L/alMXt8WW1zyRFORqZdOvUJzOs6z5V7MPf/TPpaPd632d1b4RhtsgWjY26jt5MEn/Z1nIy19XL3yramGM9ofmVp3Wj7YlfmZ8p7ZwnM7Xu1H2xHzM+TtnCc0tu7UfQJHflyds4feaW3d6XoEd+XJ2zhxu1BRMXZKaqoWmoyUZDt+s6vSb/ACt60tf+trFaZ7GIyNK2IKG0lRXqtOzsk9ENVqJTT7zsFHiZXL0m5Juva0t6dpbUrekMqdJAij8gMp5DLK5ZXK/d0pNps1+P49a4HSpNcq7vVJCImWZy6Tr4iZun6bPXtmP2Vz1Jh7tKNvrI/BXPmu+bflmp+UYvEY8Mht3Zn4O4813yPLc/yh4jHhmNuLQ/B3Hmu+R5dn+UPEY8MhtpaH4Sv5rvkeX58w8TjwKvg1fG6v2lSqpSp3Cqyo4OYGWWuXhLY9RjoT5dm+yt0rqXun3eXEMAr4faPc1LimyplooOZzOUyafVY6mUxkUz0bjN7WrVpsWMJA2krshXqtOzYnZtdnU5fHcOp9RuaefhxgZg6m9ujnf1VsJvlF6TyLoq64Ta39ysqOf3KJb1H/mdv4Vj9GV/bU6j3jkVadOxrmVpSwMrSoVWlbBa+E0+SwqzpnpWggPpE85rXfUyv7dHCbYxrNsqnEwgL+Oqo/U/SZ+im+r/AGY+ov0OMVp1rGkUPpK7IV6DlOws6HYXivtVh/KMqorMxLHIDJGP6zS+IenTZ7f96smlPri5ud23eKPrE8v2ZcN3eKz2/wCVu9oi1vSqVaaUEQPTQsOs9I8Z3vh22GhtldvWtTXlubQLa3Xda/ttum734cxh2vBVtrru1b2zK3PDmG14Kltc92re2ZW54cw2r021jeXFVaNO2rFnOQ/kMpnq4Yze1Mxt+y3aahUVR0AZTzNu7ouX28q8W2s6X4qjN5DL6zofD8fqyrW6i+kcirTp2NUobSRsODnWSggIuXYJBsu3YWlyWyeHDLLjUy/qYn6zynX3fqc29pTbCN9NNkSBIEgfCQBmYFb7VYqmJYp/QYNQoDiIw6GPWR++qd3o9C6Wn9XvWjrZ92Xo1StNmxiKG0ldhxM6iUgQHKB2+FcIlxh+HWtlTw2iy29JaYY1SC2Qyz6JydX4VjqZ3O5+94Z8daybbPaOE26Pyyh7x3TF5Rh+d/weIvDMcJV0fltH3TukeUYfn/B4i8Mxwj3J+W0fdO6R5Th+f8HiLwz/AIh3RGmH0Qf8h3SPKsPyPEXhq8U2oxPFKZpVai0qJ6adEZBvE9JmxpdFpaV3nrf2x56uWXo1atNixjMrSoUPpK7Dj50kpAkCQEVpWwKrSEGVpWwKrSmwZWkWBVaUsDK0rsFDaSNhys30pAkCQJAzVpGwVWlbAytKWIMrSNgqNK2BVaU2Ch9JA5ybqUgSBIEgSBmpkBkMogqmQGUmUoVSZAUHSVH/2Q==";

// Load PowerPoint logo for asteroids
const pptLogo = new Image();
pptLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png";

// Generate stars
function generateStars(count) {
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            opacity: Math.random() * 0.8 + 0.2
        });
    }
}

// Draw background
function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    });
}

// Spaceship Class
class Spaceship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.size = 60;
        this.bullets = [];
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(logoImage, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();

        this.bullets.forEach((bullet) => bullet.draw());
    }

    move() {
        if (keys["ArrowUp"]) {
            this.speedX += Math.cos(this.angle) * 0.2;
            this.speedY += Math.sin(this.angle) * 0.2;
        }
        if (keys["ArrowDown"]) {
            this.speedX -= Math.cos(this.angle) * 0.2;
            this.speedY -= Math.sin(this.angle) * 0.2;
        }
        if (keys["ArrowLeft"]) this.angle -= 0.05;
        if (keys["ArrowRight"]) this.angle += 0.05;

        this.speedX *= 0.99;
        this.speedY *= 0.99;

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.bullets.forEach((bullet, index) => {
            bullet.move();
            if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
                this.bullets.splice(index, 1);
            }
        });
    }

    shoot() {
        const bulletX = this.x + Math.cos(this.angle) * (this.size / 2);
        const bulletY = this.y + Math.sin(this.angle) * (this.size / 2);
        const bullet = new Bullet(bulletX, bulletY, this.angle);
        this.bullets.push(bullet);
    }
}

// Bullet Class
class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 7;
        this.radius = 3;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    }
}

// Add More Asteroids Dynamically
function addMoreAsteroids(count) {
    for (let i = 0; i < count; i++) {
        asteroids.push(
            new Asteroid(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 20 + 20
            )
        );
    }
}

// Asteroid Class
class Asteroid {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 2 + 1;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(pptLogo, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
        ctx.restore();
    }

    move() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
}

function resetGame() {
    spaceship = new Spaceship(canvas.width / 2, canvas.height / 2);
    asteroids = Array.from({ length: 15 }, () => // Start with 20 asteroids
        new Asteroid(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 20 + 20
        )
    );
}

// Key Handlers
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    if (e.key === " ") spaceship.shoot();
});
window.addEventListener("keyup", (e) => (keys[e.key] = false));

// Game Loop
function gameLoop() {
    drawBackground();

    spaceship.move();
    spaceship.draw();

    asteroids.forEach((asteroid, asteroidIndex) => {
        asteroid.move();
        asteroid.draw();

        spaceship.bullets.forEach((bullet, bulletIndex) => {
            const dx = bullet.x - asteroid.x;
            const dy = bullet.y - asteroid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < bullet.radius + asteroid.radius) {
                asteroids.splice(asteroidIndex, 1);
                spaceship.bullets.splice(bulletIndex, 1);
            }
        });
    });

    asteroids.forEach((asteroid) => {
        const dx = spaceship.x - asteroid.x;
        const dy = spaceship.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < spaceship.size / 2 + asteroid.radius) {
            resetGame();
        }
    });

    if (asteroids.length === 0) {
        alert("Congratulations! You've destroyed all the slides - Book a demo with me at https://get.synthesia.io/sc!");
        resetGame();
    } else {
        requestAnimationFrame(gameLoop);
    }
}

// Initialize game
resetGame();
generateStars(100);
gameLoop();
