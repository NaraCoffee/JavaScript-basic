// 1) 상수 greet에 화살표 함수 넣기 (매개변수 name)
//    → 템플릿 리터럴로 `Hello, ${name}!` 반환
const greet= (name) => `Hello ${name} !`

//    → "Hello, " + name + "!" 반환

// 2) greet("Bob") 호출 결과 출력 → Hello, Bob!
console.log(greet('Bob'));