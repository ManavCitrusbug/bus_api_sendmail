$(document).ready(function () {
    var start_point_err;
    var end_point_err;
    var date_err;

    $('.start_txt').keyup(function () {
        start_point_chek();

    });

    function start_point_chek() {
        var start_point = $('.start_txt').val();
        var pattern = /^[A-Za-z]+$/;
        

        if (start_point == '') {
            $('#startpoint').html("<b>Enter the Starting Point</b>");
            $('#startpoint').css("color", "red");
            start_point_err = false;
            return start_point_err;

        }
        else if (!pattern.test(start_point)) 
        {
            $('#startpoint').html("<b>Number and Symbol Not able</b>");
            $('#startpoint').css("color", "red");
            start_point_err = false;
            return start_point_err;

        }

        else {
            $('#startpoint').html("<b>&#10004;</b>");
            $('#startpoint').css("color", "green");
            start_point_err = true;
            return true;
        }



    }

    $('.end_txt').keyup(function () {
        end_point_chek();

    });

    function end_point_chek() {
        var end_point = $('.end_txt').val();
        var pattern = /^[A-Za-z]+$/;
        // console.log("***");

        if (end_point == '') {
            $('#endpoint').html("<b>Enter the End Point</b>");
            $('#endpoint').css("color", "red");
            end_point_err = false;
            return end_point_err;

        }
        else if (!pattern.test(end_point)) 
        {
            $('#endpoint').html("<b>Number and Symbol Not able</b>");
            $('#endpoint').css("color", "red");
            start_point_err = false;
            return start_point_err;

        }

        else {
            $('#endpoint').html("<b>&#10004;</b>");
            $('#endpoint').css("color", "green");
            end_point_err = true;
            return true;
        }



    }
    $('.date_txt').keyup(function () {
        date_chek();

    });
    function date_chek() {
        var date = $('.date_txt').val();

        var today = new Date();
        var datenow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
        // var month=date1.getMonth();
        // var year=date1.getFullYear();
        // var pastdate=datenow-1;


        if (date == '') {
            $('#date').html("<b>Enter the Date</b>");
            $('#date').css("color", "red");
            date_err = false;
            return false;

        }
        // else if(date < datenow )
        // {
        //     $('#date').html("<b>Date is past</b>");
        //     $('#date').css("color", "red");
        //     date_err = false;
        //     return false;

        // }
        
        
        else {
            $('#date').html("<b>&#10004;</b>");
            $('#date').css("color", "green");
            date_err = true;
            return true;
        }


    }

    $('#search').on('click', function () {
        console.log("///");
        var start = start_point_chek();
        var end = end_point_chek();
        var date = date_chek();
        if (start == true && end == true && date == true) {
            var startpoint = $('.start_txt').val();
            var endpoint = $('.end_txt').val();
            var date = $('.date_txt').val();
            var mydata = { start1: startpoint, end1: endpoint, date1: date }
            console.log(mydata);
            $.ajax({
                url: "/customadmin/ajaxbus/",
                type: "GET",
                data: mydata,
                success: function (data) {
                    console.log(data)
                    console.log(data.id)
                    $('.main').append(`
                    <div class="container bus1">
    <p class='root1'>${data.name} Travels</p>
    <p class='time'> <b>Date&time</b> ${data.date_time_dpt}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
    <p class='dptpoint'> <b>Duretion:</b> 3 hour's
    </p>


    <P class="seat"><b>Available
        Seat:</b>
      ${data.seats_available}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Price:</b>
      ${data.price_per_person}
    </p>
    <p class='time'> <b>Bus Number:</b> ${data.number_plate}</p>
    <p class="seat"><b>Bus-Category:</b> ${data.bus_category}</p>

    <div class="book"><a href="/busbook/${data.id}" style="color: black; text-decoration: none; ">Book</a></div>

  </div>

                    `)
           
                },

            });
            return true;
        }
        else{
            return false;
        }



    });
});