function data(){
    var pessengername=$('#pessengername').html();
    var address=$('#address').html();
    var phone=$('#phone').html();
    var bookingdata=$('#bookingdata').html();
    var age=$('#age').html();
    var busnumber=$('#busnumber').html();
    var price=$('#price').html();
    var date=$('#date').html();
    // var mydata={'pessengername':pessengername,'address':address,'phone':phone,'bookingdata':bookingdata,'age':age,'busnumber':busnumber,'price':price,'date':date,}
    $.ajax({
        url:'/ticketpdf/',
        type:'GET',
        data:{'pessengername':pessengername,'address':address,'phone':phone,'bookingdata':bookingdata,'age':age,'busnumber':busnumber,'price':price,'date':date},
        success:function(data){
            console.log(data);

        }
    })
}