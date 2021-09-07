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
    for (let i = 2; i <= Math.sqrt(number) ; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
// isPrime(number) ==> O(Math.sqrt(number))
// console.log(isPrime(9)) ==> false
// console.log(isPrime(5)) ==> true