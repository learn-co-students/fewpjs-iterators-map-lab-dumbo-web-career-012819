const testVar = {
}
const tutorials = [
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

function testFunc() {
  return "hi"
}

function split(sentence) {
  return sentence.split(" ")
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}

function titleCased(arr) {
  let splitArr = arr.map(sentence => split(sentence));

  let capArr = splitArr.map(arr => {
    return arr.map(word => capitalize(word));
  })

  return capArr.map(sentence => sentence.join(" "));
}
let titleCase = titleCased(tutorials)
