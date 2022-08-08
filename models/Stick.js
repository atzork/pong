import {getHeight, getRect, getYPosition, setYPosition} from "../utils.js";

const DEFAULT_VELOCITY = 2;
const OFFSET = 2;

export default class Stick {
    get position() {
        return getYPosition(this.stickElement)
    }
    set position(position) {
        setYPosition(this.stickElement, position)
    }

    get height() {
        return getHeight(this.stickElement)
    }

    get rect() {
        return getRect(this.stickElement)
    }

    constructor(element) {
        this.stickElement= element;
        this.reset();
    }

    reset() {
        this.position = 50;
        this.direction = 0;
        this.velocity = DEFAULT_VELOCITY;
    }

    moveUp() {
        this.direction = -1
    }

    moveDown() {
        this.direction = +1
    }

    stop() {
        this.direction = 0;
    }

    update(delta) {
        const newPosition = this.position + this.direction * this.velocity// * delta
        if (OFFSET < newPosition && (100 - OFFSET) > newPosition + this.height) {
            this.position = newPosition;
        }

        console.log(this.position, this.height)
    }

}