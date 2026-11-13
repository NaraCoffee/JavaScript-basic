// 1) 상수 arr1 → [1, 2, 3], arr2 → [4, 5, 6] 만들기

// 2) spread로 두 배열을 펼쳐 combinedArr에 합치기
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const combineArr =[...arr1,...arr2]

console.log(combineArr);

// 3) combinedArr 출력 → [1, 2, 3, 4, 5, 6]
