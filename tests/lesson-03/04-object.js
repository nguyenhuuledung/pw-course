let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
};
console.log(car.year)

let person = {
    name: 'Archer',
    address: {
        street: 'Emiya Residence',
        city: 'Fuyuki',
        country: 'Japan',
    }
};
console.log(person.address)

let student = {
    name: 'Toyota',
    grade: {
        math: 10,
        english: 10,
    }
};
console.log("math =", student["grade"]["math"]);
console.log("math =", student.grade.math);
// nho em giai thich 2 cach viet console.log nay ung dung khi nao

let settings = {
    volume: 100,
    brightness: 100,
};
settings.volume = 200
console.log(settings)

let bike = {
};
bike.color = "red";
console.log(bike)

let employee = {
    name: 'Saber',
    age: '???',
};
delete employee.age;
console.log(employee)