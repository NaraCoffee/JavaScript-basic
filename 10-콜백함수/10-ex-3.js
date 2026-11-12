// 1) delayedMessage 함수 안에서
//    → setTimeout(실행할 함수, 밀리초) 사용 : 2000ms = 2초
//    → 2초 뒤에 callback('완료!') 호출하기
function delayedMessage(callback) {
  setTimeout(function () {
    callback('완료!');
  }, 2000);
}

// 2) delayedMessage에 message를 출력하는 콜백 함수 넘기기 (문제 코드 그대로)
delayedMessage(function (message) {
  console.log(message);
});

