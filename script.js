let intro = document.getElementById("intro");
let expo = document.getElementById("explanation");
let begin = document.getElementById("begin");
let startButton = document.getElementById("start-button")
let quizContainer = document.getElementById("quiz");
let results = document.getElementById("result");
let buttonA = document.getElementById("buttonA");
let buttonB = document.getElementById("buttonB");
let buttonC = document.getElementById("buttonC");
let slotOne = document.getElementById("slot1");
let slotTwo = document.getElementById("slot2");
let slotThree = document.getElementById("slot3");
let timer = 10; // This is also score
let questionCount = 0;
let currentQuestion; //used in functions to access question + answer objects within the specific question count (questionCount)
let output; // used in buttons to contain the button answer

intro.textContent = "Welcome to the Coding Quiz!";
expo.textContent = "This quiz will test your knowledge of Javascript with a battery of multiple-choice questions. Do your best - you have 5 minutes! You will be scored at the end.";
begin.textContent = "Click the button below to begin the quiz!"
slotOne.textContent = " ";
slotTwo.textContent = " ";
slotThree.textContent = " ";

/* some things to build:
-Points will equal seconds. We need to create a timer that will tick down from (probably) 300 seconds to equal the score, after the quiz has begun.
-Activity 5/6 etc can give some idea about how to totally change the page to the next set of questions after a button is clicked.
    - lets solve that for one button and then implement it into a function for reusability. The function should always change to the 'next' set of questions, probably through a for-loop
        -it can change the .textContent of individual divs to equal the questions text. If we do this, we should have divs separate from button divs to represent questions
            -this can also be used to update the text of the response zone.
        -if looks like we can do this by looping through 'questions' variable, as it is already an array of questions.
*/

startButton.addEventListener("click", function() {
    begin.textContent = " ";
    setText();
});

buttonA.addEventListener("click", function() {
    output = "a";
    decideCorrect();
    setText();
});

buttonB.addEventListener("click", function() {
    output = "b";
    decideCorrect();
    setText();
});

buttonC.addEventListener("click", function() {
    output = "c";
    decideCorrect();
    setText();
});


let questions = [
    {
        question: "What is the name of the information within an object?",
        answer: {
            a: "Property/Value pairs.",
            b: "Property/Index pairs.",
            c: "Object indices."
        },
        rightAnswer: "a",
    },
    {
        question: "What is the function used to split a string into an array of characters?",
        answer: {
            a: ".slice",
            b: ".split",
            c: ".splice"
        },
        rightAnswer: "b",
    },
    {
        question: "What kind of data type is an array?",
        answer: {
            a: "Array",
            b: "Object",
            c: "Boolean"
        },
        rightAnswer: "b",
    },
    {
        question: "The term DOM is an acronym for what phrase?",
        answer: {
            a: "Document Object Model",
            b: "Document Object Manipulation.",
            c: "Descriptor Orientation Model"
        },
        rightAnswer: "a",
    },
    {
        question: "The common variable i, included within a loop, is shorthand for what?",
        answer: {
            a: "Increment",
            b: "It doesn't stand for anything - it is merely a common agreement.",
            c: "Iteration/Iterator"
        },
        rightAnswer: "c",
    },
    {
        question: "The function parseInt(x) function will perform what task?",
        answer: {
            a: "This isn't a pre-existing function.",
            b: "It has the capibility to perform complex arithmetic on given argument x.",
            c: "It will convert argument x from another data type into a number, if possible."
        },
        rightAnswer: "c",
    },
    {
        question: "The technology used for the interaction of HTML, CSS, and Javascript, is called what?",
        answer: {
            a: "Web Browser",
            b: "API",
            c: "JQuery"
        },
        rightAnswer: "a",
    },
    {
        question: "What characters would be used to intiate a multiline comment in CSS and JS?",
        answer: {
            a: "<!--",
            b: "//",
            c: "/*"
        },
        rightAnswer: "c",
    },
    {
        question: "If a friend stated that the <body> tag was a child of HTML, he/she would be referring to which area of knowledge in web development?",
        answer: {
            a: "Your friend would be discussing the DOM.",
            b: "Your friend would be disucssing a Javascript framework/library.",
            c: "Your friend isn't discussing web development at all."
        },
        rightAnswer: "a",
    },
    {
        question: "You require your code to iterate through a large amount of data, for a currently unknown amount of time. What structure would you use to achieve this end?",
        answer: {
            a: "An array",
            b: "A while-loop",
            c: "A for-loop"
        },
        rightAnswer: "b",
    },
]; // checked, this works

function decideCorrect() { // will decide if the answer is correct and change score respectively, after the button is pressed.

    currentQuestion = questions[questionCount];

    if (output != currentQuestion.rightAnswer) {
        timer = timer - 10;
        results.textContent = "Incorrect.";
    } else {
        results.textContent = "Correct!";
    }
    questionCount++;
}

function setText() { // will change the text of slot 1,2,3 etc to the correct text for the upcoming question, after the button is pressed, or end the quiz, depending on the questionCount
    if (questionCount <= 9) {
        continueQuiz();
    } else {
        completeQuiz();
    }   
}

function continueQuiz() {
    currentQuestion = questions[questionCount];
    intro.textContent = `Question ${questionCount + 1}`;
    expo.textContent = currentQuestion.question;
    slotOne.textContent = currentQuestion.answer.a;
    slotTwo.textContent = currentQuestion.answer.b;
    slotThree.textContent = currentQuestion.answer.c;
}

function completeQuiz() {
    if (timer <= 0) {
        intro.textContent = "Time's up!";
    } else {
        intro.textContent = "Quiz Complete!";
    }
    if (timer <= 0) {
        expo.textContent = `You ran out of time and/or pushed your points down to zero. Sorry!`;
    } else {
        expo.textContent = `Your final score is ${timer}.`;       
    }
    slotOne.textContent = " ";
    slotTwo.textContent = " ";
    slotThree.textContent = " ";

}