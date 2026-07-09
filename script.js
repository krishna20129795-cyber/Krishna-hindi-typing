

const words = [
  "नमस्ते",
  "भारत",
  "कंप्यूटर",
  "मोबाइल",
  "स्कूल",
  "विद्यार्थी",
  "हिंदी",
  "टाइपिंग",
  "परीक्षा",
  "सफलता",
  "किताब",
  "शिक्षक",
  "परिवार",
  "दोस्त",
  "इंटरनेट"
];

let currentWord = "";
let score = 0;

function start() {
  score = 0;
  nextWord();
  document.getElementById("score").innerText = score;
}

function nextWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word").innerText = currentWord;
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
}

function check() {
  const input = document.getElementById("input").value.trim();

  if (input === currentWord) {
    score++;
    alert("✅ सही!");
  } else {
    alert("❌ गलत!\nसही शब्द: " + currentWord);
  }

  document.getElementById("score").innerText = score;
  nextWord();
