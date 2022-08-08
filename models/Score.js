export default class Score {

    get score() {
        return parseFloat(this.element.textContent)
    }
    set score(score) {
        this.element.textContent = score;
    }

    constructor(element) {
        this.element = element
    }

    increase() {
        this.score += 1;
    }
}