console.log("Hello from the functions.js file")

const icecream = document.getElementById("product0")
console.log("icecream", icecream)
let pricetag = document.createElement('h2')
pricetag.innerHTML = '2.5'
console.log("pricetag",pricetag)
icecream.appendChild(pricetag)