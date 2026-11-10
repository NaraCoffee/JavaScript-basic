// 1) 변수 day에 3 넣기
const day = 3

// 2) switch (day)
switch (day) {
    case 1:
        console.log("Monday")   //    case 1 → "Monday" 출력 후 break
        break
    case 2:
        console.log("Tuesday")  //    case 2 → "Tuesday"
        break
    case 3:
        console.log("Wednesday")    //    case 3 → "Wednesday"
        break
    case 4:
        console.log("Thursday") //    case 4 → "Thursday"
        break
    case 5:
        console.log("Friday")   //    case 5 → "Friday"
        break
    default:
        console.log("Invalid day")  //    default → "Invalid day" (유효하지 않은 요일)
}
