// 1) processUserInput 함수 안에서
//    → 변수 name("홍길동")을 넣어 callback 호출하기
function processUserInput(callback) {
  let name = "홍길동";
  callback(name);
}

// 2) processUserInput에 인사를 출력하는 콜백 함수 넘기기 (문제 코드 그대로)
processUserInput(function (name) {
  console.log(`안녕하세요, ${name}님!`);
});

