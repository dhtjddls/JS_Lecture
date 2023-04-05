// 연산자(+, -, *, /, %)

// 산술 연산자(arithmetic operators)
// 1. 더하기 연산자(+)
console.log(2 + 3); // 5
console.log("2" + "3"); // "23"
console.log("2" + 3); // "23"
console.log(2 + "3"); // "23"
// 2. 빼기 연산자(-)
console.log(5 - 2); // 3
console.log("5" - "2"); // 3
console.log("5" - 2); // 3
console.log(5 - "2"); // 3
console.log("five" - 2); // NaN
// 3. 곱하기 연산자(*)
console.log(2 * 3); // 6
console.log("2" * "3"); // 6
console.log("2" * 3); // 6
console.log(2 * "3"); // 6
console.log("two" * 3); // NaN
// 4. 나누기 연산자(/)
console.log(6 / 3); // 2
console.log("6" / "3"); // 2
console.log("6" / 3); // 2
console.log(6 / "3"); // 2
console.log("six" / 3); // NaN
// 5. 나머지 연산자(%)
console.log(7 % 3); // 1
console.log("7" % "3"); // 1
console.log("7" % 3); // 1
console.log(7 % "3"); // 1
console.log("seven" % 3); // NaN

// 할당 연산자(assignment operators)
// 1. 등호 연산자(=)
let x = 10;
console.log(x); // 10

x = 5;
console.log(x); // 5
// 2. 더하기 등호 연산자(+=)
x = 10;
console.log(x); // 10

x += 5;
console.log(x); // 15
// 3. 빼기 등호 연산자(-=)
x = 10;
console.log(x); // 10

x -= 5;
console.log(x); // 5
// 4. 곱하기기 등호 연산자(*=)
x = 10;
console.log(x); // 10

x *= 5;
console.log(x); // 50
// 5. 나누기 등호 연산자(/=)
x = 10;
console.log(x); // 10

x /= 5;
console.log(x); // 2
// 6. 나머지 등호 연산자(%=)
x = 10;
console.log(x); // 10

x %= 3;
console.log(x); // 1

// 비교 연산자(comparison operators)
// 1. 일치 연산자(===)
console.log(2 === 2); // true
console.log("2" === 2); // false
console.log(2 === "2"); // false
// 2. 불일치 연산자(!==)
console.log(2 !== 2); // false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true
// 3. 작다(<) 연산자
console.log(2 < 3); // true
console.log(2 < "3"); // true
console.log("2" < 3); // true
// 4. 크다(>) 연산자
console.log(2 > 3); // false
console.log(2 > "3"); // false
console.log("2" > 3); // false
// 5. 작거나 같다(<=) 연산자
console.log(2 <= 3); // true
console.log(2 <= "3"); // true
console.log("2" <= 3); // true
console.log(2 <= 2); // true
// 6. 크거나 같다(>=) 연산자
console.log(2 >= 3); // false
console.log(2 >= "3"); // false
console.log("2" >= 3); // false
console.log(2 >= 2); // true

// 논리 연산자(logical operators)
// 1. 논리곱(&&) 연산자
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// 2. 논리합(||) 연산자
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// 3. 논리부정(!) 연산자
console.log(!true); // false
console.log(!false); // true
console.log(!(2 > 1)); // false

// 삼항 연산자(ternary operator)
// 1. 삼항 연산자(?:)
x = 10;
let result = x > 5 ? "크다" : "작다";
console.log(result); // "크다"
// 타입 연산자(type operators)
// 1. typeof 연산자
console.log(typeof 123); // "number"
console.log(typeof "123"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
