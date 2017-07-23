$(document).ready(function(){


	var flag_no;
	var next_flag_no;
	var cond = true; // cond for different choices
	var correctChoice; // if the choice is correct
	var clicked; // checks if a button was clicked before
	var choice_no;
	var random_choice1;
	var random_choice2;
	var random_choice3;
	var flags_selected = new Array();
	var cond2 = true; // cond for checking if flag_no was already selected
	var score = 0; // to keep track of score
	var time = 15;
	var interval;

	// when starting:
	/*$("#home").hide();
	$("#home").fadeIn(3000);

	$("#panel").hide();
	$("#panel").fadeIn(3000);*/

	$("body").hide();
	$("body").fadeIn(3000);

	function intervalFun() {

		interval = setInterval(displayTime, 1000);

	}

	function displayTime() {

		$("#timer").html("Time: " + time);
		time--;

		if(time === -1) {
			clearInterval(interval);
			$("#result").hide();
			$("#result").html("<p class='result_text'>Time's up!</p><div id='restart_button' class='button'>Restart</div>");
			$("#result").fadeIn(3000);
			$(".choice").addClass("disabled");
			clicked = true;
		}

	}

	function game() {

		$("#score").html("Score: " + score);

		if(flags_selected.length < json.flags.length) {

			loop1: while(cond2) {

				flag_no = Math.floor(Math.random() * json.flags.length);

				for(i=0; i<flags_selected.length; i++){

					if(flag_no === flags_selected[i]) {

						continue loop1;

					}

				}

				cond2 = false;

			}	

			flags_selected.push(flag_no);

			$("#flag_img").attr("src", json.flags[flag_no].img_url);

			$("#flag_img").hide();

			$("#flag_img").fadeIn(3000);

			choice_no = Math.floor(Math.random() * 4);

			switch(choice_no) {

				case 0: 

					$("#choice0").html(json.flags[flag_no].answer);

					while(cond) {

						random_choice1 = Math.floor(Math.random() * json.flags.length);
						random_choice2 = Math.floor(Math.random() * json.flags.length);
						random_choice3 = Math.floor(Math.random() * json.flags.length);

						if(random_choice1 === flag_no || random_choice2 === flag_no || random_choice3 === flag_no) {

							cond = true;

						} else {

							if(random_choice1 !== random_choice2 && random_choice2 !== random_choice3 && random_choice1 !== random_choice3) {

								$("#choice1").html(json.flags[random_choice1].answer);
								$("#choice2").html(json.flags[random_choice2].answer);
								$("#choice3").html(json.flags[random_choice3].answer);

								cond = false;

							} else {

								cond = true;

							}

						}

					}

					break;

				case 1: 

					$("#choice1").html(json.flags[flag_no].answer);

					while(cond) {

						random_choice1 = Math.floor(Math.random() * json.flags.length);
						random_choice2 = Math.floor(Math.random() * json.flags.length);
						random_choice3 = Math.floor(Math.random() * json.flags.length);

						if(random_choice1 === flag_no || random_choice2 === flag_no || random_choice3 === flag_no) {

							cond = true;

						} else {

							if(random_choice1 !== random_choice2 && random_choice2 !== random_choice3 && random_choice1 !== random_choice3) {

								$("#choice0").html(json.flags[random_choice1].answer);
								$("#choice2").html(json.flags[random_choice2].answer);
								$("#choice3").html(json.flags[random_choice3].answer);

								cond = false;

							} else {

								cond = true;

							}


						}

					}

					break;

				case 2: 

					$("#choice2").html(json.flags[flag_no].answer);

					
					while(cond) {

						random_choice1 = Math.floor(Math.random() * json.flags.length);
						random_choice2 = Math.floor(Math.random() * json.flags.length);
						random_choice3 = Math.floor(Math.random() * json.flags.length);


						if(random_choice1 === flag_no || random_choice2 === flag_no || random_choice3 === flag_no) {

							cond = true;

						} else {

							if(random_choice1 !== random_choice2 && random_choice2 !== random_choice3 && random_choice1 !== random_choice3) {

								$("#choice0").html(json.flags[random_choice1].answer);
								$("#choice1").html(json.flags[random_choice2].answer);
								$("#choice3").html(json.flags[random_choice3].answer);

								cond = false;

							} else {

								cond = true;

							}

						}

					}

					break;

				case 3: 
				
					$("#choice3").html(json.flags[flag_no].answer);

					while(cond) {

						random_choice1 = Math.floor(Math.random() * json.flags.length);
						random_choice2 = Math.floor(Math.random() * json.flags.length);
						random_choice3 = Math.floor(Math.random() * json.flags.length);

						if(random_choice1 === flag_no || random_choice2 === flag_no || random_choice3 === flag_no) {

							cond = true;

						} else {

							if(random_choice1 !== random_choice2 && random_choice2 !== random_choice3 && random_choice1 !== random_choice3) {

								$("#choice0").html(json.flags[random_choice1].answer);
								$("#choice2").html(json.flags[random_choice2].answer);
								$("#choice1").html(json.flags[random_choice3].answer);

								cond = false;

							} else {

								cond = true;

							}

						}

					}

					break;

			}

			$("#choices").hide();
			$("#choices").fadeIn(3000); // anime
			intervalFun(); //interval function

		} else {

			console.log("Finished");
			/*$("#result").html("<p class='result_text'>Congratulations, you won!</p>");
			$(".choice").addClass("disabled");
			clicked = true;*/

		}

	} // end of function definition

	game();
	time = 15;

	$("#result").on("click","div#continue_button",function(){

		$(".choice").removeClass("disabled");
		$(".choice").removeClass("wrong");
		$(".choice").removeClass("correct");
		$("#result").html(" ");
		clicked = false;
		cond = true;
		cond2 = true;
		$("#timer").hide();
		$("#timer").fadeIn(500);
		$("#timer").html("Time: 15"); // because of the delay
		game();
		time = 15;

	}); 

	$("#result").on("click","div#restart_button", function(){

		$(".choice").removeClass("disabled");
		$(".choice").removeClass("wrong");
		$(".choice").removeClass("correct");
		$("#result").html(" ");
		clicked = false;
		cond = true;
		cond2 = true;
		flags_selected = [];
		score = 0;
		$("#timer").hide();
		$("#timer").fadeIn(500);
		$("#timer").html("Time: 15"); // because of the delay
		game();
		time = 15;

	});

	$(".choice").click(function(){

		if(!clicked) {

			if($(this).html() === json.flags[flag_no].answer) {

				correctChoice = true;
				score += 5;
				$("#score").hide();
				$("#score").html("Score: " + score);
				$("#score").fadeIn(1500);

				if(json.flags.length === flags_selected.length) {

					$("#result").hide();
					$("#result").html("<p class='result_text'>Congratulations, you won!</p>")
					$("#result").fadeIn(1000);

				} else {

					$("#result").hide();
					$("#result").html("<p class='result_text'>You are correct.</p><div id='continue_button' class='button'>Continue</div>");
					$("#result").fadeIn(1000);
				}
		

			} else {

				correctChoice = false;
				$("#result").hide();
				$("#result").html("<p class='result_text'>You are wrong.</p><div id='restart_button' class='button'>Restart</div>");
				$("#result").fadeIn(1000);
			}

			$(".choice").addClass("disabled");

			if(correctChoice) {
				$(this).addClass("correct");
			} else {
				$(this).addClass("wrong");
			}

		}


		clicked = true;
		clearInterval(interval);

	});

});