jQuery(document).ready(function () {
    jQuery('.dataTable').DataTable( {
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        responsive: true
    });
    jQuery('.not-number').keyup(function (e) {
        if (!/^[ a-záéíóúüñ]*$/i.test(this.value)) {
            console.log(this.value);
            this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,"");
        }
    });
    jQuery('.no-espacios').keyup(function (e) {
        var value = jQuery(this).val();
        console.log("asdas"+value+"Adsdas")
        if (value == " ") {
            jQuery(this).val("");
        }
    });
    jQuery(".editar-usuario").click(function(){
       jQuery(".titulo-form-usuario").html("Editar usuario"); 
    });
    jQuery(".nuevo-usuario").click(function(){
       jQuery(".titulo-form-usuario").html("Nuevo usuario"); 
    });
});