console.log("Hello world");

// I need an array of questions defined globally
const questionArray = [
    {question: "What acronym is used for 'Application Program Interface'?",
     answer: 'API',
     decoy: ['IBM', "CSS", "ABC"]},
    {question: "A Boolean can return 'true' and ...?",
     answer: "false",
     decoy: ["say what?", "wrong", "whatever"]},
    {question: "A 'string' is an example of an ...",
     answer: "data type",
     decoy: ["toy", "fruit", "API"]},
    {question: "Who is the best Avenger?",
     answer: "Hulk",
     decoy: ["Iron Man", "Thor", "Black Widow"]},
    {question: "How many primitive data types are there?",
     answer: "7",
     decoy: ["5","8","6"]},
    {question: "Which of the following is an example of a 'loop'?",
     answer: "while",
     decoy: ["whenever","meanwhile","justify"]},
    {question: "What is the acronym for Hypertext Markup Language?",
     answer: "HTML",
     decoy: ["CSS", "JS", "HML"]},
    {question: "Which of the following asks if something is strictly equal?",
     answer: "===",
     decoy: ["==", "!==", "="]},
    {question: "What does CSS stand for?",
     answer: "Cascading style sheets",
     decoy: ["Cascading sheet styles", "Computer styling sheets", "Computational sheet styles"]},
    {question: "Which is the index value of the first element in an array?",
     answer: "0",
     decoy: ["1", "first", "foo"]}       
];

const mainScreen = document.getElementById("main-container");


// // Here I will build the starting page

// const buildStarterPage = function() {
//     const starterBtn = document.createElement("a");
//     starterBtn.setAttribute("class", "button");
//     starterBtn.setAttribute("id", "start");
//     starterBtn.textContent = "Start";

//     const instructions = document.createElement("p");
//     instructions.textContent = "You have 75 seconds to answer as many questions correctly as possible. Good Luck!";

//     const title = document.createElement("h1");
//     title.textContent = "Coding Challenge";


//     const starterPage = document.createElement("section");
//     starterPage.setAttribute("class", "starting-page");
//     starterPage.setAttribute("id", "starting-page");

//     starterPage.append(title, instructions, starterBtn);

//     mainScreen.appendChild(starterPage);
// }

// // render starter page on load
// window.addEventListener('load', buildStarterPage);

// i need to make the start button commence the quiz
const startClick = document.getElementById("start");
const starterPage = document.querySelector("#starting-page");

const begin = function(){
//   needs to remove starting page
starterPage.remove(); 
// needs to render questions
buildQuestionPage();

console.log("clicked!");
// needs to start timer
};

startClick.addEventListener('click', begin);



// here I will build my question-page

const buildHeader = function(){
    const headerTwo = document.createElement("h2");
    headerTwo.textContent="Questions goes here";
    return headerTwo;
};

const getQuestions = function(){

    const responseBtn= document.createElement("a");
    responseBtn.setAttribute("class","response-button");
    responseBtn.textContent="some questions from array";

    const liItem= document.createElement("li");

    liItem.appendChild(responseBtn);

    return liItem;
};

const buildListContainer = function(){
    const listContainer = document.createElement("ul");
    listContainer.setAttribute("class", "questions");

    return listContainer;
};


const buildQuestionPage = function(){
    
    const header = buildHeader();
    const listContainer = buildListContainer();
    const question1 = getQuestions();
    const question2 = getQuestions();
    const question3 = getQuestions();
    const question4 = getQuestions();


    listContainer.append(question1, question2, question3, question4);

    const questionPage = document.createElement("section");
    questionPage.setAttribute("class", "question-page");

    questionPage.append(header, listContainer);

    console.log(questionPage);

    mainScreen.appendChild(questionPage);
};
// pretty sure this is working as can see correct HTML in console log


