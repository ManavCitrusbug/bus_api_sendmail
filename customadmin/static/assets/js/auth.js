$(document).ready(function () {
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return pattern.test(emailAddress);
  }

  // Submit contact form
  $("#sign-up-btn")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var first_name = $("#first_name").val();
      var last_name = $("#last_name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var confirm_password = $("#confirm_password").val();
      var flag = 0;

      if (first_name == "") {
        $("#first_name").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (last_name == "") {
        $("#last_name").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (email == "") {
        $("#email").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (isValidEmailAddress(email) == false && email != "") {
        $("#email").parent().parent().addClass("error-group");
        $("#sign-up-error").text("Enter valid email address.");
        return;
      }
      if (password == "") {
        $("#password").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (confirm_password == "") {
        $("#confirm_password").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (password != confirm_password) {
        $("#confirm_password").parent().parent().addClass("error-group");
        $("#sign-up-error").text("Passwords do not match");
        return;
      }
      if ($("#accept-tc-card").prop("checked") == false) {
        $("#sign-up-error").text("Accept terms and conditions.");
        return;
      }

      if (flag == 1) {
        $("#sign-up-error").text("Please fill the empty spaces.");
        return;
      } else {
        $.ajax({
          url: "/register/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
          },
          success: function (response) {
            if (response["status"] == true) {
              $("#sign-up-error").text(response["message"]);
              $("#sign-up-error").css("color", "green");
              return;
            }
            $("#sign-up-error").text(response["message"]);
            return false;
          },
          error: function (err) {
            $("#sign-up-error").text(err);
          },
        });
      }
    });

  // Login
  $("#login-btn")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var email = $("#login-email").val();
      var password = $("#login-password").val();
      var flag = 0;

      if (email == "") {
        $("#login-email").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (password == "") {
        $("#login-password").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (isValidEmailAddress(email) == false && email != "") {
        $("#login-email").parent().parent().addClass("error-group");
        $("#login-error").text("Enter valid email address.");
        return;
      }
      if (flag == 1) {
        $("#login-error").text("Please fill the empty spaces.");
        return;
      } else {
        $.ajax({
          url: "/user-login/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            email: email,
            password: password,
          },
          success: function (response) {
            if (response["status"] == true) {
              $("#login-error").text(response["message"]);
              $("#login-error").css("color", "green");
              setTimeout("location.reload(true)", 2000);
              window.location = "/cart-page/";
              return true;
            }
            if (response["send_link"] == true) {
              $("#login-error").text(response["message"]);
              $("#send-link").removeAttr("hidden");
              return false;
            }
            $("#login-error").text(response["message"]);
            return false;
          },
          error: function (err) {
            $("#login-error").text(err);
          },
        });
      }
    });

  // Forgot Password
  $("#fp-btn")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var email = $("#fp-email").val();

      if (email == "") {
        $("#fp-email").parent().parent().addClass("error-group");
        return;
      }
      if (isValidEmailAddress(email) == false && email != "") {
        $("#fp-email").parent().parent().addClass("error-group");
        $("#fp-error").text("Enter valid email address.");
        return;
      } else {
        $.ajax({
          url: "/forgot-password-link/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            email: email,
          },
          success: function (response) {
            if (response["status"] == true) {
              $("#fp-error").text(response["message"]);
              $("#fp-error").css("color", "green");
              return true;
            }
            console.log("HERE");
            $("#fp-error").text(response["message"]);
            return false;
          },
          error: function (err) {
            $("#fp-error").text(err);
          },
        });
      }
    });

  // Reset Password
  $("#rs-btn")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var password = $("#rp-password").val();
      var confirm_password = $("#confirm-rp-password").val();
      var url = $(location).attr("href"),
        parts = url.split("/"),
        last_part = parts[parts.length - 2];
      var flag = 1;
      if (password == "") {
        $("#rp-password").parent().parent().addClass("error-group");
        flag = 0;
      }
      if (confirm_password == "") {
        $("#confirm-rp-password").parent().parent().addClass("error-group");
        flag = 0;
      }
      if (password != confirm_password) {
        $("#rs-error").text("Passwords does not match ");
        flag = 0;
      }
      if (flag == 0) {
        return;
      } else {
        $.ajax({
          url: "/change-password/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            password: password,
            uuid_link: last_part,
          },
          success: function (response) {
            if (response["status"] == true) {
              $("#rs-error").text(response["message"]);
              $("#rs-error").css("color", "green");
              setTimeout(function () {
                window.location = "/login/";
              }, 3000);
              return true;
            }
            $("#rs-error").text(response["message"]);
            return false;
          },
          error: function (err) {
            $("#rs-error").text(err);
          },
        });
      }
    });

  // Send Email Verification link
  $("#verify-btn")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var email = $("#verify-email").val();

      if (email == "") {
        $("#verify-email").parent().parent().addClass("error-group");
        return;
      }
      if (isValidEmailAddress(email) == false && email != "") {
        $("#verify-email").parent().parent().addClass("error-group");
        $("#verify-error").text("Enter valid email address.");
        return;
      } else {
        $.ajax({
          url: "/send-email-verification-link/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            email: email,
          },
          success: function (response) {
            if (response["status"] == true) {
              $("#verify-error").text(response["message"]);
              $("#verify-error").css("color", "green");
              return true;
            }
            $("#verify-error").text(response["message"]);
            return false;
          },
          error: function (err) {
            $("#verify-error").text(err);
          },
        });
      }
    });
});
