$(document).ready(function () {

    var start_err;
    var end_err;
    var transport_err;

    $('#start').keyup(function(){
        start_chek();
    });
    function start_chek(){
        var startname=$('#start').val();

        var busname = $('#transport').val();
        var pattern = /^[A-Za-z]+$/;
        console.log(busname);
        if (busname == '') {
            $('.busname').html("<b>Enter The Bus Name</b>");
            $('.busname').css("color", "red");
            busname_err = false;
            return false;

        }
        else if (!isNaN(busname)) {
            $('.busname').html("<b>Bus name not start with number</b>");
            $('.busname').css("color", "red");
            busname_err = false;
            return false;

        }
        else if (!pattern.test(busname)) {
            $('.busname').html("<b>Bus name not start with speacial symbol</b>");
            $('.busname').css("color", "red");
            busname_err = false;
            return false;

        }
        else {
            $('.busname').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.busname').css("color", "green");
            name_err = true;
            return true;
        }

    }

});