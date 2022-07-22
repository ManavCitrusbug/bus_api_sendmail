$(document).ready(function () {
  // Add service to cart
  $("#add-to-cart")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      $("#cart-error").empty();
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var service_date = $("#date-picker-01").val();
      var service_type = $("#service_type").val();
      var service_time = $("#select-time").val();
      var service_id = $("#service_id").val();

      var flag = 0;
      check_day = new Date(service_date);
      if (check_day.getDay() == 6 || check_day.getDay() == 0) {
        $("#date-picker-01").parent().parent().addClass("error-group");
        $("#cart-error").text(
          "The date or time you have selected is unavailable. Please reselect or check the service page to find out on the possible booking slots."
        );
        return;
      }
      if (service_date == "") {
        $("#date-picker-01").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (service_type == "") {
        $("#service_type").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (service_time == "Choose time") {
        $("#select-time").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (flag == 1) {
        if (service_type == "") {
          $("#cart-error").text("Please select service type");
        } else {
          $("#cart-error").text("Please select date and time");
        }
        return;
      } else {
        $.ajax({
          url: "/service-cart/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            service_date: service_date,
            service_type: service_type,
            service_time: service_time,
            service_id: service_id,
          },
          success: function (response) {
            if (response["status"] == false) {
              $("#cart-error").text(response["message"]);
              return true;
            } else {
              window.location = "/booking/";
            }
          },
          error: function (err) {
            $("#cart-error").text(err);
          },
        });
      }
    });

  // Add product to cart
  $(".add-product-btn")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      $(".product-error").empty();
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var product = $(this).attr("product-id");
      $.ajax({
        url: "/add-product/",
        type: "POST",
        data: {
          csrfmiddlewaretoken: csrf_token,
          product: product,
        },
        success: function (response) {
          if (response["status"] == false) {
            $("#product-error" + product).text(response["message"]);
            return true;
          }
          $("#btn-add-cart" + product).text("Added to cart");
          var cart_count = parseInt($("#cart_count").text(), 10);
          ++cart_count;
          $("#cart_count").text(cart_count);

          return true;
        },
        error: function (err) {
          $("#product-error" + product).text(err);
        },
      });
    });

  // Add product to cart- cart page
  $(".add-product-btn-cart")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      $(".product-error").empty();
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var product = $(this).attr("product-id");
      $.ajax({
        url: "/add-product/",
        type: "POST",
        data: {
          csrfmiddlewaretoken: csrf_token,
          product: product,
        },
        success: function (response) {
          if (response["status"] == false) {
            $("#product-error" + product).text(response["message"]);
            return true;
          }
          $("#btn-add-cart" + product).text("Added to cart");
          location.reload();
          return true;
        },
        error: function (err) {
          $(this).get(".error-message-bottom-all.product-error").text(err);
        },
      });
    });

  // Make Payment
  $("#make-payment")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      $("#payment-error").empty();
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var first_name = $("#first_name").val();
      var last_name = $("#last_name").val();
      var email = $("#email").val();
      var confirm_email = $("#confirm_email").val();
      var phone = $("#phone").val();
      var address = $("#address").val();
      var card_name = $("#card_name").val();
      var card_number = $("#card-number").val();
      var month_number = $("#month-number").val();
      var year_number = $("#year-number").val();
      var cvv_number = $("#cvv-number").val();

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
      if (confirm_email == "") {
        $("#confirm_email").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (phone == "") {
        $("#phone").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (address == "") {
        $("#address").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (card_name == "") {
        $("#card_name").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (card_number == "") {
        $("#card-number")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("error-group");
        flag = 1;
      }
      if ($.isNumeric(month_number) == false) {
        $("#month-number")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("error-group");
        flag = 1;
      }
      if ($.isNumeric(year_number) == false) {
        $("#year-number")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("error-group");
        flag = 1;
      }
      if (cvv_number == "") {
        $("#cvv-number").parent().parent().parent().addClass("error-group");
        flag = 1;
      }

      if (flag == 1) {
        $("#payment-error")
          .text("Please fill the empty spaces")
          .css("color", "red");
        return;
      } else {
        $.ajax({
          url: "/purchase-product/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            address: address,
            card_name: card_name,
            card_number: card_number,
            month_number: month_number,
            year_number: year_number,
            cvv_number: cvv_number,
          },
          success: function (response) {
            if (response["status"] == false) {
              $("#payment-error").text(response["message"]);
              return;
            }
            window.location = "/payment-success/";
            return true;
          },
          error: function (err) {
            $("#payment-error").text(err);
          },
        });
      }
    });

  // Service Booking
  $("#book-service")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      $("#booking-error").empty();
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var first_name = $("#first_name").val();
      var last_name = $("#last_name").val();
      var email = $("#email").val();
      var confirm_email = $("#confirm_email").val();
      var phone = $("#phone").val();
      var address = $("#address").val();
      var card_name = $("#card_name").val();
      var card_number = $("#card-number").val();
      var month_number = $("#month-number").val();
      var year_number = $("#year-number").val();
      var cvv_number = $("#cvv-number").val();
      var terms_conditions = $("#accept-tc-card").is(":checked");

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
      if (confirm_email == "") {
        $("#confirm_email").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (phone == "") {
        $("#phone").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (address == "") {
        $("#address").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (card_name == "") {
        $("#card_name").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (card_number == "") {
        $("#card-number")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("error-group");
        flag = 1;
      }
      if ($.isNumeric(month_number) == false) {
        $("#month-number")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("error-group");
        flag = 1;
      }
      if ($.isNumeric(year_number) == false) {
        $("#year-number")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("error-group");
        flag = 1;
      }
      if (cvv_number == "") {
        $("#cvv-number").parent().parent().parent().addClass("error-group");
        flag = 1;
      }
      if (terms_conditions == false) {
        $("#terms_conditions").parent().parent().addClass("error-group");
        flag = 1;
      }

      if (flag == 1) {
        if (terms_conditions == false) {
          $("#booking-error")
            .text(
              "Please indicate that you have read and agree to the terms and conditions and privacy policy"
            )
            .css("color", "red");
        } else {
          $("#booking-error")
            .text("Please fill the empty spaces")
            .css("color", "red");
        }
        return;
      } else {
        $.ajax({
          url: "/book-service/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            address: address,
            card_name: card_name,
            card_number: card_number,
            month_number: month_number,
            year_number: year_number,
            cvv_number: cvv_number,
          },
          success: function (response) {
            console.log(response["message"]);
            if (response["status"] == false) {
              $("#booking-error").text(response["message"]);
              return;
            }
            window.location = "/payment-success/";
            return true;
          },
          error: function (err) {
            $("#booking-error").text(err);
          },
        });
      }
    });

  // Home page add service
  // Add service to cart
  $("#add-service")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      $(".error-group").removeClass("error-group");
      $("#add-service-error").empty();
      var csrf_token = $("[name='csrfmiddlewaretoken']").val();
      var service_date = $("#date-picker-01").val();
      var service_type = $("#service_type").val();
      var service_time = $("#select-time").val();
      var service_id = $("#select-package01")
        .find(":selected")
        .attr("service_id");

      var div = document.getElementById("errordivbox");
      div.style.visibility = "visible";
      div.style.display = "";

      var flag = 0;
      check_day = new Date(service_date);
      if (check_day.getDay() == 6 || check_day.getDay() == 0) {
        $("#date-picker-01").parent().parent().addClass("error-group");
        $("#add-service-error").text(
          "The date or time you have selected is unavailable. Please reselect or check the service page to find out on the possible booking slots."
        );
        return;
      }

      if (service_date == "") {
        $("#date-picker-01").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (service_type == "") {
        $("#service_type").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (service_id == "0") {
        $("#select-package01").parent().parent().addClass("error-group");
        $("#add-service-error").text("Please Select Service");
        return;
      }
      if (service_time == "Choose time") {
        $("#select-time").parent().parent().addClass("error-group");
        flag = 1;
      }
      if (flag == 1) {
        if (service_type == "") {
          $("#add-service-error").text("Please select service type");
        } else {
          $("#add-service-error").text("Please select date and time");
        }
        return;
      } else {
        var div = document.getElementById("errordivbox");
        div.style.visibility = "hidden";
        div.style.display = "";

        $.ajax({
          url: "/service-cart/",
          type: "POST",
          data: {
            csrfmiddlewaretoken: csrf_token,
            service_date: service_date,
            service_type: service_type,
            service_time: service_time,
            service_id: service_id,
          },
          success: function (response) {
            if (response["status"] == false) {
              var div = document.getElementById("errordivbox");
              div.style.visibility = "visible";
              div.style.display = "";
              $("#add-service-error").text(response["message"]);

              return true;
            } else {
              window.location = "/booking/";
            }
          },
          error: function (err) {
            $("#add-service-error").text(err);
          },
        });
      }
    });
});
