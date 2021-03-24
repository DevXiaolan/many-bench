const net = require('net');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;


suite
  .add('listen', function () {
    const s = net.createServer();
    s.listen(9999);
    s.close();
  })
  .add('connect', function(){
    const c = net.connect(63790,'127.0.0.1');
    c.destroy();
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });