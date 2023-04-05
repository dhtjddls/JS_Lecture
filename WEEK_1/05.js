// 함수 = function(기능)
// input, output
// 기능의 단위로 묶어서 재활용한다.

// 함수 정의하기
// 1. 함수 선언문(function declaration)
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // 5
// 2. 함수 표현식(function expression)
let add = function (x, y) {
  return x + y;
};

console.log(add(2, 3)); // 5

// 함수 호출하기
// 1. 함수 호출하기
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // 5

// 함수 매개변수와 반환값
// 1. 함수 매개변수
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // 2, 3
// 2. 함수 반환값
function add(x, y) {
  return x + y;
}

let result = add(2, 3);
console.log(result); // 5

// 함수 스코프
// 1. 전역 스코프(global scope)
let x = 10;

function printX() {
  console.log(x);
}

printX(); // 10
// 2. 지역 스코프(local scope)
function printX() {
  let x = 10;
  console.log(x);
}

printX(); //
// 3. 블록 스코프(block scope)
if (true) {
  let x = 10;
  console.log(x);
}

console.log(x); // ReferenceError: x is not defined

// 화살표 함수
// 1. 기본적인 화살표 함수
let add = (x, y) => {
  return x + y;
};

console.log(add(2, 3)); // 5
// 2. 한 줄로 된 화살표 함수
let add = (x, y) => x + y;

console.log(add(2, 3)); // 5
// 3. 매개변수가 하나인 화살표 함수
let square = (x) => x * x;

console.log(square(3)); // 9
