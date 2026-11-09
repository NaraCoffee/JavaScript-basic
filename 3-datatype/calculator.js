const calculator = {
    add: function(x,y) {
        return x+y
    },
    subtract: function(x,y) {
        return x-y
    },
    multiply: function(x,y) {
        return x*y
    },
    division: function(x,y) {
        return x/y
    },
    mod:function(x,y) {
        return x%y
    }
}

console.log(calculator.add(3,4))
console.log(calculator.subtract(10,5))
console.log(calculator.multiply(7,4))
console.log(calculator.division(7,4))
console.log(calculator.mod(7,4))