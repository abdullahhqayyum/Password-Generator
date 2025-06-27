const alphabets = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
  "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const pw1El    = document.getElementById("pw1");
const pw2El    = document.getElementById("pw2");
const lengthEl = document.getElementById("length");
const extrasEl = document.getElementById("includeExtras");
const genBtn   = document.getElementById("gen-btn");

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function generate() {
  let len = parseInt(lengthEl.value, 10);
  if (isNaN(len) || len < 1) len = 1;
  if (len > 30) len = 30;
  lengthEl.value = len;

  let charSet = alphabets.slice();
  if (extrasEl && extrasEl.checked) {
    charSet = charSet.concat(numbers, symbols);
  }

  let p1 = "", p2 = "";
  for (let i = 0; i < len; i++) {
    p1 += charSet[getRandomIndex(charSet.length)];
    p2 += charSet[getRandomIndex(charSet.length)];
  }

  pw1El.textContent = p1;
  pw2El.textContent = p2;
}

function copyPassword(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  } else {
    const tmp = document.createElement("textarea");
    tmp.value = text;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
  }
}

genBtn.addEventListener("click", generate);
pw1El.addEventListener("click", function() { copyPassword(pw1El.textContent); });
pw2El.addEventListener("click", function() { copyPassword(pw2El.textContent); });
