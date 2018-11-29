var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "What element tag is used to bold the text?",
    choices : [ "&lt;p&gt;",
        "&lt;em&gt;",
        "&lt;b&gt;",
        "&lt;h1&gt;"],
    correctAnswer : 3
},{
    question : "What symbol is used for class in HTML?",
    choices : [".",
        "#",
        "?",
        "/"],
    correctAnswer : 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    currentQuestion++;
    if(currentQuestion==questions.length)
        displayScore();
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    var index;
    var answer = document.getElementById('choice-list')
    var ques = document.getElementById('question');
    ques.innerText = questions[currentQuestion].question;

    answer.innerHTML = "";

    for(index = 0; index < questions[currentQuestion].choices.length;index++)
    {
       answer.innerHTML += "<li>" +  "<input type='radio' name='choice1' value='questions[currentQuestion].choices[index]'>" + questions[currentQuestion].choices[index]  + "</li>"
    }

    var corrAns = questions[currentQuestion].correctAnswer;

}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}