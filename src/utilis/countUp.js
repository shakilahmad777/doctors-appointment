export function countUp(target, duration, callback) {
    let start = 0;
    let increment = target / (duration / 10);

    const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
            start = target;
            clearInterval(timer);
        }

        callback(Math.floor(start));
    }, 10);
}
 