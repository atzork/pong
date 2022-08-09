import Stick from "./models/Stick.js";
import Boll from "./models/Boll.js";
import Score from "./models/Score.js";
import AlienStick from "./models/AleenStick.js";

const userScoreElement = document.getElementById('user-score');
const alienScoreElement = document.getElementById('alien-score');
const userStickElement = document.getElementById('user-stick');
const alienStickElement = document.getElementById('alien-stick');
const bollElement = document.getElementById('boll');

const stick = new Stick(userStickElement);
const alienStick = new AlienStick(alienStickElement);
const boll = new Boll(bollElement);
const userScore = new Score(userScoreElement)
const alienScore = new Score(alienScoreElement)

let lastFrame;

const COLLISION_OFFSET = 7

update();

function update(frame) {
    if (lastFrame) {
        const delta = 1 /(frame - lastFrame)
        if (checkCollision(stick.rect, alienStick.rect, boll.rect))
        {
            boll.invertXDirection()
        }
        if (checkUserFault(boll.rect)) {
            userScore.increase();
            boll.reset();
        }
        if (checkAlienFault(boll.rect)) {
            alienScore.increase();
            boll.reset();
        }

        boll.update(delta)
        stick.update(delta)
        alienStick.update(delta, boll.y)


        // console.log(delta)
    }
    lastFrame = frame;

    requestAnimationFrame(update)
}

function checkUserFault(bollRect) {
    return bollRect.left <= 0;
}
function checkAlienFault(bollRect) {
    return bollRect.right >= document.body.clientWidth;
}

function checkCollision(stickRect, alienStickRect, bollRect) {
    return collisionDetected(stickRect, bollRect) ||
        collisionDetected(alienStickRect, bollRect)
}

function collisionDetected(rect1, rect2) {
    const collision =
        rect1.left - COLLISION_OFFSET <= rect2.right &&
        rect1.right + COLLISION_OFFSET >= rect2.left &&
        rect1.top - COLLISION_OFFSET <= rect2.bottom &&
        rect1.bottom + COLLISION_OFFSET >= rect2.top
    return collision
}

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            stick.moveUp();
            break;
        case 'ArrowDown':
            stick.moveDown();
            break;
        default:
            break;
    }
})

document.addEventListener('keyup', () => {
    stick.stop()
})

