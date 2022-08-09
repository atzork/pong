import {getHeight, getRect, getYPosition, setYPosition} from "../utils.js";

const DEFAULT_VELOCITY = 2;
const OFFSET = 2;

export default class Stick {
    get position() {
        return getYPosition(this.element)
    }
    set position(position) {
        setYPosition(this.element, position)
    }

    get height() {
        return getHeight(this.element)
    }

    get rect() {
        return getRect(this.element)
    }

    constructor(element) {
        this.element= element;
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
    }

}