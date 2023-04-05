// 일급 객체로서의 함수
// 일급 객체란?
// 일급객체(First-class Object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다. [위키백과]

// 함수가 일급 객체로 취급되는 5가지 경우

// (1) 변수에 함수를 할당
const sayHello = function () {
  console.log("Hello!");
};

sayHello(); // "Hello!" 출력

// (2) 함수를 인자로 다른 함수에 전달
// 함수는 다른 함수에 인자로 전달될 수 있습니다. 함수가 값으로 취급되기 때문에, 다른 함수의 인자로 전달할 수 있습니다.
// 이것은 콜백(callback)이나 고차 함수(higher-order function)를 작성하는 데 사용됩니다.

// 콜백 함수. 그리고, 고차 함수(Higher-Order Function)란?
// - 콜백 함수 = 매개변수로 쓰이는 함수
// - 고차 함수 = 함수를 인자로 받거나 함수를 출력으로 반환하는 함수

function callFunction(func) {
  func();
}

const sayCallBackHello = function () {
  console.log("Hello!");
};

callFunction(sayCallBackHello); // "Hello!" 출력

// (3) 함수를 반환
// 함수는 다른 함수에서 반환될 수 있습니다

function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15 출력

// (4) 객체의 프로퍼티로 함수를 할당
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // "Hello, my name is John" 출력

// (5) 배열의 요소로 함수를 할당
const myArray = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(myArray[0](5, 10)); // 15 출력
console.log(myArray[1](10, 5)); // 5 출력

// 함수가 일급 객체로 취급되기 때문에, 자바스크립트에서 함수는 매우 유연하게 사용될 수 있음
// 함수를 일급 객체로 다룰 수 있다는 것은, 코드를 더 간결하고 모듈화된 형태로 작성할 수 있게 해 줌
