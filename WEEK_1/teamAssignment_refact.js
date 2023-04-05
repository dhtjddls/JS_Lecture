let prompt = require("prompt-sync")();
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomNumLength = 3;
let randomNum = "";
let cnt = 1;
for (let i = 0; i < randomNumLength; i++) {
  let num = numArr[Math.floor(Math.random() * numArr.length)];
  numArr.splice(numArr.indexOf(num), 1);
  randomNum += String(num);
}
console.log(randomNum);
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
while (true) {
  let strike = 0;
  let ball = 0;
  let input = prompt(`${cnt}번째 시도 : `);
  if (input == randomNum) {
    console.log(`${cnt}번만에 맞히셨습니다.`);
    console.log("게임을 종료합니다.");
    break;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (randomNum[i] == input[i]) {
        strike += 1;
      } else if (randomNum.includes(input[i])) {
        ball += 1;
      }
    }
    console.log(`${ball}B${strike}S`);
    cnt += 1;
  }
}
