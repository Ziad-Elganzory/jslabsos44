document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('validation-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const emailInput = document.getElementById('input-email');
    const passwordInput = document.getElementById('input-password');
    const emailAlert = document.querySelector('.alert-email');
    const passwordAlert = document.querySelector('.alert-password');

    const emailRegex = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
    const passwordRegex = /(?=^.{8,}$)(?=.*[A-Z])(?=.*[a-z]).*$/;

    emailAlert.style.display = emailRegex.test(emailInput.value) ? 'none' : 'block';
    passwordAlert.style.display = passwordRegex.test(passwordInput.value) ? 'none' : 'block';

    if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value)) {
      alert('Form submitted successfully!');
    }
  }
});
