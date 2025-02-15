let a = [5, 4, 3, 2, 1];
let b = ['anh', 'yeu', 'em'];
let c = [];
// let c = a + b;
// console.log(typeof c) type string;

console.log(typeof a);
console.log(typeof b);

a[6] = 10;
a[8] = 20;
console.log(a);
// undefined
console.log(c[0]);

for (let i = 0; i < a.length; i++) {
    a[i] = i;
}
console.log(a);
// insert index call back
a.push(17);
a.push(21);
console.log(a);
// delete index
a.pop();
a.pop();
console.log(a);