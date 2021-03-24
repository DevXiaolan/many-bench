const Bench = require('@mohism/bench').default;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const bench = new Bench();

bench.add('for in', () => {
  for (const k in arr) {
    arr[k]++;
  }
});
bench.add('for of', () => {
  for (const n of arr) {
    n;
  }
});
bench.add('raw for ', () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
});
bench.add('Array.forEach', () => {
  arr.forEach(item => {
    ++item;
  });
});
bench.run();