// Class
// class는 '상품'을 대량으로 생산하기 위해 만들어진 '설계도'와 같다
// 객체 생성을 위한 일종의 템플릿
// Instance는 '설계도'로 만든 하나의 '상품'과 같다
// 예시
class Person {
  // constructor는 이름을 변경할 수 없어요.
  // Constructor는 Class의 생성자 함수
  // 생성자 함수는 객체를 생성할 때 호출되고, 객체를 초기화하는 역할을 함
  constructor(name, age) {
    // 이름(name)과 나이(age)가 없으면 사람이 아니죠?
    // new라는 키워드를 이용해서 인스턴스를 만들 때, 기본적으로
    // 넣어야 하는 값들을 의미해요! :)
    // 여기서 말하는 this는 만들어질 인스턴스를 의미한다고 생각해주세요!
    this.name = name;
    this.age = age;
  }

  // 다양한 메소드를 아래와 같이 정의할 수 있어요.
  // 여기서 this.name으로 내부 값을 접근해야 함을 잊지 마세요! :)
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// 인스턴스 생성
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// 만든 객체를 토대로 메서드 호출해보기
person1.sayHello(); // 출력: "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // 출력: "Hello, my name is Bob and I am 25 years old."

// Getters & Setters
// getter는 속성 값을 반환하는 메소드
// setter는 속성 값을 설정하는 메소드

class Rectangle {
  constructor(height, width) {
    // underscore : private(은밀하고, 감춰야 할 때)
    this._height = height;
    this._width = width;
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  // width를 위한 setter
  set width(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      //
      console.log("[오류] 가로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._width = value;
  }

  // height를 위한 getter
  get height() {
    return this._height;
  }

  // height를 위한 setter
  set height(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      //
      console.log("[오류] 세로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다.`);
  }
}

// instance 생성
const rect1 = new Rectangle(10, 7);
rect1.getArea();
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);
