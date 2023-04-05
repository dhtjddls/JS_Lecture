const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let num_1 = numArr[Math.floor(Math.random() * numArr.length)];
numArr.splice(numArr.indexOf(num_1), 1);

let num_2 = numArr[Math.floor(Math.random() * numArr.length)];
numArr.splice(numArr.indexOf(num_2), 1);

let num_3 = numArr[Math.floor(Math.random() * numArr.length)];
numArr.splice(numArr.indexOf(num_3), 1);

let randomNum = String(num_1) + String(num_2) + String(num_3);

console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
let cnt = 1;
let numBaseball = function () {
  let strike = 0;
  let ball = 0;
  let input;
  let flag = false;
  if (flag) return;
  readline.question(`${cnt}번째 시도 : `, function (line) {
    input = line;
    if (input == randomNum) {
      console.log(`${cnt}번만에 맞히셨습니다.`);
      console.log("게임을 종료합니다.");
      flag = true;
      cnt = 0;
      readline.close();
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
      strike = 0;
      ball = 0;
      numBaseball();
    }
  });
};
numBaseball();
