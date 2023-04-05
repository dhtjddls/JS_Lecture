// string
let s = "petyPYasdp";
function solution(s) {
  if (typeof s != "string") return "매개변수로 문자열을 입력하세요!";
  s = s.toLowerCase();

  let yCnt = s.length - s.replaceAll("y", "").length;
  let pCnt = s.length - s.replaceAll("p", "").length;
  if (yCnt == pCnt) {
    return true;
  } else {
    return false;
  }
}

// statement

let absolutes = [4, 7, 12];
let signs = [true, false, true];

function solution(absolutes, signs) {
  let cnt = 0;
  for (let i = 0; i < absolutes.length; i++)
    signs[i] ? (cnt += absolutes[i]) : (cnt -= absolutes[i]);
  return cnt;
}

console.log(solution(absolutes, signs));
