function myFunctionSendPayment() {
    alert("La matricula ha sido reservada exitosamente.");
}	
			

$(document).ready(function() {
			
			$('#datatable').dataTable({responsive: true});
					$('#datatableMaterias').dataTable({responsive: true});			
			$("#myModal").on('hidden.bs.modal', function () {
			cleanModalForm();})
		
			
$('#btnMa').click(function(){
	if($("#btnMa").val()=="+"){
	
    var elemento=document.querySelector('#btnMa');
		
         elemento.setAttribute("value", "-");
	
		 Matricular('#fila2');
	}else{
		
		 var elemento=document.querySelector('#btnMa');
         elemento.setAttribute("value", "+");
		 DesMatricular('#fila2');
	}
});

$('#btnMa1').click(function(){

 if($("#btnMa1").val()=="+"){
	;
    var elemento=document.querySelector('#btnMa1');
		
         elemento.setAttribute("value", "-");
	
		 Matricular('#fila3');
	}else{
	
		 var elemento=document.querySelector('#btnMa1');
         elemento.setAttribute("value", "+");
		 DesMatricular('#fila3');
	}
});

	//valida que los password sean iguales
$("#psw").keyup(function(){
var pass1=$("#psw").val().trim();
var pass2=$("#psw1").val().trim();

if(pass1==pass2){
$('#error2').text("Coinciden").css("color","green");
document.getElementById("btnEnviar").style = "visibility:visible";

}else{
$('#error2').text(" No Coinciden").css("color","red");
document.getElementById("btnEnviar").style = "display:none";
}
if(pass2==""){
$('#error2').text("No se pueden dejar en blanco").css("color","red");
document.getElementById("btnEnviar").style = "display:none";
}
});

$("#pswA").keyup(function(){

var passA=$("#pswA").val().trim().length-1;
var passA1=$("#pswA").val().trim();
if(passA<4){
$('#error3').text("El codigo es de 5 digitos").css("color","red");
}else{
	$('#error3').text("El codigo es de 5 digitos").css("color","green");
}
if(passA1=""){
$('#error3').text("No se pueden dejar en blanco").css("color","red");
}
});

//valida que el nombre de usuario no este vacio
$("#userid").keyup(function(){

var pass1=$("#userid").val().trim();
var pass2=$("#userid").val().trim().length-1;
if(pass2>5){
if(pass1==""){
document.getElementById("validaUser").disabled = true;
}else{
document.getElementById("validaUser").disabled = false;
}
}else{
document.getElementById("validaUser").disabled = true;
}
});	

$('#validaUser').click(function(){
	$('#error1').text("El usuario si existe,se ha enviado un codigo a su correo, cuando ingrese esta sera su contraseña actual").css("color","green");
	
	document.getElementById("contra").style = "visibility:visible";	
	
});
$('#btnEnviar').click(function(){

	$("#userid").val("");
	$("#pswA").val("");
	$("#psw1").val("");
	$("#psw").val("");
});

 
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
				var Data = [$("#idmateria").val(), $("#idgrupo").val(),$("#idnumerogrupo").val(),  document.querySelector('input[name=idhorario]:checked').value
				, "<td><button type=\"button\" class=\"btn btn-danger btn-md\" onclick = \"removeRow((this))\"><i class=\"fas fa-trash-alt\"></i></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"btn btn-warning btn-md\"><i class=\"fas fa-edit FontAwesome\"></i></button> </td>" ];
						//<i class=\"fas fa-trash-alt\"></i></button>
				$('#datatable').DataTable().row.add(Data).draw();
				
				$("#closeMyModal").click();
				$("#show").prop("disabled", false);
			}
		}
		
		function cleanModalForm(){
			$("input[type='text']:not(.HiddenIndex)").val("");
			$("input[type='number']:not(.HiddenIndex)").val("");
			$("input[type='radio']:not(.HiddenIndex)").attr('checked',false);
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
			$("#titleModel").text("Editar");
			var ActualRow = $(bottom).parents("tr");
			var rowIndex = $('#datatable').DataTable().row(ActualRow).index();
			var row = $('#datatable').DataTable().row(rowIndex).data()
			$("#idmateria").val(row[0]);
			$("#idgrupo").val(row[1]);
			$("#idnumerogrupo").val(row[2]);
			$("#idhorario").val(row[3]);
			$("#HiddenIndex").val(rowIndex);			
		}

		
	function editRowBotton(){	
			
			if(validateMyForm())
			{	
			
				var Data = [$("#idmateria").val(), $("#idgrupo").val(),$("#idnumerogrupo").val(), document.querySelector('input[name=idhorario]:checked').value,  "<td><button type=\"button\" class=\"btn btn-danger btn-md\" onclick = \"removeRow((this))\"><i class=\"fas fa-trash-alt\"></i></button></td><td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"btn btn-warning btn-md\"><i class=\"fas fa-edit FontAwesome\"></i></button> </td>", " <input type = \"text\" class=\"form-control\" id = \"HiddenIndex\"  style=\"display:none\"> </input>" ];
				
				
				
				$('#datatable').DataTable()
				.row($("#HiddenIndex").val()).data(Data).draw();
				
				$("#Add").css("display", "inline");
				$("#edit").css("display", "none");
				$("#titleModel").text("Agregar un nuevo curso");
					$("#closeMyModal").click();
		
			}
		}
		function SoloNumeros(evt){
            if(window.event){
            keynum = evt.keyCode; 
            }
            else{
            keynum = evt.which; 
             } 
             if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ){
            return true;
            }
             else{
          return false;
         }
         }
		 
		 	function Alfanumericos(evt){
            if(window.event){
            keynum = evt.keyCode; 
            }
            else{
            keynum = evt.which; 
             } 
             if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6 ||(keynum > 64 && keynum < 91) ||(keynum > 96 && keynum < 123) ){
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
				$("tbody tr").each(function ( value, index ) {
					var rowIndex = $('#datatable').DataTable().row(value).index();
					var row = $('#datatable').DataTable().row(rowIndex).data()
					var obj = {first: row[0] , second :row[1],third: row[2],fourth: row[3]}
					myData.push(obj);
				} );
				
				var obj2 = {first:$("#idmateria").val() , second:$("#idgrupo").val(),third:$("#idnumerogrupo").val() , fourth:$("#idhorario").val(), Fifth: myData }
				console.log(obj2)
			}
			else{ console.log ("vacio")}
		}
	
		function Matricular(text) {
		
			var row = $(text).detach();
	
			$("#prematicula").append(row);
			OcultarTablas();
			                
		
		
			document.getElementById("Pago").style = "visibility:visible"
		}
	function DesMatricular(text) {
		
			var row = $(text).detach();
	
			$("#Matricula").append(row);
			ShowTablas();
			                
		}
		
		function OcultarTablas(){
	
			var num = 	document.getElementById('Matricula').getElementsByTagName('tr').length-1;
	
       if(num==0){
	document.getElementById("Dispo").style = "display:none";
	document.getElementById("Matricula").style = "display:none";
}
}


	function ShowTablas(){
	
			var num = 	document.getElementById('Matricula').getElementsByTagName('tr').length-1;
	
       if(num>0){
	document.getElementById("Dispo").style = "visibility:visible"
	document.getElementById("Matricula").style = "visibility:visible";
}
if(num==2){
		document.getElementById("Pago").style = "display:none";
}
}
//juan
function Addrow2(){
			//cod-carr-nom-cred-precio
			if(validateMyForm())
			{	
				var Data = [$("#cod").val(), $("#carr").val(),$("#nom").val(),$("#cred").val(),$("#precio").val(),"<td><a  class=\"btn btn-primary\" href = \"grupos.html\" role=\"button\"><i class=\"fa fa-plus\"></i></a></td>",
				 "<td><button type=\"button\" class=\"btn btn-danger btn-md\" onclick = \"removeRow((this))\"><i class=\"fas fa-trash-alt\"></i></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"btn btn-warning btn-md\"><i class=\"fas fa-edit FontAwesome\"></i></button> </td>" ];
						//<i class=\"fas fa-trash-alt\"></i></button>
				$('#datatableMaterias').DataTable().row.add(Data).draw();
					
			cleanModalForm();
				$("#closeMyModal").click();
				$("#show").prop("disabled", false);
			}
		}
		function removeRow2(bottom){

			var ActualRow = $(bottom).parents("tr");			         
			DeleteForm(ActualRow);
			$("#btn_modalDelete").click(); // open the modal for delete row 

		}
		
		function DeleteForm2(ActualRow){
		
			$("#yesDelete").click( function(){	
			
				$('#datatableMaterias').DataTable().row(ActualRow).remove().draw();
				
				var tableLength = $('#datatableMaterias').DataTable().column( 0 ).data().length;	
				if(tableLength== 0){
					$("#show").prop("disabled", true);
				}
				$("#closeDeleteModal").click();
			})	
			
		}
		
		function editRow2(bottom){	
			$("#Add").css("display", "none");
			$("#edit").css("display", "inline");
			$("#titleModel").text("Editar");
			var ActualRow = $(bottom).parents("tr");
			var rowIndex = $('#datatableMaterias').DataTable().row(ActualRow).index();
			var row = $('#datatableMaterias').DataTable().row(rowIndex).data()
			
			$("#cod").val()(row[0]); 
			$("#carr").val()(row[1]);
			$("#nom").val()(row[2]);
			$("#cred").val()(row[3]);
			$("#precio").val()(row[4]);
			
			$("#HiddenIndex").val(rowIndex);			
		}

		
		function editRowBotton2(){	
			
			if(validateMyForm())
			{	
			
				var Data = [$("#cod").val(), $("#carr").val(),$("#nom").val(),$("#cred").val(),$("#precio").val(),"<td><a  class=\"btn btn-primary\" href = \"grupos.html\" role=\"button\"><i class=\"fa fa-plus\"></i></a></td>",  "<td><button type=\"button\" class=\"btn btn-danger btn-md\" onclick = \"removeRow((this))\"><i class=\"fas fa-trash-alt\"></i></button></td><td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"btn btn-warning btn-md\"><i class=\"fas fa-edit FontAwesome\"></i></button> </td>", " <input type = \"text\" class=\"form-control\" id = \"HiddenIndex\"  style=\"display:none\"> </input>" ];
				
				
				
				$('#datatableMaterias').DataTable()
				.row($("#HiddenIndex").val()).data(Data).draw();
				
				$("#Add").css("display", "inline");
				$("#edit").css("display", "none");
				$("#titleModel").text("Agregar una nueva materia");
					$("#closeMyModal").click();
		
			}
		}
  		function showMyObj2(){
			if(validateMyFirstForm())
			{
				var myData2 = [];
				$("tbody tr").each(function ( value, index ) {
					var rowIndex = $('#datatableMaterias').DataTable().row(value).index();
					var row = $('#datatableMaterias').DataTable().row(rowIndex).data()
					var obj = {first: row[0] , second :row[1],third: row[2],fourth: row[3],fifth:row[4]}
					myData.push(obj);
				} );
				
				var obj2 = {first:$("#cod").val(), second:$("#carr").val(),third:$("#nom").val(), fourth:$("#cred").val(), fifth:$("#precio").val(),sixth: myData2}
				console.log(obj2)
			}
			else{ console.log ("vacio")}
		}



