const Bench = require('@mohism/bench').default;

const bench = new Bench();

function rand5() {
  return Math.floor(Math.random() * 5 + 1);
}

function myRand7() {
  let r = 5 * rand5() + rand5() - 5; // [1,25]
  while (r > 21) {
    r = 5 * rand5() + rand5() - 5;
  }
  return Math.floor(1 + (r - 1) / 3);
}

function randNum(n) {
  let num = 0;
  const max = 5 * 5 + 5;
  while (num < max - n + 1) {
    num = rand5() * 5 + rand5();
  }
  return num + n - max;
}

bench.add('my rand 7', () => {
  myRand7();
});

bench.add('randNum(7)',()=>{
  randNum(7);
});

bench.run();