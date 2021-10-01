console.log("Hello world");

// here I will build my question-page

console.log("building a page");

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
return questionPage;
};
// pretty sure this is working as can see correct HTML in console log
buildQuestionPage();