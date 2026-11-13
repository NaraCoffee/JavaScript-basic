
// 1) 함수 sum 선언 (매개변수 a, b, c, d — d의 기본값은 4)
//    → a + b + c + d 반환

// 2) 상수 numbers 만들기 → [1, 2, 3]
function sum(a, b, c, d = 10) {

    return a + b + c + d

}


const numbers = [1, 2, 3,20]

console.log(sum(...numbers));

// 3) sum(...numbers)로 배열을 펼쳐서 넘기고 출력 → 10