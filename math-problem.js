function fibonacci(n) {
    let fibStarter = [1, 1];
    for (let i = 2; i < n; i++) {
        fibStarter[i] = fibStarter[i - 1] + fibStarter[i - 2];
    }
    return fibStarter;
}
// fibonacci(n) ==> O(n)
//console.log(fibonacci(6)); ==>  [1,1,2,3,5,8]

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
// isPrime(number) ==> O(Math.sqrt(number))
// console.log(isPrime(9)) ==> false
// console.log(isPrime(5)) ==> true

function isPowerOfTow(number) {
    if(number == 2){
        return true;
    }

    if (number > 2) {
        return isPowerOfTow(number / 2)
    }

    return false
}
// isPowerOfTow ==> O(logN)
// console.log(isPowerOfTow(10)); ==> false
// console.log(isPowerOfTow(8)); ==> true

function factorial(number){
    if(number == 1){
        return 1
    }

    return number * factorial(number-1);
}
// factorial ==> O(n)
// console.log(factorial(5)); ==> 120