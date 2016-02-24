/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to
 */

$(document).ready(function()  {
  // Question 1: When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
  $('.button1').click(function()  {
      $('p').addClass('blue');
  }); //end click of button1

  // Question 3:
  //  When button 3 is clicked, select the ordered list item that has the class "falseFact".
  //  Using jQuery change the content to read "True Fact".

  $('.button3').click(function()  {
    $('.initial-text').addClass('hidden');
    //Add class of hiddent to initial-text elements
    $('.alt-text').removeClass('hidden');
    //remove class of hidden from alt-text element

  });


}); //end ready





// Question 2:When button 2 is clicked, select all <h2> elements on this page, and change the text to say your name.






// Question 4:
// Refactor question 3 keeping in mind separation of concerns
