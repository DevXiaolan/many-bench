const Bench = require('@mohism/bench').default;

const b = new Bench();

const KEY = 'a';

const obj1 = {
  a: 1,
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
};

b.add('small',() =>{
  obj1['a'];
})

b.add('big',() =>{
  obj2['i'];
})

b.run()