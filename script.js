console.log('hello from js');

//event #2
$(document).ready(onReady);//the html isn't technically ready until all the events called in the js (see hello() and goodbye() below load because that's sourced in html...so the html isn't loaded until that is complete.)

function onReady(){//does a lot of setup
  console.log('hello from jq')
  //add event listeners aka click events

  //get data to display on the page
  //$() <---this grabs an element in JQuery
  $()
};

function hello(){
  console.log('hello')
};
function goodbye(){
  console.log('goodbye')
};

//event #1
hello();
goodbye();
hello();