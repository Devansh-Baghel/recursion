// iterative method

function getPrime(n){
  let result = 0;
  let divisor = 2;

  while (divisor <= n){
    if (n%divisor === 0){
      result = divisor;
      n = n/divisor;
    }
    else{
      divisor++
    }
  }

  return result;
}

console.log(getPrime(600851475143))
