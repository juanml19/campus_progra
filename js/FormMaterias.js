(function () {
    $('form').submit(function (event) {
        var mensaje = "";
        var mensajeN = "";
        $('.validate').each(function () {
			var label = $('label', this.parentElement).text();
			var value = $( this ).val();

			if (($(this).val().trim().length < 5) && (label.substring(0, label.length - 1) != "Precio")
				                                  && (label.substring(0, label.length - 1) != "Créditos"))
		    {
                var label = $('label', this.parentElement).text();
                mensaje += "\n"+label.substring(0, label.length - 1);
            }

			if (value < 0) 
		    {
                var label = $('label', this.parentElement).text();
                mensajeN += "\n"+label.substring(0, label.length - 1);	
			}
        });
        if (mensaje != "") {
            alert("Los siguiente campos tienen menos de 5 caracteres:\n"+mensaje);
            event.preventDefault(event);
        }
		if (mensajeN != "") {
            alert("Los siguientes campos no puede ser menor a 0:\n"+mensajeN);
            event.preventDefault(event);				
        }
    });
})();

function myFunctionDelete() {
    alert("Se borrará la Materia");
}

function myFunctionDeleteReq() {
    alert("Se borrará el Requisito");
}