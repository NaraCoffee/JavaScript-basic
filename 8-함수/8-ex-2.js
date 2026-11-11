// 1) 함수 checkEvenOdd 선언 (매개변수 num)
function checkEvenOdd(num) {
    if(num%2==0) {
        return '짝수입니다.'
    }else {
        return '홀수입니다.'
    }
}
//    → if: num을 2로 나눈 나머지가 0이면 "짝수입니다." 반환
//    → else: "홀수입니다." 반환

console.log(checkEvenOdd(9));
