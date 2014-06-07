$(function(){
	var questionArray = [];

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
		question1.ansA = "...";
		question1.ansB = "this is mine.";
		question1.ansC = "because..";
		question1.ansD = "what? come again?";

	var question2 = new QuestionTemplate();
		question1.question = "Is time made up and just something we measure with clocks?";
		question1.ansA = "...";
		question1.ansB = "The entropy of any isolated control volume would tend inexorably towards a minimum.";
		question1.ansC = "how else would i count my regrets?";
		question1.ansD = "I remember cowering in the dark during the '77 blackout.";

// add question objects to questionArray
	
	questionArray.push(question1);
	questionArray.push(question2);


	console.log(questionArray);
});