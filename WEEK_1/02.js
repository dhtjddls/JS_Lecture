// js의 데이터 타입

// Number
// 1. Integer
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // "number"
// 2. Float
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"
// 3. Exponential
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // "number"
// 4. Nan
let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"
// 5. Infinity
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // "number"

// String
let name = "Alice";
let message = "Hello, world!";

// 1. 문자열 길이(length) 확인하기
let str = "Hello, world!";
console.log(str.length); // 13

// 2. 문자열 결합(concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // "Hello, world!"

// 3. 문자열 자르기(substr, slice)
str = "Hello, world!";
console.log(str.substr(7, 5)); // "world"
console.log(str.slice(7, 12)); // "world"

// 4. 문자열 검색(search)
str = "Hello, world!";
console.log(str.search("world")); // 7

// 5. 문자열 대체(replace)
str = "Hello, world!";
result = str.replace("world", "JavaScript");
console.log(result); // "Hello, JavaScript!"

// 6. 문자열 분할(split)
str = "apple, banana, kiwi";
result = str.split(",");
console.log(result); // ["apple", " banana", " kiwi"]

// Boolean
let bool1 = true;
console.log(bool1); // true
console.log(typeof bool1); // "boolean"
let bool2 = false;
console.log(bool2); // false
console.log(typeof bool2); // "boolean"

let x = 10;
let y = 5;

if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is less than or equal to y");
}

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// Undefined
let z;
console.log(z); // undefined

// Null
y = null;

// Object
let person = { name: "Alice", age: 20 };
person.name; // 'Alice'
person.age; // 20

// Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
