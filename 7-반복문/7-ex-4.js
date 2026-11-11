// 1) 변수 num에 5, star에 빈 문자열 '' 넣기
let num = 5;
let star = '';

// 2) for문: i를 1부터 num까지 반복
//    → star에 '*' 하나 이어 붙이고 star 출력
for (let i = 1; i <= num; i++) {
  star += '*';
  console.log(star);
}
