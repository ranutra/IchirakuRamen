// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//Contact Us validation

function submit() {
  form = document.getElementById("form");
  email = document.getElementById("email");
  ramen = document.getElementById("dot-1");
  dryramen = document.getElementById("dot-2");
  agree = document.getElementById("agree");
  if (!email.value.endsWith("@gmail.com")) {
    error.innerHTML = "Email must end with '@gmail.com'";
    alert("Email must end with '@gmail.com'");
  } else if (!(ramen.checked || dryramen.checked)) {
    error.innerHTML = "Please choose the type of ramen you want";
    alert("Please choose the type of ramen you want");
  } else if (!agree.checked) {
    error.innerHTML = "You must agree to receive newsletter";
    alert("You must agree to receive newsletter");
  } else {
    error.innerHTML = "";
    alert("Successfull!");
    form.submit(); //Kirim data
  }
}
