// Static Method(= 정적 메소드)
// 인스턴트가 필요하지 않은, 클래스 레벨에서 호출 가능한 메소드(도구)
// 인스턴트가 필요없는 전반적으로 바로 사용가능한(조건 사항이 적은), 유틸리티 함수 혹은 정적 속성인 경우 사용

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(1, 2)); // 3
console.log(Calculator.subtract(3, 2)); // 1
