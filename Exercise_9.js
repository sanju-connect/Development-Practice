let random = Math.random()
alert(`The Random Number is: ${random}`)
let a = prompt("Enter First Number: ")
let c = prompt("Enter Arithamatic Operation : ")
let b = prompt("Enter Second Number: ")

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
}

if(random > 0.1) {
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
  c = obj[c]
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
