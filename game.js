const body = document.querySelector("body");
let canvas = document.createElement("canvas");

let aspectRatio = {
	widescreen1:{name:"16:9", ratio:16/9},
	standard1:{name:"4:3", ratio:4/3}
};

let width = 1000;

const cellCountX = 32;
const cellSize = width/cellCountX - 1;
width = cellSize * cellCountX;

const cellCountY = cellCountX / 2;
const height = cellSize * cellCountY;

// const height = width/aspectRatio.widescreen1.ratio / 16 % 0 ?;



canvas.width = width;
canvas.height = height;
canvas.style.border = "1px solid black";
body.appendChild(canvas);

canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, cellSize, cellSize);

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
        if (0 < currentPosX && dirKey == "a" || currentPosX + 1 < width / cellSize && dirKey == "d") {
            ctx.clearRect(currentPosX * cellSize, currentPosY * cellSize, cellSize, cellSize);
            ctx.fillRect(nextPos * cellSize, currentPosY * cellSize, cellSize, cellSize);
            currentPosX = nextPos;
        }
    }

    function moveVertically() {
        if (0 < currentPosY && dirKey == "w" || currentPosY + 1 < height / cellSize && dirKey == "s") {
            ctx.clearRect(currentPosX * cellSize, currentPosY * cellSize, cellSize, cellSize);
            ctx.fillRect(currentPosX * cellSize, nextPos * cellSize, cellSize, cellSize);
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