function gtag() {
    dataLayer.push(arguments)
}

function loadTerminal(t) {
    new Typed(".shell-line", {
        typeSpeed: 40,
        strings: ["dotnet new console -o myApp", "cd myApp", "vim Program.cs", "dotnet run", "dotnet new console -o myApp", "cd myApp", "vim Program.cs", "dotnet run", "dotnet new console -o myApp", "cd myApp", "vim Program.cs", "dotnet run", "dotnet new console -o myApp", "cd myApp", "vim Program.cs", "dotnet run", "dotnet new console -o myApp", "cd myApp", "vim Program.cs", "dotnet run"],
        showCursor: !0,
        cursorChar: ".",
        fadeOut: !0,
        fadeOutDelay: 1e3
    })
}

function setCookie(t, o, e) {
    var n = new Date;
    n.setTime(n.getTime() + 24 * e * 60 * 60 * 1e3);
    var i = "expires=" + n.toUTCString();
    document.cookie = t + "=" + o + ";" + i + ";path=/"
}

function getCookie(t) {
    for (var o = t + "=", e = decodeURIComponent(document.cookie).split(";"), n = 0; n < e.length; n++) {
        for (var i = e[n];
            " " === i.charAt(0);) i = i.substring(1);
        if (0 === i.indexOf(o)) return i.substring(o.length, i.length)
    }
    return ""
}
window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-123370463-1"), document.getElementById("shell-wrap") && $(document).ready(loadTerminal), $(document).ready(function () {
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
    })   
}),
    function () {
        "use strict";
        var t = document.querySelector(".cookiealert"),
            o = document.querySelector(".acceptcookies");
        t.offsetHeight, getCookie("acceptCookies") || t.classList.add("show"), o.addEventListener("click", function () {
            setCookie("acceptCookies", !0, 60), t.classList.remove("show")
        })
    }(),
    function (e) {
        "use strict";
        var t = function () { };
        t.prototype.initNavbarStickey = function () {
            e(window).scroll(function () {
                50 <= e(window).scrollTop() ? e(".sticky").addClass("darkheader") : e(".sticky").removeClass("darkheader")
            })
        }, t.prototype.initMagnificPopup = function () {
            e(".video-play-icon-trigger").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            })
        }, t.prototype.initNavbarToggler = function () {
            e(window).scrollTop();
            e(".navbar-toggle").on("click", function (t) {
                e(this).toggleClass("open"), e("#navigation").slideToggle(400)
            }), e(".navigation-menu>li").slice(-2).addClass("last-elements"), e(".menu-arrow,.submenu-arrow").on("click", function (t) {
                e(window).width() < 992 && (t.preventDefault(), e(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))
            })
        }, t.prototype.initSmoothLink = function () {
            e(".navigation-menu a").on("click", function (t) {
                var o = e(this);
                e("html, body").stop().animate({
                    scrollTop: e(o.attr("href")).offset().top - 0
                }, 1500, "easeInOutExpo"), t.preventDefault()
            })
        }, t.prototype.initScrollspy = function () {
            e("#navigation").scrollspy({
                offset: 50
            })
        }, t.prototype.init = function () {
            this.initNavbarStickey(), this.initMagnificPopup(), this.initNavbarToggler(), this.initSmoothLink(), this.initScrollspy()
        }, e.NetCoreConf = new t, e.NetCoreConf.Constructor = t
    }(window.jQuery),
    function (t) {
        "use strict";
        window.jQuery.NetCoreConf.init()
    }(), $(function () {
        $('a[data-toggle="tab"]').on("click", function (t) {
            window.localStorage.setItem("activeTab", $(t.target).attr("href"))
        });
        var t = window.localStorage.getItem("activeTab");
        t && ($('#myTab a[href="' + t + '"]').tab("show"), window.localStorage.removeItem("activeTab"))
    });