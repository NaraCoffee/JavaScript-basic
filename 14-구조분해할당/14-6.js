let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);


function useCounter() {
    return [0,()=>console.log('증가')]
}

const [count, increase] = useCounter()

console.log(count)
increase()

const users = [
    {name: 'Kim', age: 20},
    {name: 'Lee', age: 30}
]

for(const {name, age} of users) {
    console.log(`${name}, ${age}`)
}