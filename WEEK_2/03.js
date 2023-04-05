// Map
// Map, Set이라는 추가적인 자료구조 등장!
// 기존읜 객체, 배열보다 데이터의 구성, 검색 및 사용을 효율적으로 처리

// (1) Map
// - Key / Value
// - Key에 어떤 데이터타입도 다 들어올 수 있다
// - Map은 키가 정렬도니 순서로 저장되기 때문이다
// -> 검색, 삭제, 제거, 여부확인 제공

//// - new Map() – 맵을 만듭니다
//// - map.set(key, value) – key를 이용해 value를 저장합니다
//// - map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined`를 반환합니다
////- map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다
//// - map.delete(key) – key에 해당하는 값을 삭제합니다
//// - map.clear() – 맵 안의 모든 요소를 제거합니다
////- map.size – 요소의 개수를 반환합니다

const myMap = new Map(); // -> Map은 대량 데이터를 위한 자료구조
// get-set
myMap.set("key", "value");
myMap.get("key");

// 반복을 위한 method : keys, values, entries
// map의 keys, values, entries는 모두 iterator(반복, 순회 가능한 구조) 속성을 가지고 있다. -> iterator 전용 반복문 for ...of
// map의 반복문
var iterable = [10, 20, 30];

for (var value of iterable) {
  console.log(value); // 10, 20, 30
}

myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log(myMap.size); // 3 출력

console.log(myMap.has("two")); // true 출력

// Map vs Object? 둘이 뭐가 달라?
// 사용 가능한 Key의 타입 [차이점], 그 외는 object가 절차가 조금 더 있을 뿐 기능은 둘 다 가능
// - Object : String, Symbol
// - Map : Any (함수, 객체, 원시 자료형 등 어떤 값이든 사용 가능)
//  조금 더 순수한 해쉬가 Map이라고 생각하면 편할듯! key, value 생성 삭제가 빠른 Map!
