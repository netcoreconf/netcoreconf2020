$(document).ready(function() {

    $("#clock").countdown("2019/01/26 20:00:00", function(event) {
        $(this).html(event.strftime('' +
            '<div class="cbox clearfix"><span class="cbox-digit">%D</span> <span class="cbox-txt">Días</span></div>' +
            '<div class="cbox clearfix"><span class="cbox-digit">%H</span> <span class="cbox-txt">Horas</span></div>' +
            '<div class="cbox clearfix"><span class="cbox-digit">%M</span> <span class="cbox-txt">Min</span></div>' +
            '<div class="cbox clearfix"><span class="cbox-digit">%S</span> <span class="cbox-txt">Seg</span></div>'
        ));
    });

});