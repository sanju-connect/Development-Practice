let array = [1, 93, 5, 6, 88];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

array.forEach((value, index, arr) => {
  console.log(value, index, arr[index]);
});


let object = {
  a: 1,
  b: 2,
  c: 3
}

for (const key in object) {
  if (!Object.hasOwn(object, key)) continue;

  const element = object[key];
  console.log(element);
}

for (const element of array) {
  console.log(element)
}


let newArr = array.map((e)=>{
  return e**2;
})


const n = [1, 8, 7, 11];

let sum = (a, b)=>{
  return a+b;
}

console.log(n.reduce(sum));

Array.from("Sanju");
