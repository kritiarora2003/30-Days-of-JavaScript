// exercise level 2
// 8
console.log(countries)
if(countries.includes('Ethiopia'))
console.log('ETHIOPIA')
else
countries.push('Ethiopia')

// // 9
// console.log(webTechs)
// if(webTechs.includes(/sass/gi))
// console.log('sass is a css preprocess')
// else
// webTechs.push('sass')
// console.log(webTechs)

console.log(countries.length)
countries = countries.slice(0,10)
console.log(countries)

let size = countries.length
countries.length % 2 === 0
? console.log(countries[size/2], countries[(size-2)/2])
: console.log(countries[(size - 1) / 2])

countries.push('india')
if(countries.length % 2 === 0){
    const first = countries.splice(0, (size)/2)
    console.log(first)
    console.log(countries)
}
else{
    const first = countries.splice(0, (size+3)/2)
    console.log(first)
    console.log(countries)
}