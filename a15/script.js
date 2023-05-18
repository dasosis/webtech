function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Reset error messages
    document.getElementById('errorMessage').textContent = '';
    document.getElementById('confirmPassword').classList.remove('error');
  
    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('errorMessage').textContent = 'Invalid email format.';
      return;
    }
  
    // Validate password match
    if (password !== confirmPassword) {
      document.getElementById('errorMessage').textContent = 'Passwords do not match.';
      document.getElementById('confirmPassword').classList.add('error');
      return;
    }
  
    // If all validations pass, submit the form
    // Here, you can perform further actions like AJAX request or form submission to a server
    alert('Form submitted successfully!');
  }
  