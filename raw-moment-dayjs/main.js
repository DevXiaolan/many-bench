const Moment = require('moment');
const Day = require('dayjs');
const Bench = require('@mohism/bench');

const b = new Bench();

// console.log(Day().format('YYMMDD'));

// console.log(Moment().format('YYMMDD'));

b.add('raw', () => {
  const date = new Date();
  return (
    (date.getFullYear() * 10000 +
      (date.getMonth() + 1) * 100 +
      date.getDate()) %
    1e6
  );
});
b.add('moment', () => {
  return Moment().format('YYMMDD');
});
b.add('dayjs', () => {
  return Day().format('YYMMDD');
});

b.run();