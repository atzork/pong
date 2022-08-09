import {getRandom, getRect, getXPosition, getYPosition, setXPosition, setYPosition} from "../utils.js";

const DEFAULT_VELOCITY = .5

export default class Boll {
    get y() {
        return getYPosition(this.bollElement)
    }
    set y(position) {
        setYPosition(this.bollElement, position)
    }
    get x() {
        return getXPosition(this.bollElement)
    }
    set x(position) {
        setXPosition(this.bollElement, position)
    }

    get rect() {
        return getRect(this.bollElement)
    }

    direction;
    velocity;
    constructor(element) {
        this.bollElement = element
        this.reset()
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = {x: getRandom(0, 2 * Math.PI), y: getRandom(0, 2 * Math.PI)};
        this.velocity = DEFAULT_VELOCITY;
    }

    invertYDirection() {
        this.direction.y *= -1;
    }
    invertXDirection() {
        this.direction.x *= -1;
    }



    update(delta, stickRect) {
        const newX = this.x + this.direction.x * this.velocity// * delta
        const newY = this.y + this.direction.y * this.velocity// * delta

        if (newY <= 0 || newY >= 100) {
            this.invertYDirection();
        } else {
            this.x = newX;
            this.y = newY
        }
    }
}