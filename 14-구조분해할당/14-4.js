const student = {
    name: "Tom", 
    grades: { 
        math: 90, 
        science: 85 
    }
}

const {name , grades: {math, science}} = student

console.log(name);
console.log(math);
console.log(science);