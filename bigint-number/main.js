const Bench = require('@mohism/bench').default;

const bench = new Bench();

const a = 1n<<30n;

bench.add('bigint over int32', () => {
  a+a;
});

bench.add('bigint', () => {
  1n + 1n;
});

bench.add('Number', () => {
  1 + 1;
});

bench.run();