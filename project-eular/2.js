const fib = (n) => {
  if (n === 2) return 2;
  if (n === 1) return 1;
  return fib(n-1) + fib(n-2);
}

const getFibArr = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++){
    result.push(fib(i));
  }

  return result;
}

let sum = 0;
const fibArr = getFibArr(32);
for (let i in fibArr){
  if (fibArr[i]%2 === 0) sum += fibArr[i];
}
console.log(sum)
