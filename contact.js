document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formSuccessMessage = document.getElementById('form-success');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    function validateField(inputElement, errorElement, errorMessage) {
        if (inputElement.value.trim() === '') {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            inputElement.classList.add('input-error'); // Add error class for styling
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            inputElement.classList.remove('input-error');
            return true;
        }
    }

    function validateEmail(inputElement, errorElement, errorMessage) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputElement.value.trim())) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            inputElement.classList.add('input-error');
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            inputElement.classList.remove('input-error');
            return true;
        }
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        isValid = validateField(nameInput, nameError, 'Name is required.') && isValid;
        isValid = validateEmail(emailInput, emailError, 'Please enter a valid email.') && isValid;
        isValid = validateField(subjectInput, subjectError, 'Subject is required.') && isValid;
        isValid = validateField(messageInput, messageError, 'Message is required.') && isValid;

        if (isValid) {
            // In a real application, you would send this data to a backend server.
            // For now, we'll just simulate success.
            console.log('Form Submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            });

            formSuccessMessage.style.display = 'block';
            contactForm.reset(); // Clear the form
            setTimeout(() => {
                formSuccessMessage.style.display = 'none';
            }, 5000); // Hide success message after 5 seconds
        }
    });

    // Real-time validation on blur
    nameInput.addEventListener('blur', () => validateField(nameInput, nameError, 'Name is required.'));
    emailInput.addEventListener('blur', () => validateEmail(emailInput, emailError, 'Please enter a valid email.'));
    subjectInput.addEventListener('blur', () => validateField(subjectInput, subjectError, 'Subject is required.'));
    messageInput.addEventListener('blur', () => validateField(messageInput, messageError, 'Message is required.'));

    // Remove error class on input
    nameInput.addEventListener('input', () => nameInput.classList.remove('input-error'));
    emailInput.addEventListener('input', () => emailInput.classList.remove('input-error'));
    subjectInput.addEventListener('input', () => subjectInput.classList.remove('input-error'));
    messageInput.addEventListener('input', () => messageInput.classList.remove('input-error'));
});
