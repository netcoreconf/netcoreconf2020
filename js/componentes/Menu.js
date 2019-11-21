! function ($) {
    "use strict";

    var NetCoreConf = function () { };

    //scroll
    NetCoreConf.prototype.initNavbarStickey = function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".sticky").addClass("darkheader");
            } else {
                $(".sticky").removeClass("darkheader");
            }
        });
    },

        NetCoreConf.prototype.initMagnificPopup = function () {
            $('.video-play-icon-trigger').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },

        NetCoreConf.prototype.initNavbarToggler = function () {
            var scroll = $(window).scrollTop();

            $('.navbar-toggle').on('click', function (event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });

            $('.navigation-menu>li').slice(-2).addClass('last-elements');

            $('.menu-arrow,.submenu-arrow').on('click', function (e) {
                if ($(window).width() < 992) {
                    e.preventDefault();
                    $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
                }
            });
        },

        NetCoreConf.prototype.initSmoothLink = function () {
            $('.navigation-menu a').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        NetCoreConf.prototype.initScrollspy = function () {
            $("#navigation").scrollspy({
                offset: 50
            });
        },
        

        NetCoreConf.prototype.init = function () {
            this.initNavbarStickey();
            this.initMagnificPopup();
            this.initNavbarToggler();
            this.initSmoothLink();
            this.initScrollspy();
        },
        //init
        $.NetCoreConf = new NetCoreConf, $.NetCoreConf.Constructor = NetCoreConf
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.NetCoreConf.init();
    }(window.jQuery);