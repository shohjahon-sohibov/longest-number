let elNumberList = $_('.number-list');
let elOutput = $_('.output');

let numbers = [
  " One",
  " three",
  " Twenty-two",
  " Thirty",
  " fivehoundred",
  " Fiftyn",
  " Sixty",
  " Seventy",
  " Eighty",
  " Ninety",
  " Hundred",
  " Two Thousand",
  " Four Thousand",
  " Three billion",
]

function chooseLongestNumber() {
  let resultNumber = '';
  numbers.forEach((number) => {
    let currentNumber = number
    
    currentNumber.length > resultNumber.length ? resultNumber = number : false
  });
  return resultNumber
}

elNumberList.textContent = numbers
elOutput.textContent = `${chooseLongestNumber(numbers)} is the longest number than others`

console.log(numbers);
console.log( `${chooseLongestNumber(numbers)} is the longest number than others`);