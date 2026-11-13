const person = {
    name : "Alice",
    age : 25,
    city : "Seoul"
}
const {name, age, city} = person

console.log(name);
console.log(city);


const user = {
    username : "john_doe", password : "12345"
}

const {username:userID, password : userPass} = user

console.log(userID)
console.log(userPass)

const settings = {theme: "dark"}

const {theme,fontSize = 20} = settings

console.log(fontSize)