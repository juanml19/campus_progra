jQuery(document).ready(function () {
    jQuery('.tables').DataTable( {
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        }
    });
    
    /* js grupo  Jose */
    jQuery('#datatable').dataTable({
        responsive: true
    });
	jQuery("#myModal").on('hidden.bs.modal', function (){
        cleanModalForm();
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
	
function validateMyFirstForm(){
    var cellEmty = true;
    jQuery(".HiddenIndex:not(#HiddenIndex)").each(function(){
        if(jQuery(this).val().trim() == ""){
			jQuery(this).addClass("Error");
			 cellEmty= false ;
        }else{
            jQuery(this).removeClass("Error");}
    })
    return  cellEmty;
}
		
function Addrow(){
    if(validateMyForm()){	
        var Data = [jQuery("#idmateria").val(), jQuery("#idgrupo").val(),jQuery("#idnumerogrupo").val(), jQuery("#idhorario").val()
				, "<td><button type=\"button\" class=\"glyphicon glyphicon-trash\" onclick = \"removeRow((this))\"></button></td> <td> <button type=\"button\"data-toggle=\"modal\" data-target=\"#myModal\" onclick =\"editRow((this))\" class = \"glyphicon glyphicon-pencil\"> </td>" ];
				jQuery('#datatable').DataTable().row.add(Data).draw();
				
				jQuery("#closeMyModal").click(); //Cerrar modal 
				jQuery("#show").prop("disabled", false);
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
