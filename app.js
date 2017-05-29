var QUESTIONS = [
	{question: "What is Semantic HTML defined as?", 
	answers: ["Bad Code", "Structured and Accessible Code", "Outdated HTML4 Practices", "HTML with inline CSS"], 
	correct: "Structured and Accessible Code"
	used: false},
	{question: "What is JavaScript?", 
	answers: ["The standard web programming language", "A form of Java", "A CSS framework", "The styling language for HTML"], 
	correct: "The standard web programming language",
	used: false}
]

var correctAnswers = 0;
var incorrectAnswers = 0;


function generateQuestion() {
	// See if question has been used
	// Pull & return a question from the store if not
}

function checkAnswer() {
	// Check if answer is correct
	// Increase correct or incorrect accordingly
	// Return true or false depending
}

function handleAnswered() {
	// Triggers when answer is clicked
	// Call checkAnswer() to see if correct
	// Return CSS class/animation depending if correct or not
	// Transition to next, call renderQuestion()
}

function renderQuestion() {
	// Call generateQuestion() to grab a question
	// Input question into template
}