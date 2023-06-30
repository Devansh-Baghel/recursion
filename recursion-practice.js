// https://javascript.info/recursion

function pow(x, n){
  let answer = 1;
  for (let i=0; i<n; i++){
    answer *= x;
  }

  return answer;
}

console.log(pow(2, 2))
console.log(pow(3, 9))


function powr(x, n){
  if(n===1) return x;
  return x * powr(x, n-1);
}

console.log(powr(2, 2))
console.log(powr(3, 9))

function sumTo(n){
  if (n===1) return 1;
  return n + sumTo(n-1);
}

console.log(sumTo(100))

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

console.log(fib(7))
console.log(fib(3))
