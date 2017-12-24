// A new todo item needs to be prepended to the list.


var $addButton = $('.btn')// this line of code sets the variable $addButton to the class btn using a jquery selector
var $toDo = $('#todo')// this line of code sets the variable $toDo to the  id todo using a jquery selector
var $list = $('.list')// this line of code sets the class list by using a jquery selector to the variable $list


$('.form').on('submit', function(evt){//this line of using a function to create a submit event with the jQuery method '.on()' for the class 'form'
    evt.preventDefault()// the method '.preventDefault()' stops all default settings for uploaded pages...what about evt
    $list.prepend('<text>')// this line code creates new p tags and prepends it to the top of the list variable. the method '.prepend()' places set elements to the top of a selected content
    var $newP = $('p:first')//this line of code makes sure all new paragraphs typed are first and placed in the variable $newP
    $newP.append('<input type="checkbox">').append('<i class="glyphicon glyphicon-star">').append('<span>').append('<i class="glyphicon glyphicon-remove">')//this line of codes makes sure all created paragraphs tags have the pre wrote CSS appended to them
    var $newPSpan = $('span:first')// this line of code makes sure all new span tags are the first and shortcuted to the variable newPSpan
    $newPSpan.text($('#todo').val())//this line of code uses the  jQuery method '.val()' to add the input of id tag 'todo' to the text of the newPSpan variable by using the method '.text()'
    $('#todo').val('')//this will clear the input box with the id 'todo' and set the value to empty once the item has been submitted
})

// // LOOK AT LINE 18 The input field needs to be cleared to allow him to type another todo.
// // Bonus: Animate the todo item fading in or sliding down as you're adding it to the DOM.

$('body').on('click', '.glyphicon-remove', function(){// this line of code uses a event listener click for the class glyphicon-remove
    $(this).parent().remove()// this line of codes allows the information of the specific class glyphicon-remove to be taken off of the page
})

$('body').on('click', '.glyphicon-star', function() {// this line of codes uses a event listener for the class glyphicon-star. '$('body') makes sure that the event is selected
    $(this).toggleClass('active')//this line of code uses the method ('.toggleClass()') to Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument. 'active' is the name of a class in the css
})

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;


$('.list').on("click", 'input[type="checkbox"]',function handleCheck(e) {
  let inBetween = false;
  // Check if they had the shift key down
  // AND check that they are checking it
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {// loop over every single checkbox
        if (checkbox === this || checkbox === lastChecked){
          inBetween = !inBetween; // inBetween is the opposite of it original value false
        }
        if(inBetween){
          checkbox.checked = true; // check all the checkboxes true
          $('span').css("text-decoration","line-through"); //add the css properties to the span tags in between
        }
    });
  }
  $(this).siblings("span").toggleClass('linethrough'); // add and remove the css class linethrough
  lastChecked = this;
});
