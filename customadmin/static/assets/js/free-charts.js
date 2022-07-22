$(document).ready(function(){
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    // Plot phone number chart
    $("#plot-phone-number-chart").unbind().click(function (e) {
        e.preventDefault();
        $('.error-group').removeClass('error-group');
        $('#phone-number-chart-error').empty();
        var csrf_token = $("[name='csrfmiddlewaretoken']").val();
        var phone = $("#phone").val();
        var flag = 0;
        if(phone==""){
            $("#phone").parent().parent().addClass('error-group');
            flag=1;
        }
        if(phone.length!=8){
            $("#phone").parent().parent().addClass('error-group');
            $('#phone-number-chart-error').text('Enter valid number');
            return;
        }
        if($("#personal-tc-policy").prop('checked') == false){
            $('#phone-number-chart-error').text('Accept general policy');
            return;
        }
        if(flag==1){
            $('#phone-number-chart-error').text('Please fill the empty spaces');
            return;
        }
        else{
            window.location="/phone-number-chart/?phone="+$("#phone").val();
            return true;
        }
    });


        // Plot phone number chart
        $("#plot-personal-chart").unbind().click(function (e) {
            e.preventDefault();
            $('.error-group').removeClass('error-group');
            $('#personal-tab-error').empty();
            var csrf_token = $("[name='csrfmiddlewaretoken']").val();
            var date_of_birth = $("#date-picker-01").val();
            var name = $("#name").val();
            var flag = 0;
            if(name==""){
                $("#name").parent().parent().addClass('error-group');
                flag=1;
            }
            if(date_of_birth==""){
                $("#date_of_birth").parent().parent().parent().addClass('error-group');
                flag=1;
            }
            if(flag==1){
                $('#personal-tab-error').text('Please fill the empty spaces');
                return;
            }
            if($("#personal-tc-policy").prop('checked') == false){
                $('#personal-tab-error').text('Accept general policy');
                return;
            }
            else{
                window.location="/personal-chart/?dob="+$("#date-picker-01").val()+"&name="+$("#name").val();
                return true;
            }
        });


});
  