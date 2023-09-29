export function getRandomDelay(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
