var QUESTIONS = [
	{question: "What is Semantic HTML defined as?", 
	answers: ["Bad Code", "Structured and Accessible Code", "Outdated HTML4 Practices", "HTML with inline CSS"], 
	correct: "Structured and Accessible Code",
	used: false},
	{question: "What is JavaScript?", 
	answers: ["The standard web programming language", "A form of Java", "A CSS framework", "The styling language for HTML"], 
	correct: "The standard web programming language",
	used: false}
]

var NUMBER_SELECTOR = '.js-number';
var TITLE_SELECTOR = '.js-question';
var ANSWERS_ELEMENT_IDENTIFIER = '.js-answers';
var CHOICE_BUTTON_IDENTIFIER = '.js-choice';
var SINGLE_CHOICE_IDENTIFIER = '.choice-';

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
			renderQuestion();
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
	// Increase question number
	currentQuestion++;
}

function handleQuiz() {
	renderQuestion();
	handleAnswered();
}

$(handleQuiz);