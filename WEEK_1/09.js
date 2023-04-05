// 반복문 (for, while)

// for문
// 1. 기본적인 for문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. 배열과 함께 사용하는 for문
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 3. for...in문
let person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// while문
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// do...while문
i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

// break문과 continue문
// 1. break문
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 2. continue문
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
