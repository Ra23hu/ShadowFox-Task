const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const contactForms = document.querySelectorAll('.contact-form');
contactForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');

    if (!nameInput || !emailInput) {
      button.textContent = 'Invalid form';
      return;
    }

    if (!nameInput.value.trim() || !emailInput.value.trim() || !emailInput.value.includes('@')) {
      button.textContent = 'Please check details';
      setTimeout(() => {
        button.textContent = 'Submit';
      }, 1600);
      return;
    }

    const originalText = button.textContent;
    button.textContent = 'Submitted';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1500);
  });
});
