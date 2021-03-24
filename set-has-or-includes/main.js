const Bench = require('@mohism/bench').default;

const b = new Bench();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const set = new Set(arr);

b.add('Set.prototype.has true', () => {
    set.has(5);
});

b.add('Array.prototype.includes true', () => {
    arr.includes(5);
});

b.run();