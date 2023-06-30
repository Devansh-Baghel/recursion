// https://projecteuler.net/problem=1

const getSum = (n) => {
  let result = 0;

  for (let i = n-1; i > 0; i--){
    if (i%3 === 0 || i%5 === 0){
      result += i;
    }
  }

  return result
}

console.log(getSum(1000)) // 233168


const getSumRec = (n, current = n - 1) => {
  if (current === 0) return 0;
  if (current % 3 === 0 || current % 5 === 0) return current + getSumRec(n, current - 1);
  return getSumRec(n, current - 1);
};

console.log(getSumRec(1000)) // 233168
console.log(getSumRec(10)) // 23
