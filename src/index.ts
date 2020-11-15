// const name = "Nocolas",
//     age = 24,
//     gender = "male";

// //const sayHi = (name, age, gender = "F") => {
// const sayHi = (name, age, gender?) => {
//     console.log(`${name}, ${age}, ${gender}`);
// };

// sayHi(name, age);

//const sayHi = (name: string, age:number, gender: boolean): void => {
const sayHi = (name: string, age:number, gender: boolean): string => {
    return `${name}, ${age}, ${gender}`;
};

console.log( sayHi("shinikhee", 46, true) );

export {};