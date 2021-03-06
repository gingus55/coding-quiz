const questionArray = [
  {
    question: "What acronym is used for 'Application Program Interface'?",
    answer: "API",
    decoy: ["IBM", "CSS", "ABC", "API"],
  },
  {
    question: "A Boolean can return 'true' and ...?",
    answer: "false",
    decoy: ["say what?", "wrong", "false", "whatever"],
  },
  {
    question: "A 'string' is an example of an ...",
    answer: "data type",
    decoy: ["toy", "data type", "fruit", "API"],
  },
  {
    question: "Who is the best Avenger?",
    answer: "Hulk",
    decoy: ["Iron Man", "Hulk", "Thor", "Black Widow"],
  },
  {
    question: "How many primitive data types are there?",
    answer: "7",
    decoy: ["5", "8", "6", "7"],
  },
  {
    question: "Which of the following is an example of a 'loop'?",
    answer: "while",
    decoy: ["whenever", "meanwhile", "justify", "while"],
  },
  {
    question: "What is the acronym for Hypertext Markup Language?",
    answer: "HTML",
    decoy: ["CSS", "JS", "HTML", "HML"],
  },
  {
    question: "Which of the following asks if something is strictly equal?",
    answer: "===",
    decoy: ["==", "===", "!==", "="],
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading style sheets",
    decoy: [
      "Cascading sheet styles",
      "Cascading style sheets",
      "Computer styling sheets",
      "Computational sheet styles",
    ],
  },
  {
    question: "Which is the index value of the first element in an array?",
    answer: "0",
    decoy: ["1", "first", "foo", "0"],
  },
];

const mainScreen = document.getElementById("main-container");
const startClick = document.getElementById("start");
const starterPage = document.querySelector("#starting-page");
const questionPage = document.querySelector("#question-page");
const answerSelection = document.querySelector("#main-container");

const gameOver = function(){
  document.getElementById("main-container").innerHTML = "";

  const gameOverTitle = document.createElement("h2");
  gameOverTitle.textContent = "GAME OVER";

  const warning = document.createElement("h3");
  warning.textContent = "You let the timer hit 0 ????";

  const reTry = function (event) {
    location.href = "./index.html";
  };

  const gameOverScreen = document.createElement("section");
  gameOverScreen.setAttribute("id", "game-over");

  const tryAgainBtn = document.createElement("button");
  tryAgainBtn.setAttribute("id", "submit");
  tryAgainBtn.textContent = "Try Again";
  tryAgainBtn.addEventListener("click", reTry);

  gameOverScreen.append(gameOverTitle, warning, tryAgainBtn);

  mainScreen.appendChild(gameOverScreen);
}

let timeRemaining = 75;

const startTimer = function () {
  const countdownElement = document.querySelector("#countdown");
  
  const timerTick = function () {
    timeRemaining -= 1;
    countdownElement.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      gameOver();
    }
  };

  // set interval
  const timer = setInterval(timerTick, 1000);
};

const begin = function () {
  starterPage.remove();
  buildQuestionPage();
  startTimer();
};

startClick.addEventListener("click", begin);

const enterHighscore = function (finalScore) {
  document.getElementById("main-container").innerHTML = "";

  const yourScore = document.createElement("h2");
  yourScore.textContent = "You scored: " + finalScore;

  const enterInitials = document.createElement("h3");
  enterInitials.textContent = "Enter your name:";

  const getInitials = document.createElement("input");
  getInitials.setAttribute("type", "text");
  getInitials.setAttribute("id", "initials");
  getInitials.setAttribute("placeholder", "Enter Name Here:");

  const resultSection = document.createElement("section");
  resultSection.setAttribute("id", "result");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "SUBMIT";

  resultSection.append(yourScore, enterInitials, getInitials, submitBtn);

  mainScreen.appendChild(resultSection);

  const saveScore = function (event) {
    const getName = document.querySelector("#initials").value;

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const recentScore = {
      score: finalScore,
      scorer: getName,
    };

    highScores.push(recentScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "./highscores.html";
  };

  const resultSubmit = document.querySelector("#submit");
  resultSubmit.addEventListener("click", saveScore);
};

let questionNumber = 0;

const buildQuestionPage = function () {
  if (questionNumber < questionArray.length) {
    const questionPage = document.createElement("section");
    questionPage.setAttribute("class", "question-page");
    questionPage.setAttribute("id", "question-page");

    const questionHeader = document.createElement("h2");
    questionHeader.textContent = questionArray[questionNumber].question;

    const answerList = document.createElement("ul");
    answerList.setAttribute("class", "questions");
    answerList.setAttribute("id", "questions");

    answerList.setAttribute(
      "data-answer",
      questionArray[questionNumber].answer
    );

    for (let i = 0; i < questionArray[questionNumber].decoy.length; i++) {
      const answerBtn = document.createElement("a");
      answerBtn.setAttribute("class", "response-button");
      answerBtn.setAttribute("id", questionArray[questionNumber].answer);
      answerBtn.setAttribute(
        "data-log",
        questionArray[questionNumber].decoy[i]
      );

      answerBtn.textContent = questionArray[questionNumber].decoy[i];

      const listItem = document.createElement("li");
      listItem.appendChild(answerBtn);

      answerList.appendChild(listItem);
    }

    questionPage.append(questionHeader, answerList);

    mainScreen.appendChild(questionPage);

    questionNumber += 1;
  } else {
    const finalScore = timeRemaining;
    const stop = document.querySelector("#countdown");
    timeRemaining = 100;
    stop.remove();
    enterHighscore(finalScore);
    return finalScore;
  }
};

const handleAnswer = function (event) {
  const target = event.target;
  if (target.getAttribute("class") === "response-button") {
    const correctAnswer =
      target.getAttribute("id") === target.getAttribute("data-log");

    if (correctAnswer) {
      document.getElementById("main-container").innerHTML = "";

      buildQuestionPage();
    } else {
      timeRemaining -= 5;
    }
  }
};

answerSelection.addEventListener("click", handleAnswer);
