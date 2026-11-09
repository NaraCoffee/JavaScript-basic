let person = {
    name: 'joonsol',
    age: 30,
    greet: function() {
        console.log('내 이름은' + this.name+' 입니다.')
    }
}
person.city = 'seoul'
person.age = 31
console.log(person.name);
console.log(typeof person);
console.log(person);
person.greet()