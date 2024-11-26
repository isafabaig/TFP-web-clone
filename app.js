// ALERT
document.getElementById('call').addEventListener("click",function(){
    var message = "Contact us through our social media accounts"
    alert(message);
})
// LOGIN ACCOUNT

document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("signin-main").style.display = "block";
  });
  
  document.getElementsByClassName("ccc")[0].addEventListener("click", function() {
    document.getElementById("signin-main").style.display = "none";
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("signin-main").style.display = "none";
  });

// GO TO TOP BUTTON 

let goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

goTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

