const fruites = ["Apple", "Banana", "Orange"]

const[first, second, third] = fruites

console.log(first);
console.log(second);
console.log(third);

const numbers = [1, 2, 3, 4, 5]

const [num0,,num2] = numbers

//console.log(num0)
//console.log(num2)


const colors = ['red', 'green', 'black'];

const [color1, color2, color3 = 'blue'] = colors;

console.log(color1);
console.log(color2);
console.log(color3);
