$(document).ready(function () {
    $('#list > li').click(function (event) {
        $(this).find('.arrow').toggleClass('active');
        $(this).children("ul").slideToggle();
        event.stopPropagation();
    });
    let layout = $('.layout');
    let body = $('body')
    $('#contact').on('click', function() {
        body.css('overflow-y', 'hidden');
        layout.css('display', 'flex');
    });
    layout.on('click', function(e) {
        if(this===e.target) {
            layout.css('display', 'none');
            body.css('overflow-y', 'scroll');
        }
    });
    $('#krestik').on('click', function(e) {
        if(this===e.target) {
            layout.css('display', 'none');
            body.css('overflow-y', 'scroll');
        }
    });
});