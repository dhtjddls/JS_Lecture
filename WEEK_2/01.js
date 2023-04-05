// ES6

// 2015년도 이전 -> var
// ES6 => let(변수), const(상수)

// (1) let, const
// let과 const의 특징
// let: 재할당은 가능하고, 재선언은 불가능
// const: 재할당, 재선언이 불가능, 초기값이 없으면 선언 불가능

// (2) 화살표 함수 (Arrow Function)
// ES5
function func() {
  return true;
}

//ES6
const func = () => true;
const func = () => {
  return true;
};

() => {};
(parm) => {};
(parm1, parm2, ...parms) => {};

// 익명 화살표 함수
() => {};

// this
// `function`은 호출을 할 때 `this`가 정해지지만, 화살표 함수는 선언할 때 `this`가 정해진다.

// (3) 삼항 연산자 (ternary operator)
condition ? expr1 : expr2;

console.log(true ? "참" : "거짓"); // 참
console.log(false ? "참" : "거짓"); // 거짓

// (4) 구조 분해 할당 (Destructuring)
// 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1); // 1
console.log(value2); // "new"

let arr = ["value1", "value2", "value3"];
let [a, b, c] = arr;
console.log(a, b, c)[ // value1 value2 value3
  // let [a,b,c] = arr; 은 아래와 동일!
  // let a = arr[0];
  // let b = arr[1];
  // let c = arr[2];

  (a, b, c, d)
] = arr;
console.log(d)[(a, b, c, (d = 4))] = // undefined
  arr;
console.log(d); // 4

// 객체의 경우
let user = { name: "nbc", age: 30 };
let { name, age } = user;

// let name = user.name;
// let age = user.age;

console.log(name, age); // nbc 30

// 새로운 이름으로 할당
let o = { p: 42, q: true, birthDay };
console.log(birthDay); // undefined
let { p: foo, q: bar, birthDay = "today" } = o;
console.log(birthDay); // today
console.log(foo); // 42
console.log(bar); // true

// (5) 단축 속성명 (property shorthand)
// 객체의 key와 value 값이 같다면, 생략 가능함
const nameOne = "nbc";
const ageOne = "30";

const objOne = {
  name,
  age: newAge,
};

const objTwo = {
  name,
  age,
};
// (6) 전개 구문 (Spread)
// 배열
let arrOne = [1, 2, 3];

let newArr = [...arrOne, 4];
console.log(newArr); // [1,2,3,4]

// 객체
let userOne = { name: "nbc", age: 30 };
let user2 = { ...userOne };

user2.name = "nbc2";

console.log(userOne.name); // nbc
console.log(user2.name); // nbc2

// (7) 나머지 매개변수(rest parameter)
function func(a, b, ...args) {
  console.log(...args);
}

func(1, 2, 3); // 3
func(1, 2, 3, 4, 5, 6, 7); // 3 4 5 6 7

// (8) 템플릿 리터럴 (Template literals)

`string text 


string text line2`; // -> 멀티 라인 지원
let value = "텍스트"`string text ${value} text`; // `string text 텍스트 text`

// (9) named export vs default export
// 1. default Export
// name.js
const Name = () => {};

export default Name;

// other file
// 아무 이름으로 import 가능
import newName from "name.js";
import NameFromOtherModule from "name.js";

// 2. named export
// 하나의 파일에서 여러 변수/클래스 등을 export 하는 것이 가능

export const Name1 = () => {};

export const Name2 = () => {};

// other file
import { Name1, Name2 } from "name.js";
import { newName } from "name.js"; // x

// 다른 이름으로 바꾸려면 as 사용
import { Name1 as newName, Name2 } from "name.js";

// default export 처럼 가져오려면 * 사용
import * as NameModule from "name.js";

console.log(NameModule.Name1);
