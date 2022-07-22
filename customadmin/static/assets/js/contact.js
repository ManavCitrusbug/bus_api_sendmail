$(document).ready(function(){
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    // Submit contact form
    $("#contact-submit-btn").unbind().click(function (e) {
        e.preventDefault();
        $('.error-group').removeClass('error-group');
        var csrf_token = $("[name='csrfmiddlewaretoken']").val();
        var name = $("#name").val();
        var inquiry_type = $("#select-enquiry01 :selected").text();
        var email = $("#email").val();
        var phone = $("#phone-number").val();
        var note = $("#note").val();
        var flag = 0;
        if(name==""){
            $("#name").parent().parent().addClass('error-group');
            flag=1;
        }
        if(inquiry_type==" "){
            $("#select-enquiry01").parent().parent().addClass('error-group');
            flag=1;
        }
        if(email==""){
            $("#email").parent().parent().addClass('error-group');
            flag=1;
        }
        if(isValidEmailAddress(email) == false && email!= ""){
            $("#email").parent().parent().addClass('error-group');
            $('#contact-form-error').text('Enter valid email address.');
            return;
        }
        if(phone==""){
            $("#phone-number").parent().parent().parent().parent().addClass('error-group');
            flag=1;
        }
        if(note==""){
            $("#note").parent().parent().addClass('error-group');
            flag=1;
        }

        if(flag==1){
            $('#contact-form-error').text('Please fill the empty spaces and enter valid data.');
            return;
        }
        else{
            $.ajax({
                url: '/submit-contact-form/',
                type: 'POST',
                data: {
                    csrfmiddlewaretoken: csrf_token,
                    name: name,
                    inquiry_type:inquiry_type,
                    email:email,
                    phone:phone,
                    note:note,
                },
                success: function (response) {
                    $('#contact-form-error').text(response['message']);
                    $('#contact-form-error').css('color', 'green');     
                },
                error: function (err) {
                    $('#contact-form-error').text(err);
                }
            });
        }
    });
});
  