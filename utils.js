export function getYPosition(element) {
    return parseFloat(
        getComputedStyle(element).getPropertyValue('--top')
    )
}
export function getXPosition(element) {
    return parseFloat(
        getComputedStyle(element).getPropertyValue('--left')
    )
}
export function setYPosition(element, y) {
    element.style.setProperty('--top', y);
}
export function setXPosition(element, x) {
    element.style.setProperty('--left', x);
}
export function getHeight(element) {
    return parseFloat(
        getComputedStyle(element).getPropertyValue('--height')
    )
}
export function getSize(element) {
    return parseFloat(
        getComputedStyle(element).getPropertyValue('--size')
    )
}

export function getRect(element) {
    return element.getBoundingClientRect();
}
export function getRandom(min, max) {
    return Math.random() * (max - min) + min
}