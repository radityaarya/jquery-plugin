$.fn.validateEmail = function(){
  this.keyup('input', function() {
    var input     = $(this);
    var regex     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid_email  = regex.test( input.val() )

    if (valid_email) {
      input.removeClass("invalid-email").addClass("valid-email")
    }
    else {
      input.removeClass("valid-email").addClass("invalid-email")
    }
  })
}


$(document).ready(function() {
  $("#email-form").validateEmail()
})
