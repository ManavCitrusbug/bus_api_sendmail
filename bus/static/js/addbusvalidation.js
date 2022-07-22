$(document).ready(function () {


    var busname_err;
    var busnumber_err;
    var seats_err;
    var price_err;
    var date_err;
    $('#saveaddbus').hide();
    $('#transport').keyup(function () {
        transportname_chek();
    });
    function transportname_chek() {
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
    $('#transportnumber').keyup(function () {
        transportnumber_chek();
    });
    function transportnumber_chek() {
        var busnumber = $('#transportnumber').val();
        if (busnumber == '') {
            $('.busnumber').html("<b>Enter the Busnumber</b>");
            $('.busnumber').css("color", "red");
            busnumber_err = false;
            return false;

        }
        else {
            $('.busnumber').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.busnumber').css("color", "green");
            busnumber_err = true;
            return true;


        }
    }
    $('#seat').keyup(function(){
        seat_chek();
    });
    function seat_chek(){
        var seat=$('#seat').val();
        var i;
        seats=parseInt(seat);
        console.log(seats);
        // var pattern=/^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
        if(seat==''){
            $('.seats').html("<b>Enter the Seats</b>");
            $('.seats').css("color", "red");
            seats_err = false;
            return false;
            
        }
        else if(seats<=0 || isNaN(seats)){
            $('.seats').html("<b>Enter Valid Seats</b>");
            $('.seats').css("color", "red");
            seats_err = false;
            return false;
        }
        else if(seats >20){
            $('.seats').html("<b>Every bus has a 20 seats</b>");
            $('.seats').css("color", "red");
            seats_err = false;
            return false;
        }
     
        
        // else if(seat!=''){
        //     for (i=0;i<seat.length;i++)
        //     {
        //         if (seat[i]=='.'||seat[i]=='+'||seat[i]=='-'||seat[i]=='*'||seat[i]=='/'||seat[i]=='?'||seat[i]==','||seat[i]=='>'||seat[i]=='<'||seat[i]=='`'||seat[i]=='~'||seat[i]=='!'||seat[i]=='@'||seat[i]=='#'||seat[i]=='$'||seat[i]=='%'||seat[i]=='^'||seat[i]=='&'||seat[i]=='('||seat[i]==')'||seat[i]=='-'||seat[i]=='_'||seat[i]=='=')
        //         {
        //             $('.seats').html("<b>Symbol are not allows</b>");
        //             $('.seats').css("color", "red");
        //             seats_err = false;
        //             return false;

        //         }
               
        //     }
        // }
       
        
       
       
        
        else{
            $('.seats').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.seats').css("color", "green");
            seats_err = true;
            return true;
        }
    


        
    }
    $('#price').keyup(function(){
        price_chek();
    });
    function price_chek(){
        var price=$('#price').val();
        // var i;
        prices=parseInt(price);
        // console.log(seats);
        // var pattern=/^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
        if(price==''){
            $('.prices').html("<b>Enter the Seat Price Of Per Seat</b>");
            $('.prices').css("color", "red");
            price_err = false;
            return false;
            
        }
        else if(price<=0 || isNaN(price)){
            $('.seats').html("<b>Enter Valid Price</b>");
            $('.seats').css("color", "red");
            price_err = false;
            return false;
        }
        
     
        
        // else if(seat!=''){
        //     for (i=0;i<seat.length;i++)
        //     {
        //         if (seat[i]=='.'||seat[i]=='+'||seat[i]=='-'||seat[i]=='*'||seat[i]=='/'||seat[i]=='?'||seat[i]==','||seat[i]=='>'||seat[i]=='<'||seat[i]=='`'||seat[i]=='~'||seat[i]=='!'||seat[i]=='@'||seat[i]=='#'||seat[i]=='$'||seat[i]=='%'||seat[i]=='^'||seat[i]=='&'||seat[i]=='('||seat[i]==')'||seat[i]=='-'||seat[i]=='_'||seat[i]=='=')
        //         {
        //             $('.seats').html("<b>Symbol are not allows</b>");
        //             $('.seats').css("color", "red");
        //             seats_err = false;
        //             return false;

        //         }
               
        //     }
        // }
       
        
       
       
        
        else{
            $('.prices').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.prices').css("color", "green");
            prices_err = true;
            return true;
        }
    


        
    }
    $('#date').keyup(function(){
        date_chek();
    });
    function date_chek(){
        var date=$('#date').val();
        // var i;
        // prices=parseInt(price);
        // console.log(seats);
        // var pattern=/^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
        if(date==''){
            $('.dates').html("<b>Enter the date</b>");
            $('.dates').css("color", "red");
            date_err = false;
            return false;
            
        }
      
        
     
        
        // else if(seat!=''){
        //     for (i=0;i<seat.length;i++)
        //     {
        //         if (seat[i]=='.'||seat[i]=='+'||seat[i]=='-'||seat[i]=='*'||seat[i]=='/'||seat[i]=='?'||seat[i]==','||seat[i]=='>'||seat[i]=='<'||seat[i]=='`'||seat[i]=='~'||seat[i]=='!'||seat[i]=='@'||seat[i]=='#'||seat[i]=='$'||seat[i]=='%'||seat[i]=='^'||seat[i]=='&'||seat[i]=='('||seat[i]==')'||seat[i]=='-'||seat[i]=='_'||seat[i]=='=')
        //         {
        //             $('.seats').html("<b>Symbol are not allows</b>");
        //             $('.seats').css("color", "red");
        //             seats_err = false;
        //             return false;

        //         }
               
        //     }
        // }
       
        
       
       
        
        else{
            $('.prices').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.prices').css("color", "green");
            prices_err = true;
            return true;
        }
    


        
    }
    $('#addbussave').click(function(){
        var busname=transportname_chek();
        var busnumber=transportnumber_chek();
        var seat=seat_chek();
        var price=price_chek();
        var date=date_chek();

        if (busname==true && busnumber==true && seat==true && price==true && date==true){
            $('#saveaddbus').show();
            return true;

        }
        else{
            return false;
        }

    });
    


});