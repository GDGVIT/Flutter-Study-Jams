let bars = $('.menu-toggle');
let icon = $('.fa-bars');
let icon2 = $('.fa-times');
let nav = $('.menu');

bars.on('click', function(){
    nav.slideToggle('active');
});