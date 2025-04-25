$(document).ready(function(){




$("myForm").submit(function(e){

    e.preventDefault();

    let name = $('#nameInput').val();
    let email = $('#emailInput').val();
    let phone = $('#phoneInput').val();
    let message = $('#messageInput').val();

    if (name && email && phone && message) {
        
        $('#staticBackdrop').modal('show');
    } else {
        alert('Please fill in all fields.');
    }
    
});
});


                        // this code is for navbar search for cards 
$(document).ready(function () {

    $("#navSrch").keyup(function () {
  
      let srchCard = $(this).val().toLowerCase();
  
      let found = false;
      $(".s").filter(function () {
  
        let cardText = $(this).text().toLowerCase();
  
        if (cardText.includes(srchCard)) {
  
          $(this).show();
          found = true;
          
        } else {
          $(this).hide();
        }
      });
      if (!found) {
        $(".s").parent().append("<h2>Results are not found</h2>");
      }
    });
  });