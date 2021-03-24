const Bench = require('@mohism/bench').default;

const bench = new Bench();

const str = '_abf_dd_dd';

function toCamelStyle(original_name) {
  let fracs = original_name.split('_');
  if (fracs[0] === '') {
    fracs.shift();
    fracs[0] = '_' + fracs[0]
  }
  for (let i = 1; i < fracs.length; i++) {
    fracs[i] = fracs[i].replace(fracs[i][0], fracs[i][0].toUpperCase());
  }
  return fracs.join('')
}

function toCamelStyle2(original_name) {
  let pieces = [];
  const outputs = [];
  if (original_name[0] === '_') {
    outputs.push('_');
    [,pieces] = original_name.split('_');
  }else{
    pieces = original_name.split('_');
  }
  
  for (let i = 1; i < pieces.length; i++) {
    outputs.push(pieces[i][0].toUpperCase());
    outputs.push(pieces[i].substr(1));
  }
  return outputs.join('');
}

bench.add('case1', () => {
  toCamelStyle(str);
});

bench.add('case2', () => {
  toCamelStyle2(str);
})

bench.run();