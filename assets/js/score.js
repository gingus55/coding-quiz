const scoreList = document.getElementById("scoreList");
const scores = JSON.parse(localStorage.getItem("highScores")) || [];
const results = document.createElement("ul");

for (let i = 0; i < scores.length; i++) {
  const list = document.createElement("li");
  list.setAttribute("class", "lists");
  list.textContent = scores[i].scorer + " scored " + scores[i].score;

  results.appendChild(list);
}

const final = document.getElementById("scoreList");
final.appendChild(results);

const resetBtn = document.querySelector("#reset");

const toStart = function () {
  location.href = "./index.html";
};

const reset = function () {
  localStorage.clear();
  results.remove();
};