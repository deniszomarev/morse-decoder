const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let exprMorse = [];
  for (let i = 0; i < Math.ceil(expr.length / 8); i++) {
    exprMorse[i] = expr.slice(i * 8, i * 8 + 8);
  }
  console.log(exprMorse);
  for (let i = 0; i < exprMorse.length; i++) {
    for (let j = 0; j < Math.ceil(exprMorse[i].length / 2); j++) {
      exprMorse[i][j] = exprMorse[i].slice(j * 2, j * 2 + 2);
    }
  }
  for (let i = 0; i < exprMorse.length; i++) {
    exprMorse[i] == "10"
      ? (exprMorse[i] = ".")
      : exprMorse[i] == "11"
      ? (exprMorse[i] = "-")
      : exprMorse[i] == "**"
      ? (exprMorse[i] = " ")
      : (exprMorse[i] = "");
  }
  console.log(exprMorse);
  exprMorse = exprMorse.join(" ");
  console.log(exprMorse);
}

module.exports = {
  decode,
};
