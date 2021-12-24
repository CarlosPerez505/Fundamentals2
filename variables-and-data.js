/*
 * Variables, Data Types, and Typing
 */
let wordData = "Word Data";

console.log(wordData)

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal
console.log(totalWithTax)

let obj = {
    key1: "value 1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2key1: "Internal object value",
    }
};

console.log(obj.key1)
console.log(obj.obj2.obj2key1)

  //   let variable : string = "string"; is not needed because javascript is a dynamically typed language.

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

// In a strongly typed language this previous code would fail because you cant add different data types together
// Javascript is a weakly typed language and tries to convert the number into a string and concatenate them

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "string 1 " + "string 2";

console.log(string);
