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
      question: 'When will we go to mars?',
      answers: [
        'Eventually',
        'Right now',
        'Yesterday',
        'Where is mars?'
      ],
      correctAnswer: 'Eventually'
    },
    {
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
      question: 'What color are my cats?',
      answers: [
        'Brown and orange',
        'White with grey splotches',
        'Black',
        'Cream'
      ],
      correctAnswer: 'White with grey splotches'
    },
    {
      question: 'Which method of brewing coffee is the obvious, best way of brewing coffee?',
      answers: [
        'Machine drip coffee',
        'Instant powdered mixture',
        'French press',
        'Pourover'
      ],
      correctAnswer: 'Pourover'
    },
    {
      question: 'What is the distance from LA to NYC?',
      answers: [
        '2,794 miles',
        '1200 clicks',
        '200 yalms',
        'A single Parsec'
      ],
      correctAnswer: '2,794 miles'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function renderHtml() {
  let html = '';
  console.log(`renderQuestion 'ran'`);
  if(store.quizStarted === false) {
    html = generateMainPage();
  } else {
    html= generateQuestion();
  }
  $('main').html(html);
}

function generateQuestion() {
  console.log(`generateQuestion 'ran'`)
}

function handleStartQuiz() {
  let question = store.questions[store.questionNumber];
  return ''
  console.log(`handleStartQuiz 'ran'`);
}

function generateMainPage() {
  console.log(`generateMainPage 'ran'`);
}

function main() {
  $(renderHtml);
  $(handleStartQuiz);
  $(generateQuestion);
  $(generateMainPage);

}

$(main);