let n = 10
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}
for (let i = 0; i <= n; i++) {
    console.log(factorial(i));
}