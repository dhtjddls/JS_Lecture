// 데이터 타입(심화)
// 기본형(Primitive type) : number, string, boolean, null, undefined, Symbol
// 참조형(Reference type) 기본적으로 object : Array, Function, Date, RegExp(정규표현식), Map, Set

// 저장방식
// 기본형: 값이 담긴 주소값을 바로 복제
// 참조형: 값이 담긴 주소값들로 이루어진 묶음을 가르키는 주소값을 복제 [obj 하위 항목들의 주소값 말고 obj 주소값을 복제]
// -> 하위 항목을 변경하면 복사한 모든 obj에 영향을 미침
// -> 객체의 프로퍼티 중, 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사 ⇒ 재귀적 수행! => for loop는 객체 안의 객체는 복사할 수가 없어요ㅠㅠㅠ

// 불변성 여부 -> 참조하는 데이터를 변경할 수 있는가
// 기본형: 불변성을 띔 [미리 준비해둔 데이터의 주소 값이니까]
// 참조형: 불변성을 띄지 않음 [object 하위의 항목들은 미리 준비해둘 수 없기 때문에 가변성을 뜰 수 밖에 없음 => 객체 안의 객체 안의 객체 안의 객체? 어떻게 준비할건데! ]

// undefined, null (없음)
// undefined
// 1. 변수에 값이 지정되지 않은 경우, 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근할 때
// 2.이나 []로 접근하려 할 때, 해당 데이터가 존재하지 않는 경우
// 3. return 문이 없거나 호출되지 않는 함수의 실행 결과

var a;
console.log(a); // (1) 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 property에 접근
// console.log(b); // 오류 발생

var func = function () {};
var c = func(); // (3) 반환 값이 없는 function
console.log(c); // undefined

// null
// 용도 : ‘없다’를 명시적으로 표현할 때
// 주의 : typeof null -> typeof null이 object인 것은 유명한 javascript 자체 버그
var n = null;
console.log(typeof n); // object

//동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true
