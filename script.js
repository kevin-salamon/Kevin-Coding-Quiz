
/* to-do list:
-We will need a high scores, and a way to store it as related to the high score owner (within an object)? We may then be able to always sort using object.toArray and the sort function.
            <!-- {name: var name, score: var score} if we want to set values of object properties, do myObject[myProperty] = x;--> -- this is also used as an example in activity 19
-we need to draft the readMe
*/

let intro = document.getElementById("intro");
let expo = document.getElementById("explanation");
let begin = document.getElementById("begin");
let timeKeep = document.getElementById("timer-bar");
let startButton = document.getElementById("start-button");
let buttonContainer = document.getElementById("button-holder");
let quizContainer = document.getElementById("quiz");
let results = document.getElementById("result");
let formContainer = document.getElementById("form");
let pName = document.getElementById("name");
let submitScore = document.getElementById("submit-score");
let buttonA = document.getElementById("buttonA");
let buttonB = document.getElementById("buttonB");
let buttonC = document.getElementById("buttonC");
let slotOne = document.getElementById("slot1");
let slotTwo = document.getElementById("slot2");
let slotThree = document.getElementById("slot3");
let scoreSection = document.getElementById("finalscore-container");
let firstName = document.getElementById("1st-player");
let firstScore = document.getElementById("1st-score");
let secondName = document.getElementById("2nd-player");
let secondScore = document.getElementById("2nd-score");
let thirdName = document.getElementById("3rd-player");
let thirdScore = document.getElementById("3rd-score");

let timer = 180; // total time to play
let questionCount = 0; // used as an index for the current question - increases when a question is answered
let score = 0 // total number of questions answered correctly
let currentQuestion; //used in functions to access question + answer objects within the specific question count (questionCount)
let output; // used in buttons to contain the button answer
let scoreArray = []; // used for tracking final scores

intro.textContent = "Welcome to the Coding Quiz!";
expo.textContent = "This quiz will test your knowledge of Javascript with a battery of multiple-choice questions. Do your best - you have 3 minutes! You will be scored at the end.";
begin.textContent = "Click the button below to begin the quiz!"
quizContainer.style.display = "none";
formContainer.style.display = "none";
timeKeep.style.display = "none";
scoreSection.style.display = "none";

startButton.addEventListener("click", function() {
    timer = 180;
    questionCount = 0;
    score = 0;
    begin.textContent = " ";
    results.textContent = " ";
    buttonContainer.style.display = "none";
    formContainer.style.display = "none";
    scoreSection.style.display = "none";
    quizContainer.style.display = "block";
    timeKeep.style.display = "block";
    startTimer();
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

submitScore.addEventListener("click", function(event) {
    event.preventDefault();
    if (pName.value == "") {
        return;
    }
    scoreSection.style.display = "block";
    formContainer.style.display = "none";
    playerName = pName.value;
    let object = {
        name: playerName,
        score: timer,
    }
    scoreArray.push(object);
    saveScore();
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
            b: "Document Object Manipulation",
            c: "Descriptor Orientation Model"
        },
        rightAnswer: "a",
    },
    {
        question: "The common variable i, included within a loop, is commonly understood as shorthand for what?",
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
        question: "You require your code to iterate through a large amount of data, for a currently unknown amount of iterations. What structure would you use to achieve this end?",
        answer: {
            a: "An array",
            b: "A while-loop",
            c: "A for-loop"
        },
        rightAnswer: "b",
    },
];

function decideCorrect() { // will decide if the answer is correct and change score respectively, after the button is pressed. It will then increase the questionCount

    currentQuestion = questions[questionCount];

    if (output != currentQuestion.rightAnswer) {
        timer = timer - 10;
        results.textContent = "Incorrect. -10 seconds!";
    } else {
        results.textContent = "Correct!";
        score++;
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
        timer = 0;
        intro.textContent = "Time's up!";
        expo.textContent = `You ran out of time. You got ${score}/10 questions correct.`;
    } else {
        intro.textContent = "Quiz Complete!";
        expo.textContent = `You got ${score}/10 questions correct. Your final score (and seconds remaining) is ${timer}.`; 
    }

    quizContainer.style.display = "none";
    results.textContent = "The quiz has ended - please click the 'BEGIN' button to start over, or submit your high scores below.";
    buttonContainer.style.display = "block";
    formContainer.style.display = "block";
    timeKeep.style.display = "none";
    pName.value = " ";
}

function startTimer() {
    let timerInterval = setInterval(function() {
        timer--;
        timeKeep.textContent = `There are ${timer} seconds remaining.`;
        if (timer <= 0 || questionCount > 9) {
            clearInterval(timerInterval);
            completeQuiz();
        }
    }, 1000);
}

function saveScore() { // sorts the final scores and then writes them to score table
    scoreArray.sort((a, b) => b.score - a.score);
    firstName.textContent = scoreArray[0].name;
    firstScore.textContent = scoreArray[0].score;
    secondName.textContent = scoreArray[1].name;
    secondScore.textContent = scoreArray[1].score;
    thirdName.textContent = scoreArray[2].name;
    thirdScore.textContent = scoreArray[2].score;
}