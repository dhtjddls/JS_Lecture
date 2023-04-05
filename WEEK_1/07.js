// 객체
// 객체 생성
// 1. 기본적인 객체 생성
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};
// 2. 생성자 함수를 사용한 객체 생성
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 25, "여자");
// 객체 속성 접근
person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

console.log(person.name); // "홍길동"
console.log(person.age); // 30
console.log(person.gender); // "남자"
// 객체 메소드
// 1. Object.keys() 메소드
let keys = Object.keys(person);

console.log(keys); // ["name", "age", "gender"]
// 2. Object.values() 메소드
let values = Object.values(person);

console.log(values); // ["홍길동", 30, "남자"]
// 3. Object.entries() 메소드
let entries = Object.entries(person);

console.log(entries);
// 4. Object.assign() 메소드
let newPerson = Object.assign({}, person, { age: 35 });

console.log(newPerson); // { name: "홍길동", age: 35, gender: "남자" }
// 5. 객체 비교
person1 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

person2 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

console.log(person1 === person2); // false
console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true
// 6. 객체 병합
person1 = {
  name: "홍길동",
  age: 30,
};

person2 = {
  gender: "남자",
};

let mergedPerson = { ...person1, ...person2 };

console.log(mergedPerson); // { name: "홍길동", age: 30, gender: "남자" }
