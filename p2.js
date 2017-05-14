
function fib(limit) {
  let nums = [];
  let i = 0;

  while (nums.length <= limit) {
    if (i === 0 || i === 1) {
      nums.push(1);
      i++;
    } else {
      nums.push(nums[i - 2] + nums[i - 1]);
      i++;
    }
  }

  return nums;
}

function sumOfFib(limit) {
  return fib(limit)
    .reduce((acc, curr) => {
      if (curr % 2 === 0) return acc + curr;
      else return acc;
    }, 0);
}

console.log(sumOfFib(10));
// sumOfFib(10)