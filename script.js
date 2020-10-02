console.log('hello from js');

//EVENT #2
$(document).ready(onReady);//the html isn't technically ready until all the events called in the js (see hello() and goodbye() below load because that's sourced in html...so the html isn't loaded until that is complete.)

let favFoods = ['sushi', 'cheese', 'coffee'];
let employees = [];
let count = 0;


function onReady(){//does a lot of setup, is nice to see event listeners here
  console.log('hello from jq')
  //add event listeners aka click events
  //get data to display on the page
  //$() <---this grabs an element in JQuery
  $('#clickMe').on('click', buttonClicked);//event listener
  ///orrr you can create a function for the event listener and call it in onReady///
  $('#counter').on('click', countUp);
  
  deleteButtonActive();//on load##USES DECENTANT SELECTOR TO ACTIVATE AFTER THE <LI> LOADS
  changeColorButtonActive();
  submitFormButtonActive();
};
//---------
function deleteButtonActive(){
  $('#favoriteFoods').on('click', '.deleteButton', deleteFunc);//since the <li> and <button> won't exist on page load...you are finding the closest parent that WILL be populated on page load and mapping to what you want that functionality to be connected to.##DECENDANT SELECTOR##...
  //
  //soo....the <ul>#favoriteFoods exists on page load...so...the logic is...Hey JQuery, take that UL called #FavFoods, hang on to it and on the click of it's decendant, .deleteButton, execute the delteFunc
 // $("#hi").on('click', deleteFunc);//would delete the parent of "hi" which is "main"
}//end populateList

function deleteFunc(){
  console.log('delete');
  $(this).parent().remove();//refers to THIS ELEMENT THAT HAS BEEN INTERACTED WITH
  //can traverse multiple levels thusly: .parent().parent()
  //SO>>>>this is hanging onto the thing that IS happening (see deleteFunc is connected to the .deleteButton)...once we have THIS (the button), in hand...use .parent to say...I'm holding onto this button...when I click THIS...remove() the parent of it...which is the LI
  //you know what THIS refers to based on what the function is being called by(see deleteButtonActive)...you CAN assign this over and over if you call the function with multiple events/tags.
}//end deleteFunc
//-----------
function countUp(){
  count += 1;
  $('#count').text(count);
  let countText = $('#count').text();
  console.log(countText);
}//end countUp
//-----------
function changeColorButtonActive(){
  $('#favoriteFoods').on('click', '.changeColor', changeColorFunc);
}//end changeColorButtonActive function

function changeColorFunc(){
  //rather than manipulating css within JS...you can just add a class to an element with the .addClass method...and just have this class set up in CSS
  //$(this).parent().addClass('pinkColor');
  //**ORRRRR you can toggle */
  $(this).parent().toggleClass('pinkColor');
}//end changeColorFunc

//-------
function submitFormButtonActive(){
  $('#submitForm').on('click', submitForm);
}//end submitFormButtonActive

function submitForm(){
  //this is where I want to grab input values;
  //getter .val()
  let name = $('#name').val();//gets the input value from the 'name' field
  let title = $('#title').val();
  console.log(`Hello, ${name}, you are a ${title}`);
  //setter .val('something') allows you to set a value on the DOM
  //.text() is another getter/setter...if the parentheses is empty you are getting, if the parentheses is populated it's a setter
  let newEmployee = {
    name: name,
    title: title
  };
  employees.push(newEmployee);
  $('#name').val('');
  $('#title').val('');
};
//-----------


//THE BUTTON CLICK IS EVENT #3
//write a function called buttonClicked
function buttonClicked(){
  console.log("I'm Clicked");
  let ulFoods = $('#favoriteFoods');//this is optional, you don't have to assign the jQuery selector to a variable.
  ulFoods.empty();//clear out UL to append a fresh list
  for(let i = 0; i < favFoods.length; i++){
    ulFoods.append(`
      <li>${favFoods[i]}
        <button class="deleteButton">DELETE</button>
        <button class="changeColor">Change Color</button>
      </li>
    `);//if you have the deleteButton outside of the <li> tags, then it isn't a child of the <li>.
  }//end for loop
  
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