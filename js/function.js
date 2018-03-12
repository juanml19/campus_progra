<<<<<<< HEAD
=======
//---------------------------------
>>>>>>> c6184280b3177c69bf2fd4d4ed3ad3c91b66cc9f
jQuery(document).ready(function () {
    jQuery('.dataTable').DataTable( {
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });
    
    /* js grupo  Jose */
    jQuery('#datatable').dataTable({
        responsive: true
    });
	jQuery("#myModal").on('hidden.bs.modal', function (){
        cleanModalForm();
    });
    jQuery('.not-number').keyup(function (e) {
        if (!/^[ a-záéíóúüñ]*$/i.test(this.value)) {
            console.log(this.value);
            this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,"");
        }
    });
});
function Matricular(text) {
			var row = $(text).detach();
			$("#prematicula").append(row);
			document.getElementById("Pago").style = "visibility:visible"
		}

function Desmatricular(text){
var row = $(text).detach();
$("#Matricula").append(row);
}

function validateMyForm(){
    var cellEmty = true;
    jQuery("input[type='text']:not(.HiddenIndex)").each(function(){
        if(jQuery(this).val().trim() == ""){
            jQuery(this).addClass("Error");
            cellEmty= false ;
        }else{
            jQuery(this).removeClass("Error");
        }
    });
    return  cellEmty;
}

function Addrow(){
   if(validateMyForm())
   { 
    var Data = [$("#idmateria").val(), $("#idgrupo").val(),$("#idnumerogrupo").val(),  document.querySelector('input[name=idhorario]:checked').value
    , "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>" ];
    $('#datatable').DataTable().row.add(Data).draw();
    
    $("#closeMyModal").click();
    $("#show").prop("disabled", false);
   }
  }
		
		function cleanModalForm(){
			jQuery("input[type='text']:not(.HiddenIndex)").val("");
			jQuery("input[type='text']:not(#HiddenIndex)").removeClass("Error");
		}
		
		function removeRow(bottom){

			var ActualRow = jQuery(bottom).parents("tr");			         
			DeleteForm(ActualRow);
			jQuery("#btn_modalDelete").click(); // open the modal for delete row 

		}
		
		function DeleteForm(ActualRow){
		
			jQuery("#yesDelete").click( function(){	
			
				jQuery('#datatable').DataTable().row(ActualRow).remove().draw();
				
				var tableLength = jQuery('#datatable').DataTable().column( 0 ).data().length;	
				if(tableLength== 0){
					jQuery("#show").prop("disabled", true);
				}
				jQuery("#closeDeleteModal").click();
			})	
			
		}
		
		function editRow(bottom){	
			jQuery("#Add").css("display", "none");
			jQuery("#edit").css("display", "inline");
			jQuery("#titleModel").text("Editar");
			var ActualRow = jQuery(bottom).parents("tr");
			var rowIndex = jQuery('#datatable').DataTable().row(ActualRow).index();
			var row = jQuery('#datatable').DataTable().row(rowIndex).data()
			jQuery("#idmateria").val(row[0]);
			jQuery("#idgrupo").val(row[1]);
			jQuery("#idnumerogrupo").val(row[2]);
			jQuery("#idhorario").val(row[3]);
			jQuery("#HiddenIndex").val(rowIndex);			
		}
		
		
		function editRowBotton(){	
			
			if(validateMyForm())
			{	
				var Data = [jQuery("#idmateria").val(), jQuery("#idgrupo").val(),jQuery("#idnumerogrupo").val(), jQuery("#idhorario").val(),  "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>", " <input type = \"text\" class=\"form-control\" id = \"HiddenIndex\"  style=\"display:none\"> </input>" ];
				jQuery('#datatable').DataTable()
				.row(jQuery("#HiddenIndex").val()).data(Data).draw();
				
				jQuery("#Add").css("display", "inline");
				jQuery("#edit").css("display", "none");
				jQuery("#titleModel").text("Agregar un nuevo curso");
				jQuery("#closeMyModal").click();
			}
		}
function SoloNumeros(evt){
            if(window.event){//asignamos el valor de la tecla a keynum
            keynum = evt.keyCode; //IE
            }
            else{
            keynum = evt.which; //FF
             } 
 //comprobamos si se encuentra en el rango numérico y que teclas no recibirá.
             if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
            return true;
            }
             else{
          return false;
         }
         }		

		function showMyObj(){
			if(validateMyFirstForm())
			{
				var myData = [];
				jQuery("tbody tr").each(function ( value, index ) {
					var rowIndex = jQuery('#datatable').DataTable().row(value).index();
					var row = jQuery('#datatable').DataTable().row(rowIndex).data()
					var obj = {first: row[0] , second :row[1],third: row[2],fourth: row[3]}
					myData.push(obj);
				} );
				
				var obj2 = {first:jQuery("#idmateria").val() , second:jQuery("#idgrupo").val(),third:jQuery("#idnumerogrupo").val() , fourth:jQuery("#idhorario").val(), Fifth: myData }
				console.log(obj2)
			}
			else{ console.log ("vacio")}
		}


<<<<<<< HEAD
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


=======
>>>>>>> c6184280b3177c69bf2fd4d4ed3ad3c91b66cc9f
//asistencia
		$(document).ready(function() {	 	 
		
			$("li input[type='button']").on("click", function(){
				var asistencia=$(this);
				if(asistencia.val()=='Presente'){			
					asistencia.removeClass("bg-success");
					asistencia.addClass("bg-secondary"); 
					asistencia.val("Ausente");
				}else{
					asistencia.removeClass("bg-secondary");
					asistencia.addClass("bg-success"); 
					asistencia.val("Presente");
				}				 
			});			
		});


//preguntas
		$(document).ready(function() {
			
			$('#datatable').dataTable({responsive: true});
								
			$("#myModal").on('hidden.bs.modal', function () {
			cleanModalForm();})
				

			
		} );
		
		function validateMyForm(){
			var cellEmty = true;
			$("input[type='text']:not(.HiddenIndex)").each(function(){
				if($(this).val().trim() == ""){
					$(this).addClass("Error");
					 cellEmty= false ;
				}
				else {$(this).removeClass("Error");}
			})
			return  cellEmty;
		}
		
		function validateMyFirstForm(){
			var cellEmty = true;
			$(".HiddenIndex:not(#HiddenIndex)").each(function(){
			if($(this).val().trim() == ""){
			$(this).addClass("Error");
			 cellEmty= false ;
			}
			else {$(this).removeClass("Error");}
			})
			return  cellEmty;
		}
		
		function Addrow(){
		
			if(validateMyForm())
			{	
				var Data = [$("#dato1").val(), $("#dato2").val(), "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>" ];
				$('#datatable').DataTable().row.add(Data).draw();
				
				$("#closeMyModal").click(); //Cerrar modal 
				$("#show").prop("disabled", false);
			}
		}
		
		function cleanModalForm(){
			$("input[type='text']:not(.HiddenIndex)").val("");
			$("input[type='text']:not(#HiddenIndex)").removeClass("Error");
		}
		
		function removeRow(bottom){

			var ActualRow = $(bottom).parents("tr");			         
			DeleteForm(ActualRow);
			$("#btn_modalDelete").click(); // open the modal for delete row 

		}
		
		function DeleteForm(ActualRow){
		
			$("#yesDelete").click( function(){	
			
				$('#datatable').DataTable().row(ActualRow).remove().draw();
				
				var tableLength = $('#datatable').DataTable().column( 0 ).data().length;	
				if(tableLength== 0){
					$("#show").prop("disabled", true);
				}
				$("#closeDeleteModal").click();
			})	
			
		}
		
		function editRow(bottom){	
			$("#Add").css("display", "none");
			$("#edit").css("display", "inline");
			$("#titleModel").text("Edit Row");
			var ActualRow = $(bottom).parents("tr");
			var rowIndex = $('#datatable').DataTable().row(ActualRow).index();
			var row = $('#datatable').DataTable().row(rowIndex).data()
			$("#dato1").val(row[0]);
			$("#dato2").val(row[1]);
			$("#HiddenIndex").val(rowIndex);			
		}
		
		
		function editRowBotton(){	
			
			if(validateMyForm())
			{	
				var Data = [$("#dato1").val(), $("#dato2").val(), "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>", " <input type = \"text\" class=\"form-control\" id = \"HiddenIndex\"  style=\"display:none\"> </input>" ];
				$('#datatable').DataTable()
				.row($("#HiddenIndex").val()).data(Data).draw();
				
				$("#Add").css("display", "inline");
				$("#edit").css("display", "none");
				$("#titleModel").text("Add new Row to table");
					$("#closeMyModal").click();
			}
		}
		
		function showMyObj(){
			if(validateMyFirstForm())
			{
				var myData = [];
				$("tbody tr").each(function ( value, index ) {
					var rowIndex = $('#datatable').DataTable().row(value).index();
					var row = $('#datatable').DataTable().row(rowIndex).data()
					var obj = {first: row[0] , second :row[1]}
					myData.push(obj);
				} );
				
				var obj2 = {first:$("#firstInput").val() , second:$("#secondInput").val(), Fifth: myData }
				console.log(obj2)
			}
			else{ console.log ("emty slot")}
		}
		
		
	(function () {
    $('button').click(function () {
        $('#seccionParrafos').fadeToggle(1000);
    });
});

(function () {
    $('.form-parametros').submit(function (event) {
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
});
(function () {
    $('.form-carrera').submit(function (event) {
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
});
(function () {
    $('.form-materia').submit(function (event) {
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
});
