
	var q_sale = "Is it on sale?";
	// if yes go to q10
	// no go to q8bis

	var q_saletitlebis = "Can't you wait for sale ?";
	// if yes Don't buy it
	// no go to q_secondhand


	var q_secondhand = "Is it second hand?";
	// if yes go to q10
	// if no q_secondhandbis

	var q_secondhandbis = "Can you find it on Poshmark? <br><small>Or Twice, Snobswap, TheRealReal, Vinted, Vestiaires Collectives (you name it)</small>";
	// if yes go check there and pass the test again if you still have doubts
	// if no endMessage()


	var q_pricetitle = "Is it expensive?";
	// no go to q13

	var q_pricerangetitle = "How expensive?";

	var q_affordit = "Can you afford it? ";

	var q_reallyaffordit = "Really? <br><small>you can afford it?</small>";

	var q_rewardyourself = "Do you feel like you deserve to reward or gift yourself lately? <br><small>(Like you got a diploma, a promotion, done something good or your birthday is coming soon)</small>";
	// if yes
	var a14_buyit = "Well then, why do you have doubt about buying the " + "? Treat yo self!";
	// if no
	var a14bis_buyit = "Life is too short, buy the " ;


