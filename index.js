const testVar = {}

function testFunc() {
  return "hi"
}

let tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//======== This one works in the DOM so Im stickin' with it!

function titleCased(tutorials) {
  return tutorials.map(tutorial =>
    tutorial.charAt(0).toUpperCase() + tutorial.slice(1))
}