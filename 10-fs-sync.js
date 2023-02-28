const {readFileSync, writeFileSync, write} = require('fs');
console.log('start');
const first = require = readFileSync('./content/first.txt', 'utf-8');
const second = require = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`,
{ flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');