const colors = ["Red", "Green", "Blue"]

console.log(colors[0]);
console.log(colors[1]);
console.log(colors.length);


colors.push('yellow')
console.log(colors)

colors.pop()
console.log(colors)

colors.unshift("purple")
console.log(colors);
colors.shift()
console.log(colors);



for(let i=0;i<colors.length;i++) {
    console.log(colors[i],i)
}

colors.forEach(function(color, i){
    console.log(color, i)
})
colors.forEach(color => console.log(color))

const upperColors=colors.map(function(color) {
    return color.toUpperCase()
})

console.log(upperColors)

const moreColors = ["Yellow", "Pink"]

const allColors = colors.concat(moreColors)

console.log(allColors)

const slicedColors=colors.slice(1,3)
console.log(slicedColors)

colors.splice(1,1,"Black")
console.log(colors)

const foundColor = colors.find(function(color){
    return color =='Blue'
})
console.log(foundColor)

const longColors = colors.filter(function(color) {
    return color.length>3
})

console.log(longColors)