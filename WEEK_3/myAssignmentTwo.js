// - 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// - **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

var fullname = "Ciryl Gane";

var fighter = {
  fullname: "John Jones",
  opponent: {
    fullname: "Francis Ngannou",
    getFullname: function () {
      return this.fullname;
    },
  },

  getName: function () {
    return this.fullname;
  },

  getFirstName: () => {
    return this.fullname.split(" ")[0];
  },

  getLastName: (function () {
    return this.fullname.split(" ")[1];
  })(),
};

console.log("Not", fighter.opponent.getFullname(), "VS", fighter.getName());
console.log(
  "It is",
  fighter.getName(),
  "VS",
  fighter.getFirstName(),
  fighter.getLastName
);

// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane
// 총 5번의 함수 실행에 대한 this바인딩을 살펴보아야하는데

//  fighter.opponent.getFullname() 에서는 객체 안에서 적용되는 메서드 이기 때문에 주체가 명확히 fighter->opponent 임을 확인할 수 있다 때문에 this는 opponent객체에 바인딩 되며 해당 객체안의 'Francis Ngannou'가 된다,
//  fighter.getName() 에서도 마찬가지로 fighter라는 객체안에서 적용되는 메서드임으로 fighter객체에 바인딩 되면 해당 객체안의 'John Jones'가 된다,
//  fighter.getName() 위와 같은 함수임으로 'John Jones'가 된다,
//  fighter.getFirstName() 는 화살표 함수로 작성되었는데, 화살표함수는 this의 바인딩 절차가 없기 때문에 가장 상위의 window객체에 바인딩 되며 ''Ciryl''이 된다,
//  fighter.getLastName 는 대충 보다가 당했었는데, 함수를 선언하지 않고 바로 실행이되게 되어 있고, 해당 구문을 그냥 호출하고 있다. 때문에 선언하지 않고 실행 중 이기때문에 this가 fighter객체에 바인딩되지 않고 그 이전 상태인 window객체에 해당한 상태로 실행된다. 때문에 ' Gane'가 된다.
