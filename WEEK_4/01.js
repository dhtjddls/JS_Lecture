// 콜백함수
// callback = call(부르다) + back(되돌아오다) = 되돌아와서 호출해줘!
// 즉, 콜백 함수는 다른 코드(함수 또는 메서드)에게 인자로 넘겨줌으로써 그 제어권도 함께 위임한 함수.
// 콜백 함수를 위임받은 코드는 자체적으로 내부 로직에 의해 이 콜백 함수를 적절한 시점에 실행 ← 이 적절한 시점 역시 제어권이 있는 위임받은 코드가 알아서 👍

// 제어권
// 1. 콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수 호출 시점에 대한 제어권을 가짐

// 2. 인자(매개변수)의 제어권
// 인자(의 순서)까지도 제어권이 있다.
var newArr = [10, 20, 30].map(function (currentValue, index) {
  // currentValue, index는 이미 지정되어 있다.
  console.log(currentValue, index);
  return currentValue + 5;
});

// 3. this
// 콜백 함수도 함수이기 때문에 기본적으로는 this가 전역객체를 참조한다 그러나 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다. (call, apply)

// setTimeout은 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째 인자에
// 전역객체를 넘겨요
// 따라서 콜백 함수 내부에서의 this가 전역객체를 가리켜요
setTimeout(function () {
  console.log(this);
}, 300); // Window { ... }

// forEach도 마찬가지로, 콜백 뒷 부분에 this를 명시해주지 않으면 전역객체를 넘겨요!
// 만약 명시한다면 해당 객체를 넘기긴 해요!
[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this); // Window { ... }
});

//addEventListener는 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째
//인자에 addEventListener메서드의 this를 그대로 넘겨주도록 정의돼 있어요(상속)
document.body.innerHTML += '<button id="a">클릭</button';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e);
});

// 콜백 함수는 함수다 (Not a method)
// 콜백 함수로 어떤 객체의 메서드를 전달하더라도, 그 메서드는 메서드가 아닌 함수로 호출

var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  },
};

//method로써 호출
obj.logValues(1, 2);

//callback => obj를 this로 하는 메서드를 그대로 전달한게 아니에요
//단지, obj.logValues가 가리키는 함수만 전달한거에요(obj 객체와는 연관이 없습니다)
[4, 5, 6].forEach(obj.logValues);

// 콜백 함수 내부의 this에 다른 값 바인딩하기
// 🤔 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
// 🤔 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //이 부분!
    return function () {
      console.log(self.name);
    };
  },
};
// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
var callback = obj1.func();
setTimeout(callback, 1000);

// better way
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};
//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = { name: "obj2" };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(obj1.func.bind(obj2), 1500);

// 콜백 지옥과 비동기 제어

// 콜백 지옥
// 콜백 함수를 익명 함수(아래 이미지로 살짝 보시면…)로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 헬 수준인 경우
step1(function (value1) {
  step2(function (value2) {
    step3(function (value3) {
      step4(function (value4) {
        step5(function (value5) {
          step6(function (value6) {
            // Do something with value6
          });
        });
      });
    });
  });
});
// 동기 vs 비동기
// 1. 동기 : synchronous
//     1. 현재 실행중인 코드가 끝나야 다음 코드를 실행하는 방식
//     2. CPU의 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드
//     3. 계산이 복잡해서 CPU가 계산하는 데에 오래 걸리는 코드 역시도 동기적 코드

// 2. 비동기 : a + synchronous ⇒ async
//     1. 실행 중인 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어가는 방식
//     2. setTimeout, addEventListner 등
//     3. 별도의 요청, 실행 대기, 보류 등과 관련된 코드는 모두 비동기적 코드

// 비동기 작업의 동기적 표현이 필요합니다.

// <비동기 작업의 동기적 표현(1) - Promise(1)>
// - new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행돼요.
// - 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우 resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않아요.
// - 따라서, 비동기작업이 완료될 때 비로소 resolve, reject 호출해요.

// <비동기 작업의 동기적 표현(2) - Generator>
// *가 붙은 함수가 제너레이터 함수입니다. 제너레이터 함수는 실행하면, Iterator 객체가 반환(next()를 가지고 있음)돼요.
// (!함수를 순환 가능한 객체로 반환!)

// iterator 은 객체는 next 메서드로 순환 가능. next 메서드 호출 시, Generator 함수 내부에서 가장 먼저 등장하는 yield에서 stop 이후 다시 next 메서드를 호출하면 멈췄던 부분 -> 그 다음의 yield까지 실행 후 stop

// 즉, 비동기 작업이 완료되는 시점마다 next 메서드를 호출해주면 Generator 함수 내부소스가 위 -> 아래 순차적으로 진행 😊

var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};
var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();

// <비동기 작업의 동기적 표현(3) - Promise + Async/await>
// 비동기 작업을 수행코자 하는 함수 앞에 async,
// 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await를 붙여주면 끝

var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};
var coffeeMaker = async function () {
  var coffeeList = "";
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
  };
  await _addCoffee("에스프레소");
  console.log(coffeeList);
  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("카페모카");
  console.log(coffeeList);
  await _addCoffee("카페라떼");
  console.log(coffeeList);
};
coffeeMaker();
