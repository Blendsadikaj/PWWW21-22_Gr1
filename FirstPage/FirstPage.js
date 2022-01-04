var hidden = true;

$(window).scroll(function () {
  var nav = $("nav");
  var headerTop = nav.offset().top;
  var scrollTop = $(window).scrollTop();
  if (headerTop < scrollTop) {
    $("header").addClass("fixed");
    $(".ghost").removeClass("hidden");
  } else {
    $("header").removeClass("fixed");
    $(".ghost").addClass("hidden");
  }
});

window.addEventListener("click", function () {
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function login() {
  document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
  document.getElementsByClassName('content')[0].style.pointerEvents = "none";
  document.getElementById("loginForm").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';
  document.getElementsByClassName('content')[0].style.pointerEvents = "auto";
}

function signUp() {
  document.getElementsByClassName('content')[0].style.filter = 'blur(4px)';
  document.getElementsByClassName('content')[0].style.pointerEvents = "none";
  document.getElementById("sign-up").style.display = "block";
}

function closeSignUp() {
  document.getElementById("sign-up").style.display = "none";
  document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';
  document.getElementsByClassName('content')[0].style.pointerEvents = "auto";
}

function showAlert(action) {
  if (action === "login") {
    $("#login").submit(function (e) {
      e.preventDefault();
    });
    if (sessionStorage.getItem("user") != null) {
      document.getElementById("login").style.display = "none";
      alert("You are already logged in");
    }
    else {
      hidden = false;

      let username = document.getElementById("emailLogin").value;
      let password = document.getElementById("passwordLogin").value;

      if(username != '' && password != ''){
        sessionStorage.setItem("user", document.getElementById("emailLogin").value);
        document.getElementById("login").submit();
        location.reload();
      }else{
        alert("Type your password");
      }

      
    }
  }
  else {
    $("#signUp").submit(function (e) {
      e.preventDefault();
    });
    if (sessionStorage.getItem("user") != null) {
      alert("You are already logged in");
      document.getElementById("sign-up").style.display = "none";
      document.getElementsByClassName('content')[0].style.filter = 'blur(0px)';
    }

    else {
      let passwordComp = document.getElementById("password");
      let password = passwordComp.value;
      let confirmPassword = document.getElementById("confirmPassword").value;

      var validated = true;

      $(passwordComp).each(function () {
        console.log(this.value);
        if (this.value.length < 8) {
          validated = false;
        } else if (!/\d/.test(this.value)) {
          validated = false;
        } else if (!/[a-z]/.test(this.value)) {
          validated = false;
        } else if (!/[A-Z]/.test(this.value)) {
          validated = false;
        }
        else if (/[^0-9a-zA-Z]/.test(this.value))
          validated = false;
      });

      if (!validated) {
        alert("Your password does not match the criteria")
      } else if (password !== confirmPassword) {
        alert("You entered different password on confirm password");
      }
      else {
        sessionStorage.setItem("user", document.getElementById("email").value);
        document.getElementById("signUp").submit();
        location.reload();
      }
    }
  }
}

function logout() {
  sessionStorage.removeItem("user");
  alert("You logged out");
  location.reload();
}

window.onload = function () {
  let personEmail = sessionStorage.getItem("user")
  document.getElementById("username").innerHTML = personEmail;
  if (sessionStorage.getItem("user") != null) {
    document.getElementById("logoutButton").style.display = "inline-block";
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("signupButton").style.display = "none";
  }
  else {
    document.getElementById("logoutButton").style.display = "none";
  }
}

function contactUs() {

  let userName = document.getElementById("name").value;
  let email = document.getElementById("userEmail").value;
  let subject = document.getElementById("subject").value;
  let userMessage = document.getElementById("msg").value;

  if (userMessage != '' && subject != '' && email != '' && userName != '' && isNameValid(userName)) {
    window.open("mailto:blendsadikaj2@gmail.com", "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
    document.getElementById("contactUsMessage").submit();
  }

  $("#contactUsMessage").submit(function (e) {
    e.preventDefault();
  });
}

function isNameValid(name){
  const re = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$","g");
  // console.log(re.test(name))
  return re.test(name);
}
