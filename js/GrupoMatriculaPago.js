	
			$(document).ready(function() {
			
			$('#datatable').dataTable({responsive: true});
								
			$("#myModal").on('hidden.bs.modal', function () {
			cleanModalForm();})
				
$('#btnMa').click(function(){
    var elemento=document.querySelector('#btnMa');
		
         elemento.setAttribute("value", "-");
	
		 Matricular('#fila2');
});

$('#btnMa1').click(function(){
    var elemento=document.querySelector('#btnMa1');
         elemento.setAttribute("value", "-");
		 Matricular('#fila3');
	
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
				, "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>" ];
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
			
				var Data = [$("#idmateria").val(), $("#idgrupo").val(),$("#idnumerogrupo").val(), document.querySelector('input[name=idhorario]:checked').value,  "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>", " <input type = \"text\" class=\"form-control\" id = \"HiddenIndex\"  style=\"display:none\"> </input>" ];
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


  	


