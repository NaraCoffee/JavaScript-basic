// 1) 함수 outer 선언
//    → 변수 outerVar 선언 ("I am outer")
//    → outer 안에 함수 inner 선언: outerVar 출력
//    → inner() 호출

// 2) outer() 호출 → I am outer
function outer() {
    let outerVar = "I am outer";

    function inner() {
        console.log(outerVar); // I am outer
    }

    inner();
}

outer();

