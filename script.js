'user strict';

const visibilityToggle = document.querySelector('.visibility');
const passwordInput = document.querySelector('.password-container input');

let password = true;

visibilityToggle.addEventListener('click', function () {
  if (password) {
    passwordInput.setAttribute('type', 'text');
    visibilityToggle.innerHTML = 'visibility';
  } else {
    passwordInput.setAttribute('type', 'password');
    visibilityToggle.innerHTML = 'visibility_off';
  }
  password = !password;
});

// ----------------------------------------------

const log_in_btn = document.getElementById('login-btn');
const sign_up_btn = document.getElementById('signup-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('signup-mode');
});

log_in_btn.addEventListener('click', () => {
  container.classList.remove('signup-mode');
});
