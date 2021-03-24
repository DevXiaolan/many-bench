const Bench = require('@mohism/bench').default;

const bench = new Bench();

const base = Date.now();

bench.add('Date.prototype.getTime', () => {
  (new Date()).getTime();
});

bench.add('Date.now', () => {
  Date.now();
});

bench.add('process.uptime', () => {
  base + process.uptime();
});

bench.run();