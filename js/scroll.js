function scrollToTop(id) {
    $(window).animate({
        scrollTop: $(id).offset().top
    }, 400)
}