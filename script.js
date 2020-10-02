console.log('hello from js');

//EVENT #2
$(document).ready(onReady);//the html isn't technically ready until all the events called in the js (see hello() and goodbye() below load because that's sourced in html...so the html isn't loaded until that is complete.)

let favFoods = ['sushi', 'cheese', 'coffee'];


function onReady(){//does a lot of setup
  console.log('hello from jq')
  //add event listeners aka click events
  //get data to display on the page
  //$() <---this grabs an element in JQuery

  $('#clickMe').on('click', buttonClicked);//event listener
  populateList(favFoods);//on load

};

function populateList(array){
  let ulFoods = $('#favoriteFoods');//this is optional, you don't have to assign the jQuery selector to a variable.
  for(let i = 0; i < array.length; i++){
    ulFoods.append(`<li>${array[i]}</li>`);
  }//end for loop
}//end populateList

//THE BUTTON CLICK IS EVENT #3
//write a function called buttonClicked
function buttonClicked(){
  console.log("I'm Clicked");
  
}//end buttonClicked

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