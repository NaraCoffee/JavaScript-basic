// 1) calculate 함수 안에서
//    → a + b를 변수 result에 넣기
//    → result를 넣어 callback 호출하기
function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

// 2) calculate(5, 3, 콜백 함수) 호출 (문제 코드 그대로)
calculate(5, 3, function (result) {
  console.log("연산 결과:", result);
});

