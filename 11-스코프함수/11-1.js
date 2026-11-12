// 1) 함수 밖에서 변수 globalVar 선언 ("I am global")
let globalVar = "I am global";
// 2) 함수 showGlobal 선언
//    → globalVar 출력

function showGlobal() {
    console.log(globalVar); // I am global
}
// 3) showGlobal() 호출 → I am global
showGlobal();

// 4) 함수 밖에서도 globalVar 출력 → I am global

console.log(globalVar); // I am global

