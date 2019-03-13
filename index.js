const testVar = {}

function testFunc() {
  return "hi"
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




const capitalizeAll = (sentence) => {
  const arr = sentence.split(" ");
  const newArr = arr.map( element => element[0].toUpperCase() + element.slice(1));
  return newArr.join(" ");
}


const titleCased = (tutorials) => {
  const newArr = [...tutorials];
  return newArr.map( element => {
    return capitalizeAll(element)
  });
}
