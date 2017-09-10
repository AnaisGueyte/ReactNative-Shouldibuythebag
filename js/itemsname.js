
import React, { Component } from 'react';

class ItemsName extends React.Component {

function getItem() {
    var item = $('h1').attr('id');
    return item;
}

function getPlurialItem() {
    var plurialItem = $('h1').attr('id');

    if (plurialItem == "bag") {
        plurialItem = "bags";
    }
    if (plurialItem == "dress") {
        plurialItem = "dresses";
    }

    return plurialItem;
}



}

export default ItemsName;