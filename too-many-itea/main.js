/**
 * 
 const loginLogs = logs
  .filter(item => item.length > 0)
  .map(item => item[0])
  .map(item => ({
    uid: item.uid,
    time: new Date(item.createdAt).getTime(),
    lastLoginTime: moment(item.createdAt).fromNow(),
  }));

 */

const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const datasource = [
  [
    {
      uid: 1,
    }
  ],
  [
    {
      uid: 1,
    }
  ],
  [
    {
      uid: 1,
    }
  ],
  [
    {
      uid: 1,
    }
  ],
  [
    {
      uid: 1,
    }
  ],
  [
    {
      uid: 1,
    }
  ]
];

suite
  .add('before', function () {
    datasource
      .filter(item => item.length > 0)
      .map(item => item[0])
      .map(item => ({
        uid: item.uid,
      }));
  })
  .add('after', function () {
    datasource.map(item => {
      if (item.length > 0) {
        return {
          uid: item[0].uid
        }
      }
    });
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });