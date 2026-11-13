const users =  [
    { name: "John", age: 30 }, 
    { name: "Jane", age: 25 }
]

const [{name:firstUserName}, {name:secondUserName}] = users


console.log(firstUserName)
console.log(secondUserName)