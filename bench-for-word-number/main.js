const _ = require('lodash');
const Bench = require('@mohism/bench').default;

const bench = new Bench();

const ref = [
  {
    "num": 1,
    "word": "One"
  },
  {
    "num": 2,
    "word": "Two"
  },
  {
    "num": 3,
    "word": "Three"
  },
  {
    "num": 4,
    "word": "Four"
  },
  {
    "num": 5,
    "word": "Five"
  }
];

const NumMap = ref.reduce((state, cur) => {
  state[cur.num] = cur.word;
  return state;
}, {})

function numToWord(num) {
  return _.reduce(ref, (accum, r) => {
    return r.num === num ? r.word : accum;
  }, -1);
}

function numToWordByFind(num) {
  return ref.find(item => item.num === num).word;
}

function numToWordByMap(num) {
  return NumMap[num];
}

// console.log(
//   numToWord(3),
//   numToWordByFind(3),
//   numToWordByMap(3),
// );

bench.add('use fucking reduce', () => {
  numToWord(3);
})

bench.add('use find', () => {
  numToWordByFind(3)
})

bench.add('use Map', () => {
  numToWordByMap(3)
})

bench.run()