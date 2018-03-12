
$(document).ready(function() {
			$('#datatableMaterias').dataTable({responsive: true});	
			
								
			$("#myModal").on('hidden.bs.modal', function () {
			cleanModalForm();});

		} );
		function cleanModalForm(){
			$("input[type='text']:not(.HiddenIndex)").val("");
			$("input[type='number']:not(.HiddenIndex)").val("");
			$("input[type='radio']:not(.HiddenIndex)").attr('checked',false);
			$("input[type='text']:not(#HiddenIndex)").removeClass("Error");
		}
		
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
		function validateMyForm2(){
			var cellEmty = true;
			$("input[type='number']:not(.HiddenIndex)").each(function(){
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
function Addrow2(){
			//cod-carr-nom-cred-precio
			if(validateMyForm()&&validateMyForm2())
			{	
				var Data = [$("#cod").val(), $("#carr").val(),$("#nom").val(),document.querySelector('input[name=cred]:checked').value,$("#precio").val(),"<td><a  class=\"btn btn-primary\" href = \"grupos.html\" role=\"button\"><i class=\"fa fa-plus\"></i></a></td>",
				 "<td><button type=\"button\" class=\"btn btn-danger btn-md\" onclick = \"removeRow((this))\"><i class=\"fas fa-trash-alt\"></i></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"btn btn-warning btn-md\"><i class=\"fas fa-edit FontAwesome\"></i></button> </td>" ];
						//<i class=\"fas fa-trash-alt\"></i></button>
				$('#datatableMaterias').DataTable().row.add(Data).draw();
					
			
				$("#closeMyModal").click();
				$("#show").prop("disabled", false);
			}
		}
		function removeRow(bottom){

			var ActualRow = $(bottom).parents("tr");			         
			DeleteForm(ActualRow);
			$("#btn_modalDelete").click(); // open the modal for delete row 

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
		function DeleteForm(ActualRow){
	
			$("#yesDelete").click( function(){	
				
				$('#datatableMaterias').DataTable().row(ActualRow).remove().draw();
				
				var num = 	document.getElementById('datatableMaterias').getElementsByTagName('tr').length-1;
			
				if(num== 0){
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
			var rowIndex = $('#datatableMaterias').DataTable().row(ActualRow).index();
			var row = $('#datatableMaterias').DataTable().row(rowIndex).data()
			
			$("#cod").val(row[0]); 
			$("#carr").val(row[1]);
			$("#nom").val(row[2]);
			$("#cred").val(row[3]);
			$("#precio").val(row[4]);
			
			$("#HiddenIndex").val(rowIndex);			
		}

		
		function editRowBotton(){	
			
			if(validateMyForm()&&validateMyForm2())
			{	
			
				var Data = [$("#cod").val(), $("#carr").val(),$("#nom").val(),document.querySelector('input[name=cred]:checked').value,$("#precio").val(),"<td><a  class=\"btn btn-primary\" href = \"grupos.html\" role=\"button\"><i class=\"fa fa-plus\"></i></a></td>",  "<td><button type=\"button\" class=\"btn btn-danger btn-md\" onclick = \"removeRow((this))\"><i class=\"fas fa-trash-alt\"></i></button></td><td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"btn btn-warning btn-md\"><i class=\"fas fa-edit FontAwesome\"></i></button> </td>", " <input type = \"text\" class=\"form-control\" id = \"HiddenIndex\"  style=\"display:none\"> </input>" ];
				
				
				
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