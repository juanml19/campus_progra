$(document).ready(function () {
    $('.dataTable').DataTable( {
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        responsive: true
    });
    $('.not-number').keyup(function (e) {
        if (!/^[ a-záéíóúüñ]*$/i.test(this.value)) { 
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
    $('.form-nuevaCarrera').submit(function (event) {
        var mensaje = "";
        $('.form-nuevaCarrera .validate').each(function () {
			var input=$(this).val().trim();
			var letras= new RegExp(/^[a-zA-Z_]*$/);
            if ((input.length < 5)||( !letras.test(input))) {
                var label = $('label', this.parentElement).text();
                mensaje += "\n"+label.substring(0, label.length - 1);
            }
        }); 
        if (mensaje != "") {
            alert("Los siguiente campos no pueden contener números ni caracteres especiales y deben tener un mínimo de 5 caracteres:\n"+mensaje);
            event.preventDefault(event);
        }
		
    });
})();

(function () {
    $('.form-editarCarrera').submit(function (event) {
        var mensaje = "";
        $('.form-editarCarrera .validate').each(function () { 
		var input=$(this).val().trim();
		var letras= new RegExp(/^[a-zA-Z_]*$/);
            if ((input.length < 5)||( !letras.test(input))) {
                var label = $('label', this.parentElement).text();
                mensaje += "\n"+label.substring(0, label.length - 1);
            }
        }); 
        if (mensaje != "") {
            alert("Los siguiente campos no pueden contener números ni caracteres especiales y deben tener un mínimo de 5 caracteres:\n"+mensaje);
            event.preventDefault(event);
        }
		
    });
})();

function myFunctionDelete() {
    alert("Se borrará la carrera");
}

