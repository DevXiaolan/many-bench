const Bench = require('@mohism/bench').default;

const bench = new Bench();

bench.add('letter obj', () => {
  const a = { name: 'hello' };
});

bench.add('json parse', () => {
  const a = JSON.parse('{"name":"hello"}');
});

bench.run();