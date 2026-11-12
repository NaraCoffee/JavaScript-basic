// 1) 함수 localScopeExample 선언
//    → 함수 안에서 변수 localVar 선언 ("I am local")
//    → localVar 출력

// 2) localScopeExample() 호출 → I am local
// 3) 함수 밖에서 localVar 출력해 보기 → ReferenceError: localVar is not defined

function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // I am local
}

localScopeExample();
console.log(localVar); // ReferenceError: localVar is not defined

