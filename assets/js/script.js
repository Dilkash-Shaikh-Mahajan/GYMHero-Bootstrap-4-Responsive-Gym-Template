
$(document).ready(function(){

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll >= 500){
            $('.navbar').addClass('fixed-top');
        }else{
            $('.navbar').removeClass('fixed-top');
        }

    });




    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled: true
        }
        
      });






});




















