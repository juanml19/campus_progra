//password format
$(function () {
    $('.form-login').submit(function (event) { 
        var input2 = $(this).children('.usuario').val();
        console.log(input2);
        $.trim(".usuario.html()");
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

//spaces
jQuery(document).ready(function () {
    jQuery('.no-espacios').keyup(function (e) {
        var value = jQuery(this).val();
        console.log("asdas"+value+"Adsdas")
        if (value == " ") {
            jQuery(this).val("");
        }
    });
    
});

