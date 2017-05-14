const { range } = require('./utils');
const set = range(1, 10);

const sum = n => range(1, n)
  .reduce((acc, curr) => {
    if (curr % 3 === 0 || curr % 5 === 0) {
      return acc.concat(curr);
    }
    return acc
  }, [])
  .reduce((acc, curr) => acc + curr, 0);

function sum_(n) {
  let sum = 0;

  while(n--) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  }
  return sum;
}

console.log(sum(100));
console.log(sum_(100));

