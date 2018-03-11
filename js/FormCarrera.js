$(document).ready(function () {
    $('.dataTable').DataTable( {
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        responsive: true
    });
    $('.not-number').keyup(function (e) {
        if (!/^[ a-záéíóúüñ]*$/i.test(this.value)) {
            console.log(this.value);
            this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,"");
        }
    });
    $('.no-espacios').keyup(function (e) {
        var value = $(this).val(); 
        if (value == " ") {
            $(this).val("");
        }
    });
    $(".editar-carrera").click(function(){
       $(".titulo-form-carrera").html("Editar carrera"); 
    });
    $(".nueva-carrera").click(function(){
       $(".titulo-form-carrera").html("Nueva carrera"); 
    });
});

(function () {
    $('form').submit(function (event) {
        var mensaje = "";
        $('.validate').each(function () {
            if ($(this).val().trim().length < 5) {
                var label = $('label', this.parentElement).text();
                mensaje += "\n"+label.substring(0, label.length - 1);
            }
        });
        if (mensaje != "") {
            alert("Los siguiente campos tienen menos de 5 characteres:\n"+mensaje);
            event.preventDefault(event);
        }
    });
})();

function myFunctionDelete() {
    alert("Se borrará la Carrera");
}

