$(window).scroll(function(){
  var nav = $("nav");
  var headerTop =  nav.offset().top;
  var scrollTop = $(window).scrollTop();
  if(headerTop < scrollTop){
    $("header").addClass("fixed");
    $(".ghost").removeClass("hidden");
}else{
    $("header").removeClass("fixed");
    $(".ghost").addClass("hidden");
}
});  

window.addEventListener("click",function(){
    const items = document.querySelectorAll("header ul li a");
    items.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector("a.activePage").classList.remove("activePage");
            item.classList.add("activePage");
        })
    })
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
  dots[slideIndex-1].className += " active";
}
