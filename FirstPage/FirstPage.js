var hidden = true;

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
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function login() {
  document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
  document.getElementById("login").style.display = "block";
}

function closeLogin() {
  document.getElementById("login").style.display = "none";
  document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';
}

function signUp() {
  document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
  document.getElementById("sign-up").style.display = "block";
}

function closeSignUp() {
  document.getElementById("sign-up").style.display = "none";
  document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';
}

function showAlert(action){
  if(action === "login"){
    if(sessionStorage.getItem("user") != null)
      alert("You are already logged in")
    else {
      hidden = false;
      sessionStorage.setItem("user",document.getElementById("emailLogin").value);
    }
      
  }
  else{
    if(sessionStorage.getItem("user") != null)
      alert("You are already logged in")
    else sessionStorage.setItem("user",document.getElementById("email").value);
  }
    
}

function logout(){
  sessionStorage.removeItem("user");
  alert("You logged out");
  location.reload();
}

window.onload = function(){
  let personEmail = sessionStorage.getItem("user")
  document.getElementById("username").innerHTML = personEmail;
  if(sessionStorage.getItem("user") != null){
    console.log("Test");
    document.getElementById("logoutButton").style.display = "inline-block";
  }
  else{
    console.log("Test");
    document.getElementById("logoutButton").style.display = "none";
  }
}
