const Bench = require('@mohism/bench').default;

const b = new Bench();

b.add('short string',()=>{
  'abc' === 'abcdefghihjklmnopqrstuvwxyz'
});

b.add('long string',()=>{
  'abcdefghihjkl' === 'abcdefghihjklmnopqrstuvwxyz'
});

b.add('same length',()=>{
  'abcdefghihjkllnopqrstuvwxyz' === 'abcdefghihjklmnopqrstuvwxyz'
});

b.run();