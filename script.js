// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact form validation (basic)
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      e.preventDefault();
    }
  });
  