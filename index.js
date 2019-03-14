
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

//
// titleCased();

// const titleCased = tutorials.map(function(tutorial){
//   let splitTutorial = tutorial.split(" ");
//   for (var i = 0; i < splitTutorial.length; i++) {
// 	splitTutorial[i] = splitTutorial[i].charAt(0).toUpperCase() + splitTutorial[i].slice(1);
// 	}
//   return splitTutorial.join(" ");
// });

const titleCased = tutorials.map(function(tutorial){
  let i = 0;
  let splitTutorial = tutorial.split(" ");
  splitTutorial.forEach(function(word){
    splitTutorial[i] = word[0].toUpperCase() + word.slice(word.length - (word.length - 1));
    i++
  })
  return splitTutorial.join(" ");
});
