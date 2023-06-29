// https://www.theodinproject.com/lessons/javascript-recursion

function fibs(n){
  if (n===1) return [0];
  let firstNumber = 0
  let secondNumber = 1
  let nextNumber;
  let result = [0,1];

  for (let i=0; i<n-2; i++){
    nextNumber = firstNumber + secondNumber;
    result.push(nextNumber);
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }

  return result;
}

console.log(fibs(8))
console.log(fibs(3))
console.log(fibs(1))

function fibsRec(n){
  if (n===1) return [0];
  if (n===2) return [0,1];
  let result = fibsRec(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}

console.log(fibsRec(8))
console.log(fibsRec(3))
console.log(fibsRec(1))
