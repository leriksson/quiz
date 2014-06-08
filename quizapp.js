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

	// console.log(questionArray);
	// console.log(baby);

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

	var index = 0;
	
	// function replaceQuestion(){
	// 	var args = [].slice.call(arguments);
	// 	var divs = [].slice.call(document.getElementsByTagName('div'));
	// 	console.log( Object.prototype.toString.call(args));
	// 	divs.forEach(function(e){e.parentElement.removeChild(e);});
	// 	args.forEach(function(e){
	// 		var div = document.createElement('div');
	// 		var label = document.createElement('label');
	// 		label.textContent = e;
	// 		div.appendChild(label);
	// 	document.body.appendChild(div);
	// 	});
	// }


		// function that changes all Q&A in the question window
	function replaceQuestion(q, a, b, c, d, i) {
		$question.text(q);
		$ansA.text(a);
		$ansB.text(b);
		$ansC.text(c);
		$ansD.text(d);
		$('#pagenum').text(i);
	}

	// function pageUp() {
	// 	var q = questionArray[index].question;
	// 	var a = questionArray[index].ansA;
	// 	var b = questionArray[index].ansB;
	// 	var c = questionArray[index].ansC;
	// 	var d = questionArray[index].ansD;
	// 	var page = index + 1;
	// 	replaceQuestion(q, a, b, c, d, page);
	// 	console.log(index);
	// 	index++;
	// }

	// if ($('input[value="New Quiz"]').length) {
	// 	$('input[type="submit"]').click(function() {
	// 		$('input[type="submit"]').attr('value','Submit');
	// 		$('label').show();
	// 		$('.question').show();
	// 		if(index<questionArray.length){
	// 			pageUp();
	// 			// var q = questionArray[index].question;
	// 			// var a = questionArray[index].ansA;
	// 			// var b = questionArray[index].ansB;
	// 			// var c = questionArray[index].ansC;
	// 			// var d = questionArray[index].ansD;
	// 			// var page = index + 1;
	// 			// replaceQuestion(q, a, b, c, d, page);
	// 			// console.log(index);
	// 			// index++;
	// 		}
	// 	});
	// } else {

	// }

	$('input[type="submit"]').click(function() {
		$('input[type="submit"]').attr('value','Submit');
		$('label').show();
		$('.question').show();
		if(index<questionArray.length){
			var q = questionArray[index].question;
			var a = questionArray[index].ansA;
			var b = questionArray[index].ansB;
			var c = questionArray[index].ansC;
			var d = questionArray[index].ansD;
			var page = index + 1;
			replaceQuestion(q, a, b, c, d, page);
			if (index > 0) {
				var formval = $('#form').val();
				console.log(formval);
			}
			index++;
		}
		return false;
	});
	
});