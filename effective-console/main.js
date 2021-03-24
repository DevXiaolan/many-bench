const Bench = require('@mohism/bench').default;

const bench = new Bench();

bench.icon('🐤');

bench.add('with stdout', () => {
  process.stdout.write('')
  'abc'+'def'+'ghi';
});

bench.add('with console', () => {
  console.log('');
  'abc'+'def'+'ghi';
});

bench.add('without console', () => {
  // do nothing
  'abc'+'def'+'ghi';
});

bench.run();