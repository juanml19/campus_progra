//login
$(function () {
    $('form').submit(function (event) { 
    var input = $(this).children('.password').val();

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
		
		
	