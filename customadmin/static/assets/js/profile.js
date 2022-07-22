$(document).ready(function(){
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    // Submit contact form
    $("#edit-profile").unbind().click(function (e) {
        console.log("HERE");
        e.preventDefault();
        $('.error-group').removeClass('error-group');
        $('#edit-profile-error').empty();
        var csrf_token = $("[name='csrfmiddlewaretoken']").val();
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var date_of_birth = $("#date-picker-01").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var profile_image = $("#file-uploadpic").val();
        var flag = 0;
        if(first_name==""){
            $("#first_name").parent().parent().addClass('error-group');
            flag=1;
        }
        if(last_name==""){
            $("#last_name").parent().parent().addClass('error-group');
            flag=1;
        }
        if(flag==1){
            $('#edit-profile-error').text('Please fill the empty spaces');
            return;
        }
        else{
            $.ajax({
                url: '/edit-profile-form/',
                type: 'POST',
                data: {
                    csrfmiddlewaretoken: csrf_token,
                    first_name: first_name,
                    last_name:last_name,
                    date_of_birth:date_of_birth,
                    phone:phone,
                    address:address,
                    profile_image:profile_image,
                },
                success: function (response) {
                    $('#edit-profile-error').text(response['message']);
                    $('#edit-profile-error').css('color', 'green');     
                },
                error: function (err) {
                    $('#edit-profile-error').text(err);
                }
            });
        }
    });


        // transaction filter
        $("#transaction-filter").unbind().click(function (e) {
            e.preventDefault();
            $('.error-group').removeClass('error-group');
            $('#transaction-filter-error').empty();
            var month = $("#select-month01").find(':selected').val();
            var year = $("#select-year01").find(':selected').text();
            console.log(month,year);
            if(month==" " && year==""){
                $("#select-month01").parent().parent().addClass('error-group');
                $("#select-year01").parent().parent().addClass('error-group');
                $('#transaction-filter-error').text('Please fill the empty spaces');
            }
            else{
                $.ajax({
                    url: '/transaction-filter/',
                    type: 'GET',
                    data: {
                        month: month,
                        year:year,
                    },
                    success: function (response) {
                            $("#pro-transactions-tab").html(response);
                            return true;
                    },
                    error: function (err) {
                        $('#transaction-filter-error').text(err);
                    }
                });
            }
        });


});
  