// 1. 10이 NaN인지 확인  → false
// 2. NaN이 NaN인지 확인  → true
// 3. 10.5가 정수인지 확인  → false
console.log(Number.isNaN(10));
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.5));

console.log((123.456).toFixed(2));
console.log((1237.456456456).toPrecision(5));
console.log((1237.456456456).toLocaleString());
