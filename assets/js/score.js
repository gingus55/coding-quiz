const scoreList = document.getElementById("scoreList");
const scores = JSON.parse(localStorage.getItem("highScores")) || [];
const results = document.createElement("ul");

console.log("Hello world");
console.log(scores);

for (let i = 0; i < scores.length; i++) {
  const list = document.createElement("li");
  list.setAttribute("class", "lists");
  list.textContent = scores[i].scorer + " scored " + scores[i].score;

  results.appendChild(list);
}

const final = document.getElementById("scoreList");
final.appendChild(results);
