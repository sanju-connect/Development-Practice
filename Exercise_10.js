/* Create a Business name generator by combining list of adjectives, shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let a = "Crazy";
let b = "Amazing";
let c = "Fire";

let d = "Engine";
let e = "Foods";
let f = "Garments";

let g = "Bros";
let h = "Limited";
let i = "Hub";

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getAdjective() {
  let random = getRandomInt();

  if (random === 0) {
        return a;
    } else if (random === 1) {
        return b;
    } else {
        return c;
    }
}

function getShopName() {
    let random = getRandomInt();

    if (random === 0) {
        return d;
    } else if (random === 1) {
        return e;
    } else {
        return f;
    }
  }

  function getAnotherWord() {
    let random = getRandomInt();

    if (random === 0) {
        return g;
    } else if (random === 1) {
        return h;
    } else {
        return i;
    }
  }

  let str1 = getAdjective();
  let str2 = getShopName();
  let str3 = getAnotherWord();

  console.log(str1 + " " + str2 + " " + str3);

  alert(str1 + " " + str2 + " " + str3);
