// 1. 2025-12-25 날짜를 myDate에 저장
// 2. 읽기 쉬운 날짜 문자열로 출력 (toDateString)  → Thu Dec 25 2025
const myDate = new Date('2026-12-25')
console.log(myDate.toDateString())

// 1. 오늘 날짜를 futureDate에 저장
// 2. 일(getDate)에 7을 더해서 다시 설정 (setDate)

// 3. 일주일 뒤 날짜 출력
let futureDate =new Date()
futureDate.setDate(futureDate.getDate()+7)

console.log(futureDate)