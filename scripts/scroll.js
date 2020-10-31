function scrolling() {
    if (window.pageYOffset > $("header").height()) {
        $("header").css({ "background": "#ffffff" });
        $("#header-logo-text").css({ "margin-top": "0.1vw" });
        $("#header-logo-icon").hide();
    } else {
        $("header").css({ "background": "linear-gradient(to bottom, #ffffff, #ffffff55)" }, 300);
        $("#header-logo-text").css({ "margin-top": "-0.6vw" });
        $("#header-logo-icon").show();
    }
}

$(document).ready(function () {

    $(".menu-link").click(function () {
        toelement = this.attr("href");
        if (toelement != undefined && toelement != "") {
            $("html, body").animate({ scrollTop: $(toelement).offset().top }, 500);
        }
    });

});
