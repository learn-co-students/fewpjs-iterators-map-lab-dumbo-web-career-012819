const testVar = {}

function testFunc() {
  return "hi"
}
//WTF WHY IS PASTING THIS THE ANSWER???
const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Contutorialuctor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
]

const titleCased = tutorials.map(function(tutorial) {
  tutorial = tutorial.split(" ");
  for(let i = 0; i < tutorial.length; i++) {
    tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
  }
  return tutorial.join(" ")
});