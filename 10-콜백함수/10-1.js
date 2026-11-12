// 함수 greet 선언 (매개변수 name, callback)
//    → "Hello, " + name 출력
//    → 전달받은 callback 실행
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function afterGreeting() {
    console.log('Nice to meet you');
}

greet('Alice', afterGreeting);

