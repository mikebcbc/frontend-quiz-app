var QUESTIONS = [
	{question: "What is Semantic HTML defined as?", 
	answers: ["Bad Code", "Structured and Accessible Code", "Outdated HTML4 Practices", "HTML with inline CSS"], 
	correct: "Structured and Accessible Code",
	used: false},
	{question: "What is JavaScript?", 
	answers: ["The standard web programming language", "A form of Java", "A CSS framework", "The styling language for HTML"], 
	correct: "The standard web programming language",
	used: false},
	{question: "CSS is used for what?", 
	answers: ["Creating the webpage structure", "Programming interactivity into the page", "Styling elements", "Debugging code"], 
	correct: "Styling elements",
	used: false},
	{question: "Before coding, it is best to:", 
	answers: ["Create user stories and wireframe", "Nothing, it's best to begin coding immediatly.", "Consult someone with greater creativity", "Look for signs in the stars"], 
	correct: "Create user stories and wireframe",
	used: false},
	{question: "What type of loops are there in JavaScript?", 
	answers: ["for and while loops", "loop and foreach loops", "while and foreach loops", "forevery and each loops"], 
	correct: "for and while loops",
	used: false}
]

var NUMBER_SELECTOR = '.js-number';
var TITLE_SELECTOR = '.js-question';
var ANSWERS_ELEMENT_IDENTIFIER = '.js-answers';
var CHOICE_BUTTON_IDENTIFIER = '.js-choice';
var SINGLE_CHOICE_IDENTIFIER = '.choice-';
var CORRECT_NUMBER_IDENTIFIER = '.js-correct';
var INCORRECT_NUMBER_IDENTIFIER = '.js-incorrect';
var REMAINING_NUMBER_IDENTIFIER = '.js-remaining';

var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 1;
var currentCorrect;


function generateQuestion(questions) {
	// See if question has been used
	var question;
	questions.forEach(function(q) {
		if (q.used === false) {
			question = q;
		}
	})
	// Pull & return a question from the store if not
	question.used = true;
	return question;
}

function checkAnswer(question) {
	// Check if answer is correct
		if (question.innerText == currentCorrect) {
			return true;
		} else {
			return false;
		}
}

function handleStats() {
	$(CORRECT_NUMBER_IDENTIFIER).text(correctAnswers);
	$(INCORRECT_NUMBER_IDENTIFIER).text(incorrectAnswers);
	$(REMAINING_NUMBER_IDENTIFIER).text(5 - currentQuestion);
}

function transitionQuestion(choice, answer) {
	if (answer === true) {
		$(choice).addClass('correct');
		correctAnswers++;
	} else {
		$(this).addClass('incorrect');
		incorrectAnswers++;
	}
}

function handleAnswered() {
	// Triggers when answer is clicked
	$(ANSWERS_ELEMENT_IDENTIFIER).on('click', CHOICE_BUTTON_IDENTIFIER, function(e) {
		// Call checkAnswer() to see if correct
		var correct = checkAnswer(this);
		if (correct === true) {
			transitionQuestion(this, true);
		} else {
			transitionQuestion(this, false);
		}
		// Strip classes after animation
		setTimeout(function() {
			$('.incorrect, .correct').removeClass('incorrect correct');
			// Transition to next, call renderQuestion()
			if (currentQuestion != 5) {
				currentQuestion++;
				renderQuestion();
			}
			handleStats();
		}, 2000);
	})
}

function renderQuestion() {
	// Call generateQuestion() to grab a question
	var question = generateQuestion(QUESTIONS);
	// Input question into template
	$(TITLE_SELECTOR).html(question.question);
	$(NUMBER_SELECTOR).html(currentQuestion);
	currentCorrect = question.correct;
	// Input answers into template
	for (i=0; i<=4; i++) {
		$(SINGLE_CHOICE_IDENTIFIER + i).html(question.answers[i]);
	}
}

function handleQuiz() {
	renderQuestion();
	handleAnswered();
	handleStats();
}

$(handleQuiz);