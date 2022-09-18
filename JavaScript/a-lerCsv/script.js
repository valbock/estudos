const readline = require('readline');
const fs = require('fs');
const arquivo = fs.createReadStream('base.csv');

const rl = readline.createInterface({
  input: arquivo,
})

rl.on('line', (line) => {
  console.log(line)
})
