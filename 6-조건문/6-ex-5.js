// 1) 변수 year에 연도 넣기
const year = 2024

// 2) if: (4로 나누어떨어지고 100으로는 안 나누어떨어짐) 또는 400으로 나누어떨어짐 → '윤년'
//    (% 와 &&, ||, 괄호 사용)
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(`${year}년은 윤년`);
    
}else{
    console.log(`${year}년은 평년`);

}

// 3) else → '평년'