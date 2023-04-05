// Set (= with Python Set) 집합
// 고유한 값을 저장하는 자료구조
// 값 추가, 삭제, 제거, 존재 여부 확인

// <Set 생성 및 사용>
const mySet = new Set();

// Set에 값 추가
mySet.add("value1");
mySet.add("value2");

// Set에서 값 검색
console.log(mySet.has("value1")); // true 출력

// <Set의 반복>
for (const value of mySet.values()) {
  console.log(value);
}

// <Set의 크기 및 존재 여부 확인>
// 크기
console.log(mySet.size); // 3 출력
// 존재 여부
console.log(mySet.has("value2")); // true 출력
