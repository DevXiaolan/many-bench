const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const date = new Date();

suite
  .add('string', function () {
    // 暂不处理 leftpad 0 
    const month = date.getMonth() + 1;
    `${date.getFullYear() % 100}${month < 10 ? '0' + month : month}${date.getDate()}`;
  })
  .add('number', function () {
    (date.getFullYear() * 10000 +
      (date.getMonth() + 1) * 100 +
      date.getDate()) %
      1e6;
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });