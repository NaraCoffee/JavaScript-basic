
// 1) 객체 리터럴로 상수 car 만들기
//    → brand "Toyota", model "Camry", year 2022, color "red"
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "red"
};

// 2) car.brand, car.year 출력
console.log(car.brand);
console.log(car.year);

// (도전) drive 메서드를 추가해 네 속성을 한 줄로 출력해 보기
car.drive = function () {
  console.log(`${this.year}년식 ${this.color} ${this.brand} ${this.model}`);
};

car.drive();


