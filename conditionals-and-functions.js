/*
 * Conditionals, Functions, Scoop and Loops
 */

// Equals
let equals = 1 === '1';
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let LessThan = 2 < 10;

// Grater than or equal
let GraterThanEq = 5 >= 5;

// Less than equals
let LessThanEq = 4 <= 9;

// Not equals
let notEquals =  5 !== 2;

let storeA = 1.40;
let storeB = 3.40;



function compareStorePrices(storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has the lowest price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices(10, 5;)
//compareStorePrices(7, 10);

function squaredNum (number) {
    return number * number
}

let squaredNumber = squaredNum(10)
console.log(squaredNumber)

let x = 10;

function addNumbers (n, m, x){
    console.log(x);
    return n + m;
    let b;
    if (1===1){
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(2,3, 10);

//              0  1  2  3  4  5  8
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length
for(let i = 0; i <arrLen; i++){
  //  console.log("i is equal to: " +i);
    console.log(ourArray[i]);
    for(let j = 0; j < 10; j++) {
    console.log('j is equal to: ' + j);
    }
}

let b = 0;
while (b < 10) {
    console.log('Ran');
    b = b + 1;
}