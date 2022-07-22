$(document).ready(function () {

    var name_err;
    var address_err;
    var phone;
    var age;
    $('#ticketsucess').hide();

    $('#name').keyup(function () {
        name_chek();
    });

    function name_chek() {
        var name = $('#name').val();
        console.log(name)
        var pattern = /^[A-Za-z]+$/;

        if (name == '') {
            console.log("***********************")
            $('.name1').html("<b>Enter the name</b>");
            $('.name1').css("color", 'red');
            name_err = false;
            return false;
        }
        else if (!pattern.test(name[0])) {
            $('.name1').html("<b>Name not start with zero and special symbols </b>");
            $('.name1').css("color", 'red');
            name_err = false;
            return false;

        }
        else if (name.length < 5 || name.length > 20) {
            $('.name1').html("<b>Name length must be 5 to 20 chacters</b>");
            $('.name1').css("color", 'red');
            name_err = false;
            return false;
        }
     
        else {
            $('.name1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.name1').css("color", "green");
            name_err = true;
            return true;

        }
    }
    $('#address').keyup(function () {
        address_chek();

    });
    function address_chek() {
        var address = $('#address').val();

        if (address == '') {
            $('.address1').html('<b>Enter the address</b>');
            $('.address1').css("color", "red");
            address_err = false;
            return false;
        }
        else {
            $('.address1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.address1').css("color", "green");
            address_err = true;
            return true;
        }
    }
    $('#phone').keyup(function () {
        phone_chek();

    });
    function phone_chek() {
        var phone = $('#phone').val();
        // var pattern=/^\d{10}$/;
        if (phone == '') {
            $('.phone1').html('<b>Enter the phone number</b>');
            $('.phone1').css("color", "red");
            phone = false;
            return false;
        }
        else if(phone.length > 10){
            $('.phone1').html('<b>phone length mustbe 10 chacters  </b>');
            $('.phone1').css("color", "red");
            phone1 = false;
            return false;

        }
        
        else if(isNaN(phone[0])){
            $('.phone1').html('<b>phone number us start with chacters </b>');
            $('.phone1').css("color", "red");
            phone1 = false;
            return false;

        }
        
        else if (phone[0] == '+' || phone[0] == '*' || phone[0] == '-' || phone[0] == '/' || phone[0] == ',' || phone[0] == '.' || phone[0] == '<' || phone[0] == '>' || phone[0] == '?' || phone[0] == '!' || phone[0] == '@' || phone[0] == '#' || phone[0] == '$' || phone[0] == '%' || phone[0] == '^' || phone[0] == '&' || phone[0] == '(' || phone[0] == ')' || phone[0] == '=' || phone[0] == '|' || phone[0] == '~' || phone[0] == '`') {
            $('.phone1').html("<b>phone Start is not symbol</b>");
            $('.phone1').css("color", "red");
            phone1 = false;
            return false;
        }
     

        else {
            $('.phone1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.phone1').css("color", "green");
            phone1 = true;
            return true;
        }

    }
    $('#age').keyup(function () {
        age_chek();

    });
    function age_chek() {
        var age = $('#age').val();
        var ag=parseInt(age);
        // var pattern=/^\d{10}$/;
        if (age == '') {
            $('.age1').html('<b>Enter the age number</b>');
            $('.age1').css("color", "red");
            age = false;
            return false;
        }
        else if(ag <= 18){
            $('.age1').html('<b>Bus booking only Eligable Custmer   </b>');
            $('.age1').css("color", "red");
            age = false;
            return false;

        }
     
      
        
        else if(isNaN(age[0])){
            $('.age1').html('<b>age number us start with chacters </b>');
            $('.age1').css("color", "red");
            age = false;
            return false;
        }
        
  
     

        else{
            // console.log("*******");
            $('.age1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.age1').css("color", "green");
            age = true;
            return true;
        }

    }
    $('#ticketsave').click(function(){
        var name=name_chek();
        var address=address_chek();
        var phone=phone_chek();
        var age=age_chek();
        
        if(name==true && address==true && phone==true && age==true){
            $('#ticketsucess').show();
            return true;

        }
        else{
            return false;

        }


    });



});