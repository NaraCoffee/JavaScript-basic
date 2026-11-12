const car = new Object()

car.people='홍길동'
car.brand='기아'
car.model='카니발'

car.drive=function() {
    console.log(`나는 ${this.people}이고, 내가 타는 차는 ${this.brand} ${this.model}이야`);
}

car.drive()
console.log(Object.values(car))
console.log(Object.keys(car))