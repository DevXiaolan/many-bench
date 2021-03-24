// triangle

const { default: Bench } = require('@mohism/bench');
const bench = new Bench();

bench.icon('🎈');

bench.add('嵌套循环', () => {
  var j;
  var s = '';
  for (i = 6; i >= 1; i--) {
    for (j = i; j >= 1; j--) {
      s += '* ';
    }
    s = '';
  }
});

bench.add('一次循环', () => {
  let outputs = [];
  for (var i = 1, str = ''; i <= 6; i++) {
    str += '* ';
    outputs[6 - i] = str;
  }
});

bench.run();