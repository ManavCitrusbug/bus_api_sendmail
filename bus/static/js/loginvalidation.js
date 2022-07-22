$(document).ready(function () {

    var loginvalidation_err;
    var passwordvalidation_err;
   
 





    $('#username').keyup(function () {
        validations_chek();
    });

    function validations_chek() {
        var username = $('#username').val();
        // console.log(username)
    // var pattern = /^(?=.*[0-9])(?=.*[_@])[a-zA-Z0-9_@]{5,10}$/;
        // var pattern1=/^[A-Za-z]+$/;

        if (username == '') {
            // console.log('**************')
            $('#usernamevalidation').html("<b>Please Enter the UserName<b>");
            $('#usernamevalidation').css("color", "red");
            loginvalidation_err = false;
            return false;


        }

 

        else {
            $('#usernamevalidation').html("<b>&#10004;</b>");
            $('#usernamevalidation').css("color", "green");
            loginvalidation_err = true;
            return true;
        }
    }
    $('#password').keyup(function () {
        passwordvalidation_chek();
    });

    function passwordvalidation_chek() {
        var password = $('#password').val()
        // var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

        if (password == '') {
            $('#passwordvalidation').html('<b>Enter The password</b>');
            $('#passwordvalidation').css("color", "red");
            passwordvalidation_err = false;
            return false;
        }


        else {
            $('#passwordvalidation').html("<b>&#10004;</b>");
            $('#passwordvalidation').css("color", "green");
            passwordvalidation_err = true;
            return true;
        }


    }
    $('#loginbtn').click(function () {

        loginvalidation_err = validations_chek();
        passwordvalidation_err = password_chek();

        if (loginvalidation_err == true && passwordvalidation_err == true) {

            return true;
        }
        else {
            return false;
        }

    });

  
    
});