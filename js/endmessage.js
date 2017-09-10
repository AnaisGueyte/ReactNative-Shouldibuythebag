import React, { Component } from 'react';

class EndMessage extends React.Component {

// Functions to display end messages

function reallyWhy(question_title) {
    $('#question_title').empty();
    console.log("why yu no remove buttons before");
    $('#buttons_zone').remove();
    console.log("why yu no remove buttons after");
    $('#question_title').append(a1_likeit);
    $('#content_zone').append(dontlikeit_gif);
    $('#content_zone').append(return_button);

    analyticsquizz_complete = true;
    analytics_end = question_title;
}

function thankHonesty(question_title) {
    $('#question_title').empty();
    $('#buttons_zone').remove();
    $('#question_title').append(a3_needit);
    $('#content_zone').append(dontneedit_gif);
    $('#content_zone').append(return_button);

    analyticsquizz_complete = true;
    analytics_end = question_title;
    console.log("in thank honesty function");
}

function dontBuyIt(question_title) {
    $('#question_title').empty();
    $('#buttons_zone').remove();
    $('#question_title').append(dontbuyit);
    $('#content_zone').append(dontbuyit_gif);
    $('#content_zone').append(return_button);

    analyticsquizz_complete = true;
    analytics_end = question_title;
    console.log("in dont buy it function");
}

function treatYoSelf(question_title) {
    $('#question_title').empty();
    $('#buttons_zone').remove();
    $('#question_title').append(a14_buyit);
    $('#content_zone').append(treatyoself_gif);
    $('#content_zone').append(return_button);

    analyticsquizz_complete = true;
    analytics_end = question_title;
}

function jeezDontBuyIt(question_title) {
    $('#question_title').empty();
    $('#buttons_zone').remove();
    $('#question_title').append(jeezdontbuyit);
    $('#content_zone').append(jeezdontbuyit_gif);
    $('#content_zone').append(return_button);

    analyticsquizz_complete = true;
    analytics_end = question_title;

}

function lifeIsTooShort(question_title) {
    $('#question_title').empty();
    $('#buttons_zone').remove();
    $('#question_title').append(a14bis_buyit);
    $('#content_zone').append(lifetooshort_gif);
    $('#content_zone').append(return_button);

    analyticsquizz_complete = true;
    analytics_end = question_title;
}

}

export default EndMessage;
