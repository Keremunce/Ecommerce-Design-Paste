 $(".nav__li").on('click', function(){
    $(".nav__li").addClass("active");
    $(".nav__li-2").removeClass("active");
    $(".nav__li-3").removeClass("active");
    $(".nav__li-4").removeClass("active");
    $(".nav__li-5").removeClass("active");
    $(".nav__li-6").removeClass("active");
    $(".nav__li-7").removeClass("active");

  });
  $(".nav__li-2").on('click', function(){
    $(".nav__li").removeClass("active");
    $(".nav__li-2").addClass("active");
    $(".nav__li-3").removeClass("active");
    $(".nav__li-4").removeClass("active");
    $(".nav__li-5").removeClass("active");
    $(".nav__li-6").removeClass("active");
    $(".nav__li-7").removeClass("active");

  });
   $(".nav__li-3").on('click', function(){
    $(".nav__li").removeClass("active");
    $(".nav__li-2").removeClass("active");
    $(".nav__li-3").addClass("active");
    $(".nav__li-4").removeClass("active");
    $(".nav__li-5").removeClass("active");
    $(".nav__li-6").removeClass("active");
    $(".nav__li-7").removeClass("active");

  });
$(".nav__li-4").on('click', function(){
    $(".nav__li").removeClass("active");
    $(".nav__li-2").removeClass("active");
    $(".nav__li-3").removeClass("active");
    $(".nav__li-4").addClass("active");
    $(".nav__li-5").removeClass("active");
    $(".nav__li-6").removeClass("active");
    $(".nav__li-7").removeClass("active");

  });
 $(".nav__li-5").on('click', function(){
    $(".nav__li").removeClass("active");
    $(".nav__li-2").removeClass("active");
    $(".nav__li-3").removeClass("active");
    $(".nav__li-4").removeClass("active");
    $(".nav__li-5").addClass("active");
    $(".nav__li-6").removeClass("active");
    $(".nav__li-7").removeClass("active");

  });
$(".nav__li-6").on('click', function(){
	$(".nav__li").removeClass("active");
	$(".nav__li-2").removeClass("active");
	$(".nav__li-3").removeClass("active");
	$(".nav__li-4").removeClass("active");
	$(".nav__li-5").removeClass("active");
	$(".nav__li-6").addClass("active");
  $(".nav__li-7").removeClass("active");

});
$(".nav__li-7").on('click', function(){
  $(".nav__li").removeClass("active");
  $(".nav__li-2").removeClass("active");
  $(".nav__li-3").removeClass("active");
  $(".nav__li-4").removeClass("active");
  $(".nav__li-5").removeClass("active");
  $(".nav__li-6").removeClass("active");
  $(".nav__li-7").addClass("active");
});
// SLIDER=============================

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}
// SLIDER=============================



$(".button-minus").click(function(){
  var sayac = parseInt( $("#sayac").val());

  if ( sayac <= 0){
    $("#sayac").val(0);
  }else {
    $("#sayac").val(sayac -1);

    
  var sayacSayi = parseInt($("#sayac").val());
  var price = parseFloat($(".price").html());
  var total = parseFloat(price * sayacSayi).toFixed(2);
    $(".Price_totalValue").html(total);
  }
})

$(".button-plus").click(function(){
  var sayac = parseInt($("#sayac").val());
  var stok = parseInt($("#stok").html());

 if (sayac >= stok ) {
  $("#sayac").val(stok);
 }else {
  $("#sayac").val(sayac + 1);
  if (sayac == -1 ) {
    $(".Price_totalValue").html(0);
  }else {
  var sayacSayi = parseInt($("#sayac").val());
  var price = parseFloat($(".price").html() )
  var total = parseFloat(price * sayacSayi).toFixed(2);

    $(".Price_totalValue").html(total);
  }

 }

});
let data = fetch("data.json")
  .then(response => response.json())
  .then(data => {
    $(".product-1").attr("src", data.products[0].image);
    $(".product-2").attr("src", data.products[1].image);
    $(".product-3").attr("src", data.products[2].image);
    $(".product-4").attr("src", data.products[3].image);
    
  })

// ALL CATEGORIES

  $(document).ready(function(){
    $(".AllCategories").click(function(){
      
      $(".AllCategories_DD_ul").css("opacity","1");
      $(".AllCategories_DD_ul").css("visibility", "visible");
      $(".AllCategories_DD_ul").slideToggle("slow");
    });
  });
// ALL CATEGORIES
