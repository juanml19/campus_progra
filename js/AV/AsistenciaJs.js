 
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


