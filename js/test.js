
	var q_fitwardrobe = "Will it fit with your clothes and all the other stuff in your wardrobe?";
	// don't buy it

	var q_fitme = "Does it even fit?!"; // Is different according to the item (bag, shoes, dress)
	// Jeez! don't buy it

	var q_influencertitle = "Do you want this " + " because you saw a blogger/celebrity wear it on Instagram?";
	//if no -> q8
	//if yes -> q_influencerbis
	var q_influencertitlebis = "Would you still buy it if that Influencer wasn't wearing it?";
	// if no -> Don't buy it (thank you for your honesty)
	// if yes -> q_onetimeuse

	var q_onetimeuse = "Will you wear it more than one time? <br><small>(We all know the party dress situation)</small>";
	//no -> q_sale
	//yes -> q_manyuse 

	var q_manyuse = "Oh, really? So will you still wear it next month, next season, next year?"
	    //No -> don't buy it
	    // Yes-> q_sale

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


