// function emailValidation (email) {
//   var validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//   if(validate.tes(email)) { return true}
//   else { return false}
// }


$(document).ready(function() {
  $('#email-form').on('input', function() {
    var input     = $( this );
    var regex     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var is_email  = regex.test( input.val() )

    if (is_email) {
      input.removeClass("invalid-email").addClass("valid-email")
    }
    else {
      input.removeClass("valid-email").addClass("invalid-email")
    }
  })
})
