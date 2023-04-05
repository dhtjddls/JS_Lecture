// 변수가 무엇이고, 왜 필요할까?

// 모든 프로그래밍 언어는 기억하고 싶은 값을 메모리에 저장하고, 저장된 값을 읽어 들여 재사용 하기 위해 변수라는 메커니즘을 이용합니다.

// 변수 이름 : 저장된 값의 고유 이름

// 변수 값 : 변수에 저장된 값

// 변수 할당 : 변수에 값을 저장하는 행위

// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위

// 변수 참조 : 변수에 할당된 값을 읽어오는것

// var로 변수 덮어쓰기
var myVar = "Hello";
var myVar = "World"; // -> var 재선언, 재할당 가능
console.log(myVar); // "World"

// let으로 변수 덮어쓰기
let myLet = "Hello";
myLet = "World"; // 기존 값을 덮어쓰기 -> let 재선언 불가능, 재할당 가능
console.log(myLet); // "World"

// const로 상수 선언 후 값 변경하기
const myConst = "Hello";
// myConst = "World"; 오류 발생 -> const 재할당, 재선언 불가
console.log(myConst);
