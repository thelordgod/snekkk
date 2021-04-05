const body = document.querySelector("body");
let canvas = document.createElement("canvas");
const width = 384;
const height = 256;
canvas.width = width;
canvas.height = height;
canvas.style.border = "1px solid black";
body.appendChild(canvas);

canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 16, 16);

var dirKey = null;
var currentPosX = 0;
var currentPosY = 0;
var length = 1;

document.querySelector('body').addEventListener('keydown', function (event) {
    console.log(event.key);
    dirKey = event.key;
})

function moveRect(dirKey) {
    let nextPos = 0;
    switch (dirKey) {
        case "d":
            nextPos = currentPosX + 1;
            moveHorizontally();
            break;
        case "a":
            nextPos = currentPosX - 1;
            moveHorizontally();
            break;
        case "w":
            nextPos = currentPosY - 1;
            moveVertically();
            break;
        case "s":
            nextPos = currentPosY + 1;
            moveVertically();
            break;
    }

    function moveHorizontally() {
        if (0 <= currentPosX - 1 && dirKey == "a" || currentPosX + 1 < width / 16 && dirKey == "d") {
            ctx.clearRect(currentPosX * 16, currentPosY * 16, 16, 16);
            ctx.fillRect(nextPos * 16, currentPosY * 16, 16, 16);
            currentPosX = nextPos;
        }
    }

    function moveVertically() {
        if (0 <= currentPosY - 1 && dirKey == "w" || currentPosY + 1 < height / 16 && dirKey == "s") {
            ctx.clearRect(currentPosX * 16, currentPosY * 16, 16, 16);
            ctx.fillRect(currentPosX * 16, nextPos * 16, 16, 16);
            currentPosY = nextPos;
        }
    }

    console.log(currentPosX, currentPosY);
}

function moveLoop() {
    setTimeout(function () {
        moveRect(dirKey);
        moveLoop();
    }, 100)
}

moveLoop();