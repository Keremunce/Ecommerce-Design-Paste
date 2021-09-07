$(document).ready(function(){
    const nexticon = '<i class="fas fa-arrow-right"></i>'
    const previcon = '<i class="fas fa-arrow-left"></i>'

    $('.mainSlider').owlCarousel({
        // loop:true,
        autoplay:false,
        margin:10,
        nav:true,
        navText:[previcon, nexticon],
        dots: false,
        items: 4

    });
});
