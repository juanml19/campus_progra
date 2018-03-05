(function () {
    $('form').submit(function (event) {
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
})();

function myFunctionDelete() {
    alert("Se borrará la Carrera");
}