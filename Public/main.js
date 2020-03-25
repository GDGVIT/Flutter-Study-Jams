let hiddenDiv = $('.hidden');
let seeMore = $('.see-more');
let seeLess = $('.see-less');

seeMore.on('click', function(){
    hiddenDiv.slideToggle('hidden');
    $(this).hide();
});

seeLess.on('click', function(){
    hiddenDiv.slideToggle('hidden');
    seeMore.show();
})