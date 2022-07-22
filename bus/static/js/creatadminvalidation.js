$(document).ready(function () {
    var firstname_err;
    var lastname_err;
    var email_err;
    var username_err;
    var password_err;
    var confirmpassword_err;

    $('#success1').hide();

    $('#fn').keyup(function () {
        firstname_chek();
    });
    function firstname_chek() {
        var firstname = $('#fn').val();
        console.log(firstname)
        var pattern = /^[A-Za-z]+$/;


        if (firstname == '') {
            $('#first_name').html('<b>Enter the Firstname  </b>');

            $('#first_name').css("color", "red");
            firstname_err = false;
            return false;



        }
        else if (!pattern.test(firstname)) {
            $('#first_name').html('<b>Name is not start with nu numbers and special symbols  </b>');

            $('#first_name').css("color", "red");
            firstname_err = false;
            return false;
        }

        else if (firstname.length < 5 || firstname.length > 50) {
            $('#first_name').html('<b>Enter the Firstname between 5 to 50 charcters </b>');

            $('#first_name').css("color", "red");
            firstname_err = false;
            return false;

        }



        else {
            $('#first_name').html("<b>&#10004;</b>");
            $('#first_name').css("color", "green");
            firstname_err = true;
            return true;
        }
    }
    $('#ln').keyup(function () {
        lastname_chek();
    });
    function lastname_chek() {
        var lastname = $('#ln').val();
        console.log(lastname)
        var pattern = /^[A-Za-z]+$/;


        if (lastname == '') {
            $('#last_name').html('<b>Enter the lastname  </b>');

            $('#last_name').css("color", "red");
            lastname_err = false;
            return false;



        }
        else if (!pattern.test(lastname)) {
            $('#last_name').html('<b>Name is not start with nu numbers and special symbols  </b>');

            $('#last_name').css("color", "red");
            lastname_err = false;
            return false;
        }

        else if (lastname.length < 5 || lastname.length > 50) {
            $('#last_name').html('<b>Enter the Firstname between 5 to 50 charcters </b>');

            $('#last_name').css("color", "red");
            lastname_err = false;
            return false;

        }



        else {
            $('#last_name').html("<b>&#10004;</b>");
            $('#last_name').css("color", "green");
            lastname_err = true;
            return true;
        }
    }
    $('#em').keyup(function () {
        email_chek();
    });
    function email_chek() {
        var email = $('#em').val();
        // console.log(firstname)
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


        if (email == '') {
            $('#email').html('<b>Enter the email  </b>');

            $('#email').css("color", "red");
            email_err = false;
            return false;



        }
        else if (!pattern.test(email)) {
            $('#email').html('<b>wrong Email Input </b>');

            $('#email').css("color", "red");
            email = false;
            return false;
        }

       



        else {
            $('#email').html("<b>&#10004;</b>");
            $('#email').css("color", "green");
            email = true;
            return true;
        }
    }
    $('#un').keyup(function () {
        username_chek();
    });
    function username_chek() {
        var username = $('#un').val();
        console.log(username)
        var pattern = /^(?=.*[0-9])(?=.*[_@])[a-zA-Z0-9_@]{5,10}$/;


        if (username == '') {
            $('#username1').html('<b>Enter the Username  </b>');

            $('#username1').css("color", "red");
            username_err = false;
            return false;



        }
        else if (username[0] == '+' || username[0] == '*' || username[0] == '-' || username[0] == '/' || username[0] == ',' || username[0] == '.' || username[0] == '<' || username[0] == '>' || username[0] == '?' || username[0] == '!' || username[0] == '@' || username[0] == '#' || username[0] == '$' || username[0] == '%' || username[0] == '^' || username[0] == '&' || username[0] == '(' || username[0] == ')' || username[0] == '=' || username[0] == '|' || username[0] == '~' || username[0] == '`') {
            $('#username1').html("<b>Username Start is not symbol</b>");
            $('#username1').css("color", "red");
            username_err = false;
            return false;
        }
        else if (!isNaN(username[0])) {
            $('#username1').html("<b>Username   Start with not number</b>");
            $('#username1').css("color", "red");
            username_err = false;
            return false;
        }

        else if (!pattern.test(username)) {
            $('#username1').html('<b>Special Symbols  and Numeric Character Compulsory   </b>');

            $('#username1').css("color", "red");
            username_err = false;
            return false;
        }
        
        
        else if (username[0] == '+' || username[0] == '*' || username[0] == '-' || username[0] == '/' || username[0] == ',' || username[0] == '.' || username[0] == '<' || username[0] == '>' || username[0] == '?' || username[0] == '!' || username[0] == '@' || username[0] == '#' || username[0] == '$' || username[0] == '%' || username[0] == '^' || username[0] == '&' || username[0] == '(' || username[0] == ')' || username[0] == '=' || username[0] == '|' || username[0] == '~' || username[0] == '`') {
            $('#username1').html("<b>Username Start is not symbol</b>");
            $('#username1').css("color", "red");
            username_err = false;
            return false;
        }


        else if (username.length < 5 || username.length > 10) {
            $('#username1').html('<b>Username length must be 5 to 10 chacters </b>');

            $('#username').css("color", "red");
            username_err = false;
            return false;

        }



        else {
            $('#username1').html("<b>&#10004;</b>");
            $('#username1').css("color", "green");
            username_err = true;
            return true;
        }

    }
    $('#pwd').keyup(function () {
        password_chek();
    });
    function password_chek() {
        var password = $('#pwd').val();
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

        if (password == '') {
            $('#password1').html("<b>Please fill the password</b>");
            $('#password1').css("color", "red");
            password_err = false;
            return false;


        }
        else if (password.length < 8 || password.length > 20) {
            $('#password1').html("<b>password Chacater is between 8 and 20</b>");
            $('#password1').css("color", "red");
            password_err = false;
            return false;
        }
        else if (!pattern.test(password)) {
            $('#password1').html("<b>Alpha and Numeric Character Compulsory </b>");
            $('#password1').css("color", "red");
            password_err = false;
            return false;
        }
        else {
            $('#password1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#password1').css("color", "green");
            password_err = true;
            return true;
        }
        


    }
    $('#conpwd').keyup(function () {
        confirmpassword_chek();
    });
    function confirmpassword_chek() {
        var confirmpassword = $('#conpwd').val();
        var password = $('#pwd').val();


        if (confirmpassword == '') {
            $('#confirmpassword').html("<b>Please fill the Confirmpassword</b>");
            $('#confirmpassword').css("color", "red");
            confirmpassword_err = false;
            return false;


        }
        else if (password != confirmpassword) {
            $('#confirmpassword').html("<b>Password Not Match </b>");
            $('#confirmpassword').css("color", "red");
            confirmpassword_err = false;
            return false;
        }

        else {
            $('#confirmpassword').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#confirmpassword').css("color", "green");
            confirmpassword_err = true;
            return true;
        }


    }
    $('#save').click(function(){
        var firstname=firstname_chek();
        var lastname=lastname_chek();
        var email=email_chek();
        var username = username_chek();
        var password =password_chek();
        var confirmpassword = confirmpassword_chek();

        if( firstname==true || lastname==true || email==true || username==true||password==true||confirmpassword==true){
            $('#success1').show();
            return true;

        }
        else{
            return false;
        }

    });


});