function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    
    if ($(elem).length) {
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
}

$(window).scroll(function(){

    if (isScrolledIntoView('.timeline .title') === true) {
        $('.timeline .title').addClass('in-view')
    }
    if (isScrolledIntoView('.featured .title') === true) {
        $('.featured .title').addClass('in-view')
    }
    if (isScrolledIntoView('.love .title') === true) {
        $('.love .title').addClass('in-view')
    }
    if (isScrolledIntoView('.book-reviews .title') === true) {
        $('.book-reviews .title').addClass('in-view')
    }

});