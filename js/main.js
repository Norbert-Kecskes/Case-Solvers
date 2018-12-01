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

    $("#shift").on("click", function() {
        var p1 = $("#p1").text();
        var p2 = $("#p2").text();
        var p3 = $("#p3").text();
        $("#p1").text(p3);
        $("#p2").text(p1);
        $("#p3").text(p2);
    });

  });