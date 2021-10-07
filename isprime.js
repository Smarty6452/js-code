function isPrime(num) {     //logic to check give number is prime or not
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return num !== 1 && num !== 0;
}

function sumOfPrime(num2) {
    let i = 1;
    let sum = 0;
    while (i <= num2) {
        if(isPrime(i)) {
            sum +=i;
        }
        i++;
    }
    return sum;
}

console.log(sumOfPrime(50))
