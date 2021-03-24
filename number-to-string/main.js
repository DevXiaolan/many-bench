const Bench = require('@mohism/bench').default;



const bench = new Bench();

bench.icon('#')

const a = 123.456;

bench.add('template', () => {
  `${a}`;
});

bench.add('""+', () => {
  '' + a;
});

bench.add('toString', () => {
  a.toString();
});

bench.run();