let n = prompt("Enter a Value for Which You Want Factorial (Only Number)");

let fact = 1;

for (let index = n; index >=1; index--) {
  fact *= index;
}

alert("The Factorial of " + n + " is: " + fact);
