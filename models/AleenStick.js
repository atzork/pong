import Stick from "./Stick.js";

export default class AlienStick extends Stick {
    upSuspend = false;
    downSuspend = false;

    constructor(element) {
        super(element);
    }

    update(delta, bollPosition) {
        super.update(delta);
        if (bollPosition > this.position && !this.upSuspend) {
            this.moveDown();
            // this.updateUpSuspend();
        } else
        if (bollPosition < this.position && !this.downSuspend) {
            this.moveUp()
            // this.updateDownSuspend();
        }

    }

    updateUpSuspend() {
        this.upSuspend = true;
        setTimeout(() => this.upSuspend = false, 200)
    }

    updateDownSuspend() {
        this.downSuspend = true
        setTimeout(() => this.downSuspend = false, 200)
    }

    suspend
}