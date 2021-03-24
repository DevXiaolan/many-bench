const Bench = require('@mohism/bench').default;

const bench = new Bench();

const cases = [1, 0, 0, 1, 1, 1, 0, 0];

bench.add('raw for', () => {
  let count = 0;
  for (let i = 0; i < cases.length; i++) {
    cases[i] === 1 && count++;
  }
});

bench.add('filter', () => {
  cases.filter(i=>i===1).length;
});

bench.run();