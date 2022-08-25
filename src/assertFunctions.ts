// "asserts" typescript operator in a function
// can be used to check parameters assigned with any type

function assertIsNumber(value: number): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error('Not a Number');
  }
}

function double(number: any) {
  assertIsNumber(number);

  return number * 2;
}

console.log('----Assert Functions----');
console.log('double(number)', 'returns a number doubled');
console.log('double(string)', 'throws an error');
