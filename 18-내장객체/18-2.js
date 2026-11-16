// 1. 객체 obj = { name: "Alice", age: 25 } 만들기
// 2. JSON 문자열로 바꿔 jsonStr에 저장 (JSON.stringify)
// 3. jsonStr 출력  → '{"name":"Alice","age":25}'
const obj = { name: "Alice", age: 25 }

const jsonStr = JSON.stringify(obj)

console.log(jsonStr);

// 1. jsonStr을 다시 객체로 바꿔 jsonObj에 저장 (JSON.parse)
// 2. jsonObj 출력  → { name: 'Alice', age: 25 }
const jsonObj = JSON.parse(jsonStr)

console.log(jsonObj);
// 3. obj를 들여쓰기 2칸으로 보기 좋게 문자열로 출력 (stringify의 3번째 인자)
