/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */
'use strict';


/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      questionNumber: 1,
      question: 'Which city has the highest density of cats?',
      answers: [
        'Tokyo',
        'Istanbul',
        'New York City',
        'Paris'
      ],
      correctAnswer: 'Istanbul'
    },
    {
      questionNumber: 2,
      question: 'Which body of water is Easter island located in?',
      answers: [
        'Adriatic Sea',
        'The Narrow Sea',
        'The Pacific Ocean',
        'The Arctic ocean'
      ],
      correctAnswer: 'The Pacific Ocean'
    },
    { 
      questionNumber: 3,
      question: 'Which planet has zero land mass?',
      answers: [
        'Venus',
        'Mercury',
        'Saturn',
        'Neptune'
      ],
      correctAnswer: 'Saturn'
    },
    {
      questionNumber: 4,
      question: 'Which method of brewing coffee is considered immersion?',
      answers: [
        'Chemex',
        'AeroPress',
        'French press',
        'Machine drip'
      ],
      correctAnswer: 'French press'
    },
    {
      questionNumber: 5,
      question: 'What is the distance from LA to New York City?',
      answers: [
        '2,794 miles',
        '1200 klicks',
        '200 yalms',
        'A single Parsec'
      ],
      correctAnswer: '2,794 miles'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  incorrect:0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateQuestionPage() {


  let question = store.questions[store.questionNumber];

  let answers = question.answers.map((answer, idx) =>{
    if (idx ===0) {
      return `<input type="radio" id="answer${idx}" name="answer" value='${answer}' required>
    <label for='answer${idx}'>${answer}</label><br>`;
    }
    return `<input type="radio" id="answer${idx}" name="answer" value='${answer}'>
    <label for='answer${idx}'>${answer}</label><br>`;
  });
  return `<div class='mainPage'>
  <div class='status'>Question ${store.questionNumber + 1} of 5</div>
  <div class='score'>Score ${store.score}</div>
  <form id='question'>
    <h2>${question.question}</h2>
    ${answers.join("")}
    <button class='submit'>Submit Answer</button>
    </form>
  </div>`;
}

function generateMainPage() {
  console.log(`generateMainPage 'ran'`);
  return `<div class='mainPage'>
  <h2>A Quiz.</h2>
  <button id='startQuiz' type="button">Begin</button>
  </div>
  `;
}

function generateCorrectPage() {
  console.log(`generateCorrectPage 'ran'`);
  return `
  <div class='correctPage'>
  <div class='status'>Question ${store.questionNumber + 1} of 5</div>
  <div class='score'>Score ${store.score}</div>
  <h2>Nicely done!</h2>
  <button class='button' id='nextQuestion' type="button">Next question</button>
  </div>
  `;
  

}
function generateIncorrectPage() {
  console.log(`generateIncorrectPage'ran'`);
  return `
  <div class='incorrectPage'>
  <div class='status'>Question ${store.questionNumber + 1} of 5</div>
  <div class='score'>Score ${store.score}</div>
  <h2>Not quite.</h2>
  <p>The correct answer was ${store.questions[store.questionNumber].correctAnswer}.</p>
  <button id='nextQuestion' type="button">Next question</button>
  </div>
  `;
}

function generateEndOfGamePage() {
  return `
  <div class='finalPage'>
  <h2>Quiz time is over!</h2>
  <p>Your final score is ${store.score}!</p>
  <p>You answered ${store.incorrect} questions incorrectly.</p>
  <button id='startOver' type="button">Try again?</button>
  </div>
  `;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  let html = '';
  if (store.quizStarted === false) {
    if(store.questionNumber === store.questions.length) {
      html = generateEndOfGamePage();
    } else {
      html = generateMainPage();
    }
  } else if (store.questionNumber === store.questions.length){
    html = generateEndOfGamePage();
  } else {
    html= generateQuestionPage();
  }
  $('main').html(html);
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz() {
  $('main').on('click', '#startQuiz', function() {
    store.quizStarted = true;
    render();
    console.log(`handleStartQuiz 'ran'`);
  });
}

function handleAnswerSubmit() {
  $('main').on('submit', '#question', function(event){
    event.preventDefault();
    let chosenAnswer = $("input[name='answer']:checked").val();
    let correctAnswer = store.questions[store.questionNumber].correctAnswer;
    if (chosenAnswer === correctAnswer) {
      store.score++;
      $('main').html(generateCorrectPage());
      
    } else {
      store.incorrect++;
      $('main').html(generateIncorrectPage());
    }
  });
}

function handleResetSubmit() {
  console.log(`handleResetSubmit 'ran'`);
  $('main').on('click', '#startOver', function(){
    store.quizStarted = false;
    store.score =0;
    store.questionNumber=0;
    render();
    console.log(`handleStartQuiz 'ran'`);
  });
}

function handleNextQuestion() {
  $('main').on('click', '#nextQuestion', function(){
    store.questionNumber++;
    render();
  });
}

function main() {
  render();
  handleStartQuiz();
  handleAnswerSubmit();
  generateQuestionPage();
  generateMainPage();
  generateCorrectPage();
  generateIncorrectPage();
  generateEndOfGamePage();
  handleResetSubmit();
  handleNextQuestion();
}

$(main);