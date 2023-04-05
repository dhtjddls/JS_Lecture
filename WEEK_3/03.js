// this

// (1) 상황에 따라 달라지는 this
// - 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
// - 그 객체 안에는 3가지가 존재한다.
// ✓ VariableEnvironment
// ✓ LexicalEnvironment
// ✓ !! ThisBindings !!
// this는 함수를 호출할 때 결정된다.

// 1. 전역 공간에서의 this
//     1. 전역 공간에서 this는 전역 객체를 가리켜요.
// 런타임 환경에 따라 this는 window(브라우저 환경), global(node 환경)를 가리킨다.

// 2. 메서드로서 호출할 때 그 메서드 내부에서의 this
//  함수 vs 메서드 [기준은 독립성]

함수명(); // 함수는 그 자체로 독립적인 기능을 수행
객체.메서드명(); // 메서드는 자신을 호출한 대상 객체에 대한 동작을 수행

// CASE1 : 함수
// 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
var func = function (x) {
  console.log(this, x);
};
func(1); // Window { ... } 1

// CASE2 : 메서드 (-> . or [] 후의 함수 = 메서드)
// 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// obj는 곧 { method: f }를 의미
var obj = {
  method: func,
};
obj.method(2); // { method: f } 2

// 3. 함수로서 호출할 때 그 함수 내부에서의 this
// 함수로서 ‘독립적으로’ 호출할 때는 this는 항상 전역객체를 가리킨다
// 메서드의 내부함수에서의 this
// 오직 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지가 관건
// -> 점 또는 대괄호 표기가 있으면 해당 obj가 this

// 화살표 함수(=this를 바인딩하지 않는 함수)
//  ES6에서는 함수 내부에서 this가 전역객체를 바라보는 문제 때문에 화살표함수를 도입했어요!
// 일반 함수와 화살표 함수의 가장 큰 차이점은 무엇인가요? this binding 여부!

// 4. 콜백 함수 호출 시 그 함수 내부에서의 this
// 콜백 함수란? “어떠한 함수, 메서드의 인자(매개변수)로 넘겨주는 함수”
// 콜백 함수도 함수기 때문에 this는 전역 객체를 참조하지만,
// 콜백함수를 넘겨받은 함수에서 콜백 함수에 별도로 this를 지정한 경우는 예외적으로 그 대상을 참조하게 됨.

// 별도 지정 없음 : 전역객체
setTimeout(function () {
  console.log(this);
}, 300);

// 별도 지정 없음 : 전역객체
[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x);
});

// addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음 (예외!)
// 따라서 this는 button을 의미함
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e);
});

// 5. 생성자 함수 내부에서의 this
// 1. 생성자 : 구체적인 인스턴스를 만들기 위한 일종의 틀
// 2. 공통 속성들이 이미 준비돼 있어요.
// 새로운 인스턴스마다 this는 해당 인스턴트를 가르킨다. 생성자가 아니고!

var Cat = function (name, age) {
  this.bark = "야옹";
  this.name = name;
  this.age = age;
};

var choco = new Cat("초코", 7); //this : choco
var nabi = new Cat("나비", 5); //this : nabi

// (2) 명시적 this 바인딩
// 자동으로 부여되는 상황별 this의 규칙을 깨고 this에 별도의 값을 저장하는 방법 (call / apply / bind)

// 1. call (호출 주체인 함수를 즉시 실행하는 명령어)
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

// no binding
func(1, 2, 3); // global{ ... } 1 2 3

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6

// 2. apply 메서드
// call 메서드와 완전히 동일함 다만, this에 binding할 객체는 똑같이 넣어주고 나머지 부분만 배열로 넘겨줌
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6

// 유사배열 객체 (배열이랑 유사한 객체)
// 유사 배열의 조건

var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
// 1.반드시 length가 필요해야한다. 이 조건은 필수, 없으면 유사배열이라고 인식하지 않는다.
// 2. index번호가 0번부터 시작해서 1씩증가해야한다. 안그래도 되긴하는데 예상치 못한 결과가 생긴다.
//객체에는 배열 메서드를 직접 적용할 수 없어요.
// 원타입이 Object이기 때문에 js의 아주 유용한 Array method들을 사용할수 없다는 문제가 있다. -> 근데 바인딩하면 가능하지롱

//유사배열객체에는 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있어요.
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
Array.prototype.push.call(obj, "d");
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

// 생성자 내부에서 다른 생성자를 호출(공통된 내용의 반복 제거)
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
  this.school = school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스!
  this.company = company;
}
var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");

// 여러 인수를 묶어 하나의 배열로 전달할 때 apply 사용

//비효율
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function (number) {
  // 현재 돌아가는 숫자가 max값 보다 큰 경우
  if (number > max) {
    // max 값을 교체
    max = number;
  }

  // 현재 돌아가는 숫자가 min값 보다 작은 경우
  if (number < min) {
    // min 값을 교체
    min = number;
  }
});

console.log(max, min);

//효율
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min);

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min);

// 3. bind (call, apply랑 다르게 즉시 호출 X, binding된 새로운 함수를 반환)
// [목적]
// 1. 함수에 this를 '미리'적용
// 2. 부분 적용 함수

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // global객체

// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9

// name 프로퍼티
// bind 메서드를 적용해서 새로 만든 함수는 name 프로퍼티에 ‘bound’ 라는 접두어가 붙습니다

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5); // bind 된 함수

// func와 bindFunc의 name 프로퍼티의 차이를 살펴보세요!
console.log(func.name); // func
console.log(bindFunc.name); // bound func
