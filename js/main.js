$(document).ready(function() {
    $("#emailCheck").submit(function(ev) {
      ev.preventDefault();

      var emailCheckElem = $(this);
      var emailCheckNativeElem = emailCheckElem[0];

      function emailekHide() {
          var emailek = $("#valosEmail, #valotlanEmail")
          emailek.hide();
      };

      if (emailCheckNativeElem.checkValidity() == true) {
            emailekHide();
            $("#valosEmail").fadeIn();
        } else {
            emailekHide();
            $("#valotlanEmail").fadeIn();
        };

      if (emailCheckElem.hasClass("was-validated") == false) {
        emailCheckElem.addClass("was-validated");
      }
    });

  });