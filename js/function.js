jQuery(document).ready(function () {
    jQuery('.tables').DataTable( {
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });
    jQuery('form').submit(function (event) { 
        var input = jQuery(this).children('.password').val();

        var password = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?!.*\s).{8,}$/);

        if (!password.test(input)) {  
         jQuery(".alerthidden").removeClass('fade'); 
         jQuery(".alerthidden").addClass('show'); 
        event.preventDefault(event);   
        }
        else{ 
         jQuery(".alerthidden").addClass('fade'); 
         jQuery(".alerthidden").removeClass('show'); 
        }
    });
});