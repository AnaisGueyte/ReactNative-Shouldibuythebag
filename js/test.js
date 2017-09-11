var a1_likeit = "Really? Why do you even take the test then!";

	var q_wantit = "Do you really want it?";
	// same answer as the first question

	var q_onquality = "Is it good quality? <br><small>(I mean, will it last after two washes, 2 miles, two years?)</small>";
	//no -> dont buy it
	//yes ->q_needit();

	var q_needit = "Do you need it?";
	var a3_needit = "I appreciate your honesty. Honesty made you save cash for something better.";

	var q_impulseshopping = "Is it an impulse shopping? <br><small>(Or do you just need a hug?)</small>";
	//no -> q_onlineshopping
	//yes -> dont buy it (and go get a hug)

	var q_onlineshopping = "Is it an online shopping situation?";
	//No -> q_ownit();
	//Yes -> q_onlineshopping();
	var q_onlineshoppingbis = "Have you check the return policy?";
	// if yes & no
	var q_onlineshoppingter = "Can you return the item easily if it doesnt fit?";
	// no - dont buy it 
	// yes -> q_ownit();


	var q_ownit = "Do you already own something similar?";
	// don't buy it

	var q_manyofit = "Do you feel like you already have too many " + "?";
	//if yes don't buy it
	// no continue

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




	// function thankHonesty(question_title) {
//     $('#question_title').empty();
//     $('#buttons_zone').remove();
//     $('#question_title').append(a3_needit);
//     $('#content_zone').append(dontneedit_gif);
//     $('#content_zone').append(return_button);

//     analyticsquizz_complete = true;
//     analytics_end = question_title;
//     console.log("in thank honesty function");
// }

// function dontBuyIt(question_title) {
//     $('#question_title').empty();
//     $('#buttons_zone').remove();
//     $('#question_title').append(dontbuyit);
//     $('#content_zone').append(dontbuyit_gif);
//     $('#content_zone').append(return_button);

//     analyticsquizz_complete = true;
//     analytics_end = question_title;
//     console.log("in dont buy it function");
// }

// function treatYoSelf(question_title) {
//     $('#question_title').empty();
//     $('#buttons_zone').remove();
//     $('#question_title').append(a14_buyit);
//     $('#content_zone').append(treatyoself_gif);
//     $('#content_zone').append(return_button);

//     analyticsquizz_complete = true;
//     analytics_end = question_title;
// }

// function jeezDontBuyIt(question_title) {
//     $('#question_title').empty();
//     $('#buttons_zone').remove();
//     $('#question_title').append(jeezdontbuyit);
//     $('#content_zone').append(jeezdontbuyit_gif);
//     $('#content_zone').append(return_button);

//     analyticsquizz_complete = true;
//     analytics_end = question_title;

// }

// function lifeIsTooShort(question_title) {
//     $('#question_title').empty();
//     $('#buttons_zone').remove();
//     $('#question_title').append(a14bis_buyit);
//     $('#content_zone').append(lifetooshort_gif);
//     $('#content_zone').append(return_button);

//     analyticsquizz_complete = true;
//     analytics_end = question_title;
// }

// }