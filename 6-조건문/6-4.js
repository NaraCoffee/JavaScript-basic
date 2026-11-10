// 1) 변수 age에 25, hasID에 true 넣기
const age =25
const hasID=true

// 2) 바깥 if: age가 18 이상인가?
if(age >= 18) {
    if (hasID) {
        console.log("You are allowed to enter.")
    }else{
        console.log("You need an ID to enter.")
    }
} else {
    console.log("You are not allowed to enter.")
}
//    2-1) 안쪽 if: hasID가 true면 → "You are allowed to enter." 출력
//    2-2) 안쪽 else → "You need an ID to enter." 출력
// 3) 바깥 else → "You are not allowed to enter." 출력
