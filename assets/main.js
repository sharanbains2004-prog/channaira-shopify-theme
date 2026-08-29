// Minimal JS for mobile menu toggle and newsletter feedback
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var mm = document.getElementById('mobile-menu');
  if(toggle && mm){
    toggle.addEventListener('click', function(){
      mm.classList.toggle('open');
    });
  }

  var form = document.getElementById('newsletter-form');
  if(form){
    form.addEventListener('submit', function(e){
      var email = document.getElementById('news-email');
      var msg = document.getElementById('news-msg');
      if(!email.value){
        e.preventDefault();
        msg.textContent = 'Please enter an email address.';
        msg.style.color = 'crimson';
      } else {
        // Let the form post to /contact — show a friendly message
        msg.textContent = 'Thanks — check your inbox for a confirmation.';
        msg.style.color = 'green';
      }
    });
  }
});
