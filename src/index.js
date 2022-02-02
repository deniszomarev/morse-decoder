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
  let exprMorse = [],
    temp = [];

  for (let i = 0; i < Math.ceil(expr.length / 10); i++) {
    exprMorse[i] = expr.slice(i * 10, i * 10 + 10);
  }

  temp = exprMorse
    .map((el) =>
      el
        .split(/(\d{2})/)
        .filter((el) => el != "")
        .map((el) => {
          return el == "10" ? "." : el == "11" ? "-" : el == "**" ? " " : "";
        })
    )
    .map((el) => el.join(""))
    .map((el) => MORSE_TABLE[el] || " ");

  return temp.join("");
}

module.exports = {
  decode,
};
