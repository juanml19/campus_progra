
	   	var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10){
          dd='0'+dd
        } 
        if(mm<10){
          mm='0'+mm
        } 
        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("FecIniMO").setAttribute("min", today);
		document.getElementById("FecIniME").setAttribute("min", today);



(function () {
    $('button').click(function () {
        $('#seccionParrafos').fadeToggle(1000);
    });
})();



(function () {
    $('form').submit(function (event) {
        var mensaje = "";
        var mensajeN = "";
		
        $('.validate').each(function () {
			var label = $('label', this.parentElement).text();
			var value = $( this ).val();

			if (value < 0) 
		    {
                var label = $('label', this.parentElement).text();
                mensajeN += "\n"+label.substring(0, label.length - 1);	
			}
        });
		if (mensajeN != "") {
            alert("Los siguientes campos no puede ser menor a 0:\n"+mensajeN);
            event.preventDefault(event);				
        }
		if (document.getElementById("FecIniMO").value > document.getElementById("FecIniME").value) {
			alert("Fecha de Matrícula Extraordinaria ANTERIOR a Ordinaria\n");
            event.preventDefault(event);
        }			
    });
})();