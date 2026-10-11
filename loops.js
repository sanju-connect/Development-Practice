let a = 1;

for(let i = 0; i < 100; i++) {
  console.log(a + i);
}

let obj = {
  name: "Sanju",
  role: "Programmer",
  company: "CodeWithSanju AI"
}

for (const key in obj) {
  const element = object[key];
  console.log(key, element)
}

let i = 5;
while(i < 6) {
  console.log(i)
  i++;
}

do {

} while (condition);


let array = [1, 93, 5, 6, 88];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

array.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
