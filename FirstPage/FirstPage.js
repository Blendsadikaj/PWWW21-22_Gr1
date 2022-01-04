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
    if(sessionStorage.getItem("user") != null){
      document.getElementById("login").style.display = "none";
      alert("You are already logged in");
    }
      
    else {
      hidden = false;
      sessionStorage.setItem("user",document.getElementById("emailLogin").value);
    }
  }
  else{
    if(sessionStorage.getItem("user") != null){
      alert("You are already logged in");
      document.getElementById("sign-up").style.display = "none";
    }
      
    else{
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;

      if(password !== confirmPassword){
        alert("You entered different password on confirm password");
      }
      else{
        sessionStorage.setItem("user",document.getElementById("email").value);
      }
    } 
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
    document.getElementById("logoutButton").style.display = "inline-block";
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("signupButton").style.display = "none";
  }
  else{
    document.getElementById("logoutButton").style.display = "none";
  }
}

function contactUs(){

  let userName = document.getElementById("name").value;
  let email = document.getElementById("userEmail").value;
  let subject = document.getElementById("subject").value;
  let userMessage = document.getElementById("msg").value;

  if(userMessage != '' && subject != '' && email != '' && userName != ''){
    window.open("mailto:blendsadikaj2@gmail.com", "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
    document.getElementById("contactUsMessage").submit();
  }

  $("#contactUsMessage").submit(function (e) {
    e.preventDefault();
});

 
  
}
