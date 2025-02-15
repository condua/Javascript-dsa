// let car = {
//     make: 'bmw',
//     model: '745li',
//     year: 2020,
//     getPrice: function() {
//         return 5000;
//     },
//     printDescription: function() {
//         console.log(this.make + ' ' + this.model);
//     }
// }

// car.printDescription();
// console.log(car.year);
// console.log(car.getPrice());

// var anotherCar = {};
// // tao thuoc tinh cho anotherCar
// anotherCar.model = 'mercedes';
// console.log(anotherCar.model);

// let carLot = [
//     { year: 2017, make: 'Toyota' },
// ];
//console.log(carLot);

let Vegetable = {
    c: 'Cà chua',
    ct: 'Cà tím',
    b: 'Bắp',
    Vegetable: function()
    {
        console.log(this.c + " ngon hon " + this.ct);
    }
    

}
function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);
Vegetable.Vegetable(1);