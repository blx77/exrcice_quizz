const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

const question = "Quelle est la capitale de la Belgique ?";
const options = ["Bruxelles", "Paris", "Amsterdam"];
const correct = "Bruxelles";

questionEl.textContent = question;

options.forEach((text) => {
  const btn = document.createElement("button");
  btn.textContent = text;

  btn.onclick = () => {
    if (text === correct) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  };

  answersEl.appendChild(btn);
});
