$(function(){
	var questionArray = [];
		answerTally = 0;
		$question = $(".question");
		$ansA = $("label[for='ansA']");
		$ansB = $("label[for='ansB']");
		$ansC = $("label[for='ansC']");
		$ansD = $("label[for='ansD']");


// question constructor

	function QuestionTemplate() {
		// this.question = question;
		// this.ansA = ansA;
		// this.ansB = ansB;
		// this.ansC = ansC;
		// this.ansD = ansD;
	}

	// function that changes all Q&A in the question window
	function replaceQuestion(q, a, b, c, d, i) {
		$question.text(q);
		$ansA.text(a);
		$ansB.text(b);
		$ansC.text(c);
		$ansD.text(d);
		$('#pagenum').text(i);
	}

// creating question objects

	var question1 = new QuestionTemplate();
		question1.question = "Why is there something rather than nothing?";
		question1.ansA = "A. ...";
		question1.ansB = "B. this is mine.";
		question1.ansC = "C. because..";
		question1.ansD = "D. what? come again?";
		question1.num = 1;

	var question2 = new QuestionTemplate();
		question2.question = "Is time made up and just something we measure with clocks?";
		question2.ansA = "A. ...";
		question2.ansB = "B. The entropy of any isolated control volume would tend inexorably towards a minimum.";
		question2.ansC = "C. how else would i count my regrets?";
		question2.ansD = "D. I remember cowering in the dark during the '77 blackout.";
		question2.num = 2;

	var question3 = new QuestionTemplate();
		question3.question = "What is your favorite drink?";
		question3.ansA = "A. Pedialyte.";
		question3.ansB = "B. Lillet with a slice of orange.";
		question3.ansC = "C. Have you tasted your tears?";
		question3.ansD = "D. Pedialyte.";
		question3.num = 3;

	var question4 = new QuestionTemplate();
		question4.question = "Who is your favorite dinosaur?";
		question4.ansA = "A. ...";
		question4.ansB = "B. Joy Division.";
		question4.ansC = "C. Run!";
		question4.ansD = "D. I like Ike!";
		question4.num = 4;



// add question objects to questionArray
	
	questionArray.push(question1);
	questionArray.push(question2);
	questionArray.push(question3);
	questionArray.push(question4);

// results

	var baby = "You are a newborn babe. Your eyes wander about aimlessly like a drunk frog. You can see vague shapes now, but you have no context to try to understand any meaning.";
		child = "You are an arrogant child. One who nurses fantasies of subjugating the world in the same manner as whatever chliched hero or icon is fueling your dreams today.";
		adult = "You are a jaded adult. You spend your nights staring at the cieling, thinking about how you let the only person you ever loved slip through your fingers. And you still get choked up when Don Henley\'s \'Boys of Summer\' plays in the supermarket.";
		senior = "You are geriatric. You'd be forgotten if it wasn't for your will.";

	console.log(questionArray);
	console.log(baby);

// new quiz - reset quiz

	$('label').hide();
	$('.question').hide();

// $('input[type="submit"]').click(function() {
// answerTally = 0;
// $('input[type="submit"]').attr('value','Submit');
// $('label').show();
// $('.question').show();
// replaceQuestion(question1.question, question1.ansA, question1.ansB, question1.ansC, question1.ansD, question1.num);
// $('input[type="submit"]').click(function() {
// replaceQuestion(question2.question, question2.ansA, question2.ansB, question2.ansC, question2.ansD, question2.num);
// return false;
// });

// });


// $question.text(question1.question);
// $ansA.text(question1.ansA);
// $ansB.text(question1.ansB);
// $ansC.text(question1.ansC);
// $ansD.text(question1.ansD);
// return false;
	
	$('input[type="submit"]').click(function() {
		$('input[type="submit"]').attr('value','Submit');
		$('label').show();
		$('.question').show();
		for (i=0; i<questionArray.length; i++) {
			var q = questionArray[i].question;
			var a = questionArray[i].ansA;
			var b = questionArray[i].ansB;
			var c = questionArray[i].ansC;
			var d = questionArray[i].ansD;
			var i = i;

			replaceQuestion(q, a, b, c, d, n, i);
		}
	});
	
});