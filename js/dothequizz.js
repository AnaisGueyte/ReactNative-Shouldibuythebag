
import React, { Component } from 'react';

class DoTheQuizz extends React.Component {

// establish value for questions and their answers.

var myitem = getItem();
var myitems = getPlurialItem();



function addButtons() {
    // If the user comes from the q10_yes method then she doesn't have the yes no buttons but the price range buttons. Therefore, I empty everything and put it back..
    $('#buttons_zone').empty();
    $('#buttons_zone').append('<button id="no" class="btn btn-lg btn-outline-danger mr-3">No</button><button id="yes" class="btn btn-lg btn-outline-success mr-3">Yes</button>');
}


// First, when the windows opens, display the first question, related to all the items.

$(document).ready(function () {
    // change banner according to the item picked
    /*if(myitem === "shoes"){
		var background = [{
 			"background": "url(http://localhost:8888/shoppingcrisis/assets/images/shoes.jpg)"
 		}];
		$( "#bg" ).css(background[0]);
	}
	if (myitem === "dress"){
		var background = [{
 			"background": "url(http://localhost:8888/shoppingcrisis/assets/images/cintres.jpg)"
 		}];
		$( "#bg" ).css(background[0]);
	}*/

    $('#question_title').append(q1_likeit);
    startTheQuizz();
}); // END OF DOCUMENT READY


// Then trigger the situation depending on the answer: Yes or No.
function startTheQuizz() {
    analytics_likeit = true;

    // If click no
    $('#no').click(function (e) {
        if ($('#question_title').html() != q1_likeit) {
            e.preventDefault();
        } else {
            reallyWhy(q1_likeit);
            analytics_likeit_answer = "no";
        }
    });

    // If click yes
    $('#yes').click(function (e) {
        if ($('#question_title').html() != q1_likeit) {
            e.preventDefault();
        } else {
            q_wantIt();
            analytics_likeit_answer = "yes";
        }
    });
}



function q_wantIt() {
    $('#question_title').empty();
    $('#question_title').append(q_wantit);

    analytics_wantit = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_wantit) {
            e.preventDefault();
        } else {
            reallyWhy(q_wantit);
            analytics_wantit_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_wantit) {
            e.preventDefault();
        } else {
            q_Quality();
            analytics_wantit_answer = "yes";
        }
    });
}

///********* Quality QUESTION ********* ///

function q_Quality() {
    $('#question_title').empty();
    $('#question_title').append(q_onquality);

    analytics_onquality = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_onquality) {
            e.preventDefault();
        } else {
            dontBuyIt(q_onquality);
            analytics_onquality_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_onquality) {
            e.preventDefault();
        } else {
            q_needIt();
            analytics_onquality_answer = "yes";
        }
    });
}

///********* SECOND QUESTION ********* ///

function q_needIt() {
    $('#question_title').empty();
    $('#question_title').append(q_needit);

    analytics_needit = true;


    $('#no').click(function (e) {
        if ($('#question_title').html() != q_needit) {
            e.preventDefault();
        } else {
            thankHonesty(q_needit);
            analytics_needit_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_needit) {
            e.preventDefault();
        } else {
            q_impulseShopping();
            analytics_needit_answer = "yes";
        }
    });
}

///********* Impulse shopping QUESTION ********* ///


function q_impulseShopping() {
    $('#question_title').empty();
    $('#question_title').append(q_impulseshopping);

    analytics_impulseshopping = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_impulseshopping) {
            e.preventDefault();
        } else {
            q_onlineShopping();
            analytics_impulseshopping_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_impulseshopping) {
            e.preventDefault();
        } else {
            dontBuyIt(q_impulseshopping);
            analytics_impulseshopping_answer = "yes";
        }
    });
}

///********* 17 online shopping - QUESTION ********* ///

function q_onlineShopping() {
    $('#question_title').empty();
    $('#question_title').append(q_onlineshopping);

    analytics_onlineshopping = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_onlineshopping) {
            e.preventDefault();
        } else {
            q_ownIt();
            analytics_onlineshopping_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_onlineshopping) {
            e.preventDefault();
        } else {
            q_onlineShoppingBis();
            analytics_onlineshopping_answer = "yes";
        }
    });

}

///********* 17bis online shopping - QUESTION ********* ///

function q_onlineShoppingBis() {
    $('#question_title').empty();
    $('#question_title').append(q_onlineshoppingbis);

    analytics_onlineshoppingbis = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_onlineshoppingbis) {
            e.preventDefault();
        } else {
            q_onlineShoppingTer();
            analytics_onlineshoppingbis_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_onlineshoppingbis) {
            e.preventDefault();
        } else {
            q_onlineShoppingTer();
            analytics_onlineshoppingbis_answer = "yes";
        }
    });

}

///********* 17ter online shopping - QUESTION ********* ///

function q_onlineShoppingTer() {
    $('#question_title').empty();
    $('#question_title').append(q_onlineshoppingter);

    analytics_onlineshoppingter = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_onlineshoppingter) {
            e.preventDefault();
        } else {
            dontBuyIt(q_onlineshoppingter);
            analytics_onlineshoppingter_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_onlineshoppingter) {
            e.preventDefault();
        } else {
            q_ownIt();
            analytics_onlineshoppingter_answer = "yes";
        }
    });
}

///********* THIRD QUESTION ********* ///

function q_ownIt() {
    $('#question_title').empty();
    $('#question_title').append(q_ownit);

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_ownit) {
            e.preventDefault();
        } else {
            //Do you own something similaire ? No, then continue (that's why it's the q4 yes method)
            q_manyOfIt();
            analytics_ownit_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_ownit) {
            e.preventDefault();
        } else {
            dontBuyIt(q_ownit);
            analytics_ownit_answer = "yes";
        }
    });
}

///********* FOURTH QUESTION ********* ///

function q_manyOfIt() {
    $('#question_title').empty();
    $('#question_title').append(q_manyofit);

    analytics_manyofit = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_manyofit) {
            e.preventDefault();
        } else {
            // No i don't have too many of it
            q_fitWardrobe();
            analytics_manyofit_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_manyofit) {
            e.preventDefault();
        } else {
            // YES I HAVE TOO MANY OF IT ->> it's a problem
            dontBuyIt(q_manyofit);
            analytics_manyofit_answer = "yes";
        }
    });
}

///********* FIFTH QUESTION ********* ///

function q_fitWardrobe() {
    $('#question_title').empty();
    $('#question_title').append(q_fitwardrobe);

    analytics_fitwardrobe = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_fitwardrobe) {
            e.preventDefault();
        } else {
            dontBuyIt(q_fitwardrobe);
            analytics_fitwardrobe_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_fitwardrobe) {
            e.preventDefault();
        } else {
            q_fitMe();
            analytics_fitwardrobe_answer = "yes";
        }
    });
}

///********* SIXTH QUESTION ********* ///

function q_fitMe() {
    $('#question_title').empty();
    $('#question_title').append(q_fitme);

    analytics_fitme = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_fitme) {
            e.preventDefault();
        } else {
            jeezDontBuyIt(q_fitme);
            analytics_fitme_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_fitme) {
            e.preventDefault();
        } else {
            q_influencer();
            analytics_fitme_answer = "yes";
        }
    });
}


///********* 15 influencer QUESTION ********* ///

function q_influencer() {
    $('#question_title').empty();
    $('#question_title').append(q_influencertitle);

    analytics_influencer = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_influencertitle) {
            e.preventDefault();
        } else {
            q_oneTimeUse();
            analytics_influencer_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_influencertitle) {
            e.preventDefault();
        } else {
            q_influencerBis();
            analytics_influencer_answer = "yes";
        }
    });
}

///********* 15bis influencer QUESTION ********* ///

function q_influencerBis() {
    $('#question_title').empty();
    $('#question_title').append(q_influencertitlebis);

    analytics_influencerbis = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_influencertitlebis) {
            e.preventDefault();
        } else {
            thankHonesty(q_influencerbis);
            analytics_influencerbis_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_influencertitlebis) {
            e.preventDefault();
        } else {
            q_oneTimeUse();
            analytics_influencerbis_answer = "yes";
        }
    });
}


///********* 22 one time use QUESTION ********* ///

function q_oneTimeUse() {
    $('#question_title').empty();
    $('#question_title').append(q_onetimeuse);

    analytics_onetimeuse = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_onetimeuse) {
            e.preventDefault();
        } else {
            q_onSale();
            analytics_onetimeuse_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_onetimeuse) {
            e.preventDefault();
        } else {
            q_manyUse();
            analytics_onetimeuse_answer = "yes";
        }
    });
}

///********* 22bis time use QUESTION ********* ///

function q_manyUse() {
    $('#question_title').empty();
    $('#question_title').append(q_manyuse);

    analytics_manyuse = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_manyuse) {
            e.preventDefault();
        } else {
            thankHonesty(q_manyuse);
            analytics_manyuse_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_manyuse) {
            e.preventDefault();
        } else {
            q_onSale();
            analytics_manyuse_answer = "yes";
        }
    });
}


///********* SEVENTH QUESTION ********* ///

function q_onSale() {
    $('#question_title').empty();
    $('#question_title').append(q_sale);

    analytics_sale = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_sale) {
            e.preventDefault();
        } else {
            q_salebis();
            analytics_sale_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_sale) {
            e.preventDefault();
        } else {
            q_price();
            analytics_sale_answer = "yes";
        }
    });
}

///********* SEVENTH-bis QUESTION ********* ///

function q_salebis() {
    $('#question_title').empty();
    $('#question_title').append(q_saletitlebis);

    analytics_salebis = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_saletitlebis) {
            e.preventDefault();
        } else {
            q_secondHand();
            analytics_salebis_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_saletitlebis) {
            e.preventDefault();
        } else {
            // yes i can wait for the sale
            dontBuyIt(q_saletitlebis);
            analytics_salebis_answer = "yes";
        }
    });
}



///********* EIGTH QUESTION ********* ///

function q_secondHand() {
    $('#question_title').empty();
    $('#question_title').append(q_secondhand);

    analytics_secondhand = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_secondhand) {
            e.preventDefault();
        } else {
            q_secondHandBis();
            analytics_secondhand_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_secondhand) {
            e.preventDefault();
        } else {
            q_price();
            analytics_secondhand_answer = "yes";
        }
    });
}

///********* EIGTH-bis QUESTION ********* ///

function q_secondHandBis() {
    $('#question_title').empty();
    $('#question_title').append(q_secondhandbis);

    analytics_secondhandbis = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_secondhandbis) {
            e.preventDefault();
        } else {
            q_price();
            analytics_secondhandbis_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_secondhandbis) {
            e.preventDefault();
        } else {
            dontBuyIt(q_secondhandbis);
            analytics_secondhandbis_answer = "yes";
        }
    });
}

///********* NINTH QUESTION ********* ///

function q_price() {
    $('#question_title').empty();
    $('#question_title').append(q_pricetitle);

    analytics_price = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_pricetitle) {
            e.preventDefault();
        } else {
            q_rewardYourself();
            analytics_price_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_pricetitle) {
            e.preventDefault();
        } else {
            q_priceRange();
            analytics_price_answer = "yes";
        }
    });
}

///********* TENTH QUESTION ********* ///

function q_priceRange() {
    $('#question_title').empty();
    $('#question_title').append(q_pricerangetitle);
    $('#buttons_zone').empty();

    /* analytics_pricerange = true; */

    // price range 

    $('#buttons_zone').append('<button id="under_50" class="btn btn-outline-danger mr-3 my-3"> under 50 $/€/£ </button>');
    $('#buttons_zone').append('<button id="50-100" class="btn btn-outline-danger mr-3 my-3"> between 50 and 100 $/€/£</button>');
    $('#buttons_zone').append('<button id="more100" class="btn btn-outline-danger mr-3 my-3"> above 100 $/€/£</button>');
    $('#buttons_zone').append('<button id="more200" class="btn btn-outline-danger mr-3 my-3"> above 200 $/€/£</button>');
    $('#buttons_zone').append('<button id="more500" class="btn btn-outline-danger mr-3 my-3"> above 500 $/€/£</button>');

    $('#under_50').click(function () {
        treatYoSelf(q_pricerangetitle);
        analytics_value_range = "under_50";
    });
    $('#50-100').click(function () {
        lifeIsTooShort(q_pricerangetitle);
        analytics_value_range = "50-100";
    });
    $('#more100').click(function () {
        q_affordIt();
        analytics_value_range = "more100";
    });
    $('#more200').click(function () {
        q_affordIt();
        analytics_value_range = "more200";
    });
    $('#more500').click(function () {
        jeezDontBuyIt(q_pricerangetitle);
        analytics_value_range = "more500";
    });
}

///********* ELEVENTH QUESTION ********* ///

function q_affordIt() {

    addButtons();

    $('#question_title').empty();
    $('#question_title').append(q_affordit);

    analytics_affordit = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_affordit) {
            e.preventDefault();
        } else {
            jeezDontBuyIt(q_affordit);
            analytics_affordit_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_affordit) {
            e.preventDefault();
        } else {
            q_reallyAffordIt();
            analytics_affordit_answer = "yes";
        }
    });
}

///********* TWELVE QUESTION ********* ///

function q_reallyAffordIt() {
    $('#question_title').empty();
    $('#question_title').append(q_reallyaffordit);

    analytics_reallyaffordit = true;

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_reallyaffordit) {
            e.preventDefault();
        } else {
            jeezDontBuyIt(q_reallyaffordit);
            analytics_reallyaffordit_answer = "no";
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_reallyaffordit) {
            e.preventDefault();
        } else {
            q_rewardYourself();
            analytics_reallyaffordit_answer = "yes";
        }
    });
}

///********* THIRTHEENTH QUESTION ********* ///

function q_rewardYourself() {

    $('#question_title').empty();
    $('#question_title').append(q_rewardyourself);

    analytics_rewardyourself = true;

    console.log("in the reward yourself function after analytics");

    $('#no').click(function (e) {
        if ($('#question_title').html() != q_rewardyourself) {
            e.preventDefault();
            console.log("in the if question title is different");
        } else {
            lifeIsTooShort(q_rewardyourself);
            analytics_rewardyourself_answer = "no";
            console.log("in the reward yourself function in the no else");
        }
    });

    $('#yes').click(function (e) {
        if ($('#question_title').html() != q_rewardyourself) {
            e.preventDefault();
            console.log("in the if question title is different");
        } else {
            console.log("in th yes else function");
            /*analytics_rewardyourself_answer = "yes";*/
            console.log("in th yes else function after analytics");
            treatYoSelf(q_rewardyourself);
            console.log("in th yes else function after call function treatYoSelf");

        }
    });
}

}

}

export default DoTheQuizz;







