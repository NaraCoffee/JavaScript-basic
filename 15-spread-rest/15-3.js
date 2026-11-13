// 1) 상수 person 만들기 → name: 'John', age: 25

// 2) 상수 updatePerson 만들기
//    → ...person으로 복사한 뒤 age는 30으로 덮어쓰고, city: 'seoul' 추가
const person ={name: 'John', age: 25}



const updatePerson = {
    ...person,
    age:30,
    city:'seoul'
}

console.log(updatePerson);
console.log(person);


// 3) updatePerson, person 출력해서 비교 → 원본 person은 그대로
