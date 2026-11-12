// 1) if (true) { } 블록 안에서 let으로 blockVar 선언 ("I am inside block")
//    → 블록 안에서 blockVar 출력 → I am inside block

// 2) 블록 밖에서 blockVar 출력해 보기 → ReferenceError: blockVar is not defined
if (true) {
    let blockVar = "I am inside block";
    console.log(blockVar); // I am inside block
}

console.log(blockVar); // ReferenceError: blockVar is not defined

