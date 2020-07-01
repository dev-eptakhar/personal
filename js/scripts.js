$(window).on('load', function(){
    $('.skill-view').each(function() {
        thisval = $(this).text();
        $(this).parent('.skill-per').animate({
            width: thisval
        },2000)
    });
});