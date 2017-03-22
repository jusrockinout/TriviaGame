

/*  Array of Questions  */

$(document).ready(function(){

	var allQuestions = [{
		question: "What is the most widely consummed drug world-wide?",
		choices: ["Caffeine", "Alcohol", "Marijuana", "Methamphetamine"],
		correctAnswer: 1
	}, {
		question: "Which fermented beverage traditionally used potatoes as a base?",
		choices: ["Moonshine", "Vodka", "Margarita", "Bourbon"],
		correctAnswer: 3
	}, {
		question: "Cocaine, chemically speaking, most closely resembles which of the following?",
		choices: ["Ritalin", "Adderall", "Mixed Amphetamine Salts", "LSD"],
		correctAnswer: 1
	}, {
		question: "Serotonin is a neurostransmitter linked to depression, anxiety, social status, as well as resouce availability. Where are most Serotonin receptors found in the body?",
		choices: ["Brain", "Skin", "Liver", "Digestive Tract"],
		correctAnswer: 4
	}, {
		question: "The followers of Hassan-i-Sabbah, the hashashins, were to believed to partake of this substance before assinations.", 
		choices: ["Hookah", "Wine", "Hashish", "Cocoa Leaves"],
		correctAnswer: 3
	}];

	var currentQuestion = 0;
	var correctAnswers = 0;
	var quizOver = false;
	var answered = 0; 
	var seconds = 5;
	var timer;
	var timerDiv = $(".timer");

	function updateTimer(){
		seconds--;
		timerDiv.text(seconds);
		if (seconds === 0) {
			answerChecker();
		}


	}

	function answerChecker()
	{
		var $this = $(this);

		clearInterval(timer);

		if (allQuestions[answered].choices.indexOf($this.text()) + 1 === allQuestions[answered].correctAnswer)
		{
			correctAnswers++;
		}
		answered++;
		$(".ansButt").remove();
		
		if(answered < 5)
		{
			setUpQuestion(answered);
		}
		else
		{
			($("#resetButton")).removeClass('hidden');
			$("#resetButton").click(function(){
				answered = 0;
				setUpQuestion(answered);
				$("#resetButton").addClass('hidden');
			});

			;

		}
	}

	function setUpQuestion(num)
	{
		$("#question").text(allQuestions[num].question);
		for (var i = 0; i < 4; i++) 
		{
			allQuestions[i]
			var thisButton = $("<button>");
			thisButton.text(allQuestions[num].choices[i]).addClass("ansButt btn btn-info");
			thisButton.appendTo($(".choiceList"));
			thisButton.click(answerChecker);
		}
		seconds = 5;
		timerDiv.text(seconds);
		timer = setInterval(updateTimer, 1000);

	}


	$("#startButtonDiv").click(function(event) {
		$(this).addClass('hidden');
		$(".quizTimer")
		.removeClass("hidden");
		setUpQuestion(answered);
	});




});
