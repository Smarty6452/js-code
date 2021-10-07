function SumArray(array) {

    let max = Math.max(array[0], array[1]);
    let min = Math.min(array[0], array[1]);

    let SUM = 0 ;
    for(let i = min; i<= max; i++) {
        SUM += i;
    }
return SUM;
// console.log(SUM);
    

}
console.log(SumArray([1, 10]))