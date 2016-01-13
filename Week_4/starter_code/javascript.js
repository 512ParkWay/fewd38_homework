


$( document ).ready(function() {
    console.log( "ready!" );
    $('a').click(function() {
      event.preventDefault();

    });

    $('.readmore').click(function(){
      $('.show-this-on-click').slideDown();
      $('.readmore').hide();
      $('.readless').show();

    });

    $('.readless').click(function(){
      $('.readless').hide();
      $('.show-this-on-click').slideUp();
      $('.readmore').show();

    });

    $('.learnmore').click(function(){
      $('.learnmore').hide();
      $('.learnmoretext').slideDown();

    });

});
