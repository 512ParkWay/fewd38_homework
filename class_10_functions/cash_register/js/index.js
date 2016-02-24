
$(document).ready(function() {

  var total = 0;

  $('.entry').submit(transactionSubmit);

  function transactionSubmit(event) {
    event.preventDefault();

    var newVal = $('.new-entry').val();

    newVal = parseFloat(newVal);

    $('.entries').append('<li>' + newVal + '</li>');

    total = total + newVal;

    formatCurrency(total);

    $('.total').text(total);

    $('.new-entry').val('');

    function formatCurrency(number) {
      //do code to format currency
    }

  };



}); //end ready
