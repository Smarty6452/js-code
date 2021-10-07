


function sum(n) {

  let fibonacci = [];
  if(n<= 0) return 0;

  fibonacci[0] = 0
  fibonacci[1] = 1

  let sum = fibonacci[0] + fibonacci[1];   //Adding girst two terms


 for(let i = 2; i <= n; i++) {
     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; //getting sum of all Fibonacci numbers less than or equal to accepted number.

     sum += fibonacci[i];


 }

 return sum;


}
console.log(sum(4));
