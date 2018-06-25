'use strict';

const STATE = {
  athleteID: 'hi'
};

function initializeApp() {
  console.log('initialized');
  $('.userData').submit(function() {
    event.preventDefault();
    console.log('clicked');
    let tempvar = $('#stravaUserID').val();
    console.log(tempvar);
    
  });
}

$(document).ready(console.log('work'), initializeApp());