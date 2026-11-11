let fruits = ["사과", "바나나", "오렌지", "포도"];

// 방법 1: for...of로 fruits의 값을 하나씩 꺼내 출력
for (let fruit of fruits) {
  console.log(fruit);
}

// 방법 2: for + 인덱스 (i는 0부터 fruits.length - 1까지)
//    → `1. 사과` 처럼 번호와 함께 출력
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
