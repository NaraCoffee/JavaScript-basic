// num1의 구구단을 출력하세요.
// 1) 변수 num1에 3 넣기 (3단)
let num1 = 3;

// 2) for문: i를 1부터 9까지 반복
//    → num1 * i 계산
//    → 템플릿 리터럴로 `3 x 1 = 3` 형태 출력
for (let i = 1; i <= 9; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
}
  