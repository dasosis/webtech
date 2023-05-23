function validateForm(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById('errorMessage').textContent = '';
    document.getElementById('confirmPassword').classList.remove('error');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('errorMessage').textContent = 'Invalid email format.';
      return;
    }

    if (password !== confirmPassword) {
      document.getElementById('errorMessage').textContent = 'Passwords do not match.';
      document.getElementById('confirmPassword').classList.add('error');
      return;
    }
    alert('Form submitted successfully!');
  }
  