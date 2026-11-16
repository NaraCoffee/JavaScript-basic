// 1. 변수 str에 "Hello, JavaScript!" 저장
// 2. 문자열 길이  → 18
// 3. 모두 대문자로  → "HELLO, JAVASCRIPT!"
// 4. 모두 소문자로  → "hello, javascript!"
// 5. "Java"가 들어 있는지  → true
// 6. "Hello"로 시작하는지  → true
// 7. "!"로 끝나는지  → true
const str ="Hello, Javascript!"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

console.log(str.includes('Java'));
console.log(str.startsWith('Hello'));
console.log(str.endsWith('!'));


// 1. 7번부터 17번 앞까지 자르기 (substring)  → "JavaScript"
// 2. 뒤에서 11글자 자르기 (slice)  → "JavaScript!"
// 3. 'JavaScript'를 'World'로 바꾸기  → "Hello, World!" (대소문자 구분)
// 4. "," 기준으로 나누기  → ["Hello", " JavaScript!"]
// 5. "  hi  "의 양쪽 공백 제거  → "hi"
// 6. "5"를 2자리로 맞추고 앞을 "0"으로 채우기  → "05"
console.log(str.substring(7,17));
console.log(str.slice(-11));
console.log(str.replace('Javascript','World'));
console.log(str.split(','));
console.log(" hi ".trim());
console.log("5".padStart(2,"0"));
