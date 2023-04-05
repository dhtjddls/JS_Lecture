// 문 (if, else if, else, switch ~~)

// 조건문(if, else if, else, switch)

// if문
// 1. 기본적인 if문
let x = 10;

if (x > 0) {
  console.log("x는 양수입니다.");
}
// 2. if-else문
x = -10;

if (x > 0) {
  console.log("x는 양수입니다.");
} else {
  console.log("x는 음수입니다.");
}
// 3. if-else if-else문
x = 0;

if (x > 0) {
  console.log("x는 양수입니다.");
} else if (x < 0) {
  console.log("x는 음수입니다.");
} else {
  console.log("x는 0입니다.");
}

// switch문
let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과는 빨간색입니다.");
    break;
  case "바나나":
    console.log("바나나는 노란색입니다.");
    break;
  case "오렌지":
    console.log("오렌지는 주황색입니다.");
    break;
  default:
    console.log("해당하는 과일이 없습니다.");
    break;
}

// 삼항 연산자
let age = 20;
let message = age >= 18 ? "성인입니다." : "미성년자입니다.";
console.log(message); // "성인입니다."

// 조건문의 중첩
age = 20;
let gender = "여성";

if (age >= 18) {
  if (gender === "남성") {
    console.log("성인 남성입니다.");
  } else {
    console.log("성인 여성입니다.");
  }
} else {
  console.log("미성년자입니다.");
}

// 조건부 실행
x = 10;

x > 0 && console.log("x는 양수입니다.");

// 삼항 연산자와 단축 평가
x = undefined;
let y = x || 10;

console.log(y); // 10
// falsy한 값과 truthy한 값
if (0) {
  console.log("이 코드는 실행되지 않습니다.");
}

if ("") {
  console.log("이 코드는 실행되지 않습니다.");
}

if (null) {
  console.log("이 코드는 실행되지 않습니다.");
}

if (undefined) {
  console.log("이 코드는 실행되지 않습니다.");
}

if (NaN) {
  console.log("이 코드는 실행되지 않습니다.");
}

if (false) {
  console.log("이 코드는 실행되지 않습니다.");
}
