function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(){

    if (isScrolledIntoView('.timeline .title') === true) {
        $('.timeline .title').addClass('in-view')
    }
    if (isScrolledIntoView('.featured .title') === true) {
        $('.featured .title').addClass('in-view')
    }

});