let submit = document.querySelector("button");
let submitButton = document.getElementById("submit-button");
let letterBox = document.querySelector(".letter-container");
let input = document.querySelector("input");
let incorrectAnswer = document.querySelector(".wrong-letter-container");
let wrongBox = document.querySelector("#h1-title");
let guessTitle = document.querySelector("#guess-h1");
let guessCounter = document.querySelector(".guess-counter");
let counter = 10;

let randomWords = [
  "revaluation",
  "errands",
  "mysid",
  "magmata",
  "occasion",
  "silk",
  "gaited",
  "pigmy",
  "affricated",
  "quite",
  "ceilidhs",
  "salerooms",
  "unsteadiest",
  "euphoria",
  "isoglosses",
  "punto",
  "clutched",
  "reviewers",
  "stewarding",
  "melamine",
  "whipray",
  "assuring",
  "segmenting",
  "auction",
  "desecrating",
  "phonotype",
  "exclamation",
  "lechering",
  "topstones",
  "denazified",
  "metricate",
  "dewlaps",
  "mongolism",
  "embroilment",
  "taxless",
  "negativists",
  "volt",
  "daunders",
  "gorsiest",
  "shapeups",
  "delphiniums",
  "gudgeoning",
  "baryons",
  "emblematize",
  "maumetry",
  "hybridist",
  "monocrystal",
  "quilting",
  "underwriting",
  "mannikins",
  "discarnate",
  "minishing",
  "clangs",
  "palliating",
  "partyers",
  "nonowner",
  "perfumed",
  "determined",
  "frugivore",
  "yelling",
  "passport",
  "hemostases",
  "unitedly",
  "pollex",
  "fallfish",
  "tideways",
  "anteriorly",
  "pressurized",
  "concessive",
  "humanly",
  "irised",
  "amentia",
  "gelating",
  "amyloplast",
  "sykes",
  "muzzled",
  "hector",
  "sloppiness",
  "aquatintist",
  "centimeters",
  "retiarii",
  "cutpurses",
  "tyrants",
  "broadened",
  "crosshead",
  "tillage",
  "schmoozes",
  "chaebol",
  "speciate",
  "chuddars",
  "betonies",
  "simpleness",
  "pressgang",
  "sileni",
  "dinkies",
];

var randomItem = randomWords[Math.floor(Math.random() * randomWords.length)];

wordInPlay = randomItem.split("");

let wordLength = wordInPlay.length;

function blankDivs() {
  for (let i = 0; i < wordLength; i++) {
    let letterBlank = document.createElement("div");
    letterBlank.classList.add("blank-style");
    console.dir(letterBlank);
    letterBox.appendChild(letterBlank);
  }
  blankLetters = document.querySelectorAll(".blank-style");
  for (let y = 0; y < wordLength; y++) {
    blankLetters[y].innerText = wordInPlay[y];
  }
}

let singleLetter;

let wrongLetters = new Set();

let value;
let item;
submit.addEventListener("click", submitLetter);
let correctLetter = false;

function submitLetter(e) {
  e.preventDefault();
  if (input.value.length == 0) {
    return;
  }
  singleLetter = input.value[0];
  correctLetter = false;
  console.log(singleLetter);

  blankLetters.forEach((letter, i) => {
    if (singleLetter == letter.innerText) {
      letter.style.fontSize = "40px";
      letter.classList.add("correct");
      letter.style.textTransform = "uppercase";
      input.value = "";
      correctLetter = true;
      wordBankValidator(blankLetters, document.querySelectorAll(".correct"));
    } else if (i == blankLetters.length - 1 && correctLetter == false) {
      wrongBox.style.opacity = "1";
      guessTitle.style.opacity = "1";
      counter -= 1;
      guessCounter.innerText = counter;

      wrongLetters.add(singleLetter);
      loser();
      value = "";

      for (item of wrongLetters.values()) {
        value += item + " ";
      }
      incorrectAnswer.innerText = value;
      input.value = "";
    }
  });
}
//
console.log(wordInPlay);

modal2 = document.getElementById("id01");
removeBlanks = document.querySelector(".letter-container");

function showTheLosingWord() {
  losingWord = wordInPlay.join("");
  document.getElementById("myText").innerHTML = losingWord;
}

const loser = () => {
  if (counter === 0) {
    losingWord = wordInPlay.join("");
    showTheLosingWord();
    modal2.style.display = "block";
    modal2.style.backgroundColor = "#474e5d";
    removeBlanks.style.display = "none";
  }
};

const wordBankValidator = (word, answered) => {
  if (word.length === answered.length) {
    input.remove();
    submitButton.remove();
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", "<canvas id=c></canvas>");
    fireworksComponent();
  }
};

let reset = document.getElementById("reset-button");
reset.addEventListener("click", resetGame);
function resetGame() {
  blankDivs();
}
blankDivs();

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode === 13
  ) {
    return true;
  } else {
    return false;
  }
}
