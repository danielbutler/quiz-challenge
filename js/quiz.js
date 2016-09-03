var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correctList = [];
var wrongList = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function printList( list ) {
  var listHTML = '<ol>';
  for( var q1 = 0; q1 < list.length; q1 += 1 ) {
    listHTML += '<li>' + list[q1] + '</li>';
  }
  listHTML += '</ol>';
//html += listHTML;
//I forgot the RETURN code!
  return listHTML
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = prompt(question);
  answer = parseInt(answer);
  if (answer === questions[i][1]) {
    correctList.push(question);
    correctAnswers += 1;
  } else {
    wrongList.push(question);
  }
}

html = "<h1>You got " + correctAnswers + " questions right.</h1>";
if ( correctAnswers > 0 ) {
  html += "<h2>These are the correct answers</h2>";
  html += printList(correctList);
} 
if ( correctAnswers < questions.length ) {
  html += "<h2>These are the wrong answers</h2>";
  html += printList(wrongList);
}
print(html);