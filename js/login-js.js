//js login
function validateLogin(){
    var cellEmpty = true;
    jQuery("input[type='text']:not(.HiddenIndex)").each(function(){
        if(jQuery(this).val().trim() == ""){
            jQuery(this).addClass("Error");
            cellEmpty= false ;
        }else{
            jQuery(this).removeClass("Error");
        }
    });
    return  cellEmpty;
}

$(function () {
    $('.form-login').submit(function (event) { 
    var input = $(this).children('.password').val();
        console.log(input);
    var password = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?!.*\s).{8,}$/);

    if (!password.test(input)) {  
     $(".alerthidden").removeClass('fade'); 
     $(".alerthidden").addClass('show'); 
     event.preventDefault(event);   
    }
    else{ 
     $(".alerthidden").addClass('fade'); 
     $(".alerthidden").removeClass('show'); 
    }
    });
   });

