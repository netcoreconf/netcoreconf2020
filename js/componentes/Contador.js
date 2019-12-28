$(document).ready(function() {

    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).html(event.strftime('' +
                '<div class="cbox clearfix"><span class="cbox-digit">%D</span> <span class="cbox-txt">Días</span></div>' +
                '<div class="cbox clearfix"><span class="cbox-digit">%H</span> <span class="cbox-txt">Horas</span></div>' +
                '<div class="cbox clearfix"><span class="cbox-digit">%M</span> <span class="cbox-txt">Min</span></div>' +
                '<div class="cbox clearfix"><span class="cbox-digit">%S</span> <span class="cbox-txt">Seg</span></div>'
            ));
        }).on('finish.countdown', function () {
            alert("Finish");
        });
    });
});