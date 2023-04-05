// 배열

// 배열 생성
// 1. 기본적인 배열 생성
let fruits = ["사과", "바나나", "오렌지"];
// 2. 배열의 크기 지정
let numbers = new Array(5);
// 배열 요소 접근
console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
console.log(fruits[2]); // "오렌지"
// 배열 메소드

// 1. push() 메소드
fruits = ["사과", "바나나"];

fruits.push("오렌지");

console.log(fruits); // ["사과", "바나나", "오렌지"]
// 2. pop() 메소드
fruits = ["사과", "바나나", "오렌지"];

fruits.pop();

console.log(fruits); // ["사과", "바나나"]
// 3. shift() 메소드
fruits = ["사과", "바나나", "오렌지"];

fruits.shift();

console.log(fruits); // ["바나나", "오렌지"]

// 4. unshift() 메소드
fruits = ["바나나", "오렌지"];

fruits.unshift("사과");

console.log(fruits); // ["사과", "바나나", "오렌지"]
// 5. splice() 메소드
fruits = ["사과", "바나나", "오렌지"];

fruits.splice(1, 1, "포도");

console.log(fruits); // ["사과", "포도", "오렌지"]
// 6. slice() 메소드
fruits = ["사과", "바나나", "오렌지"];

let slicedFruits = fruits.slice(1, 2);

console.log(slicedFruits); // ["바나나"]
// 7. forEach() 메소드
numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
// 8. map() 메소드
numbers = [1, 2, 3, 4, 5];
// map은 새로운 배열을 반환한다!
let squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
// 9. filter() 메소드
numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
// 10. reduce() 메소드
numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);
// 11. find() 메소드
numbers = [1, 2, 3, 4, 5];

let foundNumber = numbers.find(function (number) {
  return number > 3;
});

console.log(foundNumber); // 4
// 12. some() 메소드
numbers = [1, 2, 3, 4, 5];

let hasEvenNumber = numbers.some(function (number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // true
// 13. every() 메소드
numbers = [2, 4, 6, 8, 10];

let isAllEvenNumbers = numbers.every(function (number) {
  return number % 2 === 0;
});

console.log(isAllEvenNumbers); // true
// 14. sort() 메소드
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
// 15. reverse() 메소드
numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); // [5, 4, 3, 2, 1]
