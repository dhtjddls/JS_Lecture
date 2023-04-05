// 실행컨텍스트(스코프, 변수, 객체, 호이스팅)

// 실행 컨텍스트란?
// 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
// 1. 선언된 변수를 위로 끌어올리구요 = 호이스팅(hoisting)
// 2. 외부 환경 정보를 구성하구요.
// 3. this 값을 설정해요.

// 콜 스택(call stack)
// 실행 컨텍스트란 --> 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
// 모아놓는 방식 -> 스택에 쌓아 놓음 -> 콜 스택 -> 코드의 가장 상위 스코프부터 저장되고 가장 하위 스코프부터 실행된다.
// 컨텍스트의 구성(여러가지가 있지만, 사실 우리는 함수만 집중하면 돼요 👍)
// 1. 전역공간
// 2. eval()함수
// 3. 함수(우리가 흔히 실행컨텍스트를 구성하는 방법) '집중!'

// 실행 컨텍스트 객체의 실체(=담기는 정보)
// 1. VariableEnvironment
//     1. 현재 컨텍스트 내의 식별자 정보(=record)를 갖고있어요.
//         1. var a = 3
//         2. 위의 경우, var a를 의미
//     2. 외부 환경 정보(=outer)를 갖고있어요.
//     3. 선언 시점 LexicalEnvironment의 snapshot
// 2. LexicalEnvironment
//     1. VariableEnvironment와 동일하지만, 변경사항을 실시간으로 반영해요.
// 3. ThisBinding
//     1. this 식별자가 바라봐야할 객체

// VariableEnvironment, LexicalEnvironment의 개요
// 1. VE : 스냅샷을 유지해요.
// 2. LE : 스냅샷을 유지하지 않아요. 즉, 실시간으로 변경사항을 계속해서 반영합니다.
// 결국, 실행 컨텍스트를 생성할 때, VE에 정보를 먼저 담은 다음, 이를 그대로 복사해서 LE를 만들고 이후에는 주로 LE를 활용한답니다.
// - 구성 요소(VE, LE 서로 같아요!)
// 1. VE, LE모두 동일하며, ‘environmentRecord’와 ‘outerEnvironmentReference’로 구성
// 2. environmentRecord(=record)
//     1. 현재 컨텍스트와 관련된 코드의 식별자 정보들이 저장돼요.
//     2. 함수에 지정된 매개변수 식별자, 함수자체, var로 선언된 변수 식별자 등
// 3. outerEnvironmentReference(=outer)

// LexicalEnvironment(1) - environmentRocord(=record)와 호이스팅
// 1. 현재 컨텍스트와 관련된 코드의 식별자 정보들이 저장(수집)돼요.
// 2. 수집 대상 정보 : 함수에 지정된 매개변수 식별자, 함수 자체, var로 선언된 변수 식별자 등
// 3. 컨텍스트 내부를 처음부터 끝까지 순서대로 훑어가며 수집
// 💡 순서대로 수집한다고 했지, 코드가 실행된다고 하지는 않았습니다!

// 호이스팅 (상단부로 끌어올리다)
// 매개변수 식별자, 함수, 변수 식별자 등을 수집하기 때문에 수집된 얘들이 실행 전에 상단부로 끌어올려져 미리 선언된다.
// 호이스팅 법칙 1 : 매개변수 및 변수는 선언부를 호이스팅 합니다.
// 호이스팅 법칙 2 : 함수 선언은 전체를 호이스팅합니다.
// !!!함수 선언문은 함수 전체가 호이스팅 | 함수 표현식은 선언부만 호이스팅!!! -> 때문에 표현식을 선호해 보자!
// * 함수 선언문 *
function sum(a, b) {
  // 함수 선언문 sum
  return a + b;
}
// * 함수 표현식 *
var multiply = function (a, b) {
  // 함수 표현식 multiply
  return a + b;
};

// 짧은 정리
// - 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
// - 그 객체 안에는 3가지가 존재한다.
//    ✓ VariableEnvironment
//    ✓ LexicalEnvironment
//    ✓ ThisBindings
// - VE와 LE는 실행컨텍스트 생성 시점에 내용이 완전히 같고, 이후 스냅샷 유지 여부가 다르다.
// - LE는 다음 2가지 정보를 가지고 있다.
//    ✓ record(=environmentRecord) ← 이 record의 수집과정이 hoisting
//    ✓ outer(=outerEnvironmentReference)

// LexicalEnvironment(2) - 스코프, 스코프 체인 -> 범위, outerEnvironmentReference(=outer)

// 지금까지 LE의 구성요소 record와 outer 중 record에 대해서 깊이 알아오고 있었어요. 이번 시간의 주인공은 그 두번째인 outer입니다. outer의 역할을 한 마디로 정의하자면
//  스코프 체인이 가능토록 하는 것(외부 환경의 참조정보)라고 할 수 있어요

// 각각의 실행 컨텍스트는 LE 안에 record와 outer를 가지고 있고, outer 안에는 그 실행 컨텍스트가 선언될 당시의 LE정보가 다 들어있으니 scope chain에 의해 상위 컨텍스트의 record를 읽어올 수 있다.
