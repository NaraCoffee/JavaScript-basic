// 1) 함수 sum 선언 (rest 매개변수 ...numbers)
//    → numbers = [1, 2, 3, 4, 5] (배열로 받음)
//    → reduce로 모두 더한 값 반환 (초깃값 0)
function sum(...numbers){

    //  numbers = [1, 2, 3, 4, 5] (배열로 받음)

    return numbers.reduce((acc,cur)=> acc+cur , 0)

}


console.log(sum(1,2,3,4,5))
// 2) sum(1, 2, 3, 4, 5) 출력 → 15

function multiply(num, ...args) {
    return args.map(arg => arg*num)
}

console.log(multiply(3,1,2,3,4,5))

const [first, second, ...rest] = [1,2,3,4,5]

console.log(first)
console.log(second)
console.log(rest)