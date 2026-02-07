document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements for Step 1: Registration
    const signupFormStep1 = document.getElementById('signup-form-step1');
    const regUsernameInput = document.getElementById('reg-username');
    const regEmailInput = document.getElementById('reg-email');
    const regPasswordInput = document.getElementById('reg-password');
    const regConfirmPasswordInput = document.getElementById('reg-confirm-password');

    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    // DOM Elements for Step 2: OTP Verification
    const signupFormStep2 = document.getElementById('signup-form-step2');
    const otpEmailDisplay = document.getElementById('otp-email-display');
    const otpInput = document.getElementById('otp-input');
    const otpError = document.getElementById('otp-error');
    const resendOtpBtn = document.getElementById('resend-otp-btn');
    const otpTimerSpan = document.getElementById('otp-timer');
    const backToRegButtons = document.querySelectorAll('.back-to-reg');

    // DOM Elements for Success/Error Messages
    const signupSuccessCard = document.getElementById('signup-success');
    const signupGeneralErrorCard = document.getElementById('signup-general-error');
    const generalErrorText = document.getElementById('general-error-text');

    let timerInterval;
    const OTP_RESEND_COOLDOWN = 60; // seconds
    let currentOtpEmail = ''; // Store the email entered in step 1
    let simulatedOTP = ''; // Store a randomly generated OTP for simulation

    // --- Utility Functions for Validation ---
    function validateField(inputElement, errorElement, errorMessage) {
        if (inputElement.value.trim() === '') {
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

    function validatePassword(inputElement, errorElement, errorMessage) {
        // Password must be at least 8 characters, contain at least one uppercase letter,
        // one lowercase letter, one number, and one special character.
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;<>,.?~\\-]).{8,}$/;
        if (!passwordRegex.test(inputElement.value)) {
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

    function validateConfirmPassword(passwordInput, confirmPasswordInput, errorElement, errorMessage) {
        if (confirmPasswordInput.value !== passwordInput.value) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            confirmPasswordInput.classList.add('input-error');
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            confirmPasswordInput.classList.remove('input-error');
            return true;
        }
    }

    // --- Form Step Management ---
    function showForm(formId) {
        document.querySelectorAll('.signup-form').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(formId).classList.add('active');
    }

    // --- OTP Timer Logic ---
    function startOtpTimer() {
        let timeLeft = OTP_RESEND_COOLDOWN;
        resendOtpBtn.disabled = true;
        resendOtpBtn.classList.add('disabled');
        otpTimerSpan.style.display = 'inline';
        otpTimerSpan.textContent = `(${timeLeft}s)`;

        timerInterval = setInterval(() => {
            timeLeft--;
            otpTimerSpan.textContent = `(${timeLeft}s)`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                resendOtpBtn.disabled = false;
                resendOtpBtn.classList.remove('disabled');
                otpTimerSpan.style.display = 'none';
            }
        }, 1000);
    }

    function stopOtpTimer() {
        clearInterval(timerInterval);
        otpTimerSpan.style.display = 'none';
        resendOtpBtn.disabled = false;
        resendOtpBtn.classList.remove('disabled');
    }

    // --- Generate a 6-digit OTP (for simulation only) ---
    function generateSimulatedOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // --- Event Listeners ---

    // Step 1 Form Submission (Registration)
    signupFormStep1.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;
        isValid = validateField(regUsernameInput, usernameError, 'Username is required.') && isValid;
        isValid = validateEmail(regEmailInput, emailError, 'Please enter a valid email.') && isValid;
        isValid = validatePassword(regPasswordInput, passwordError, 'Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 number & 1 special char.') && isValid;
        isValid = validateConfirmPassword(regPasswordInput, regConfirmPasswordInput, confirmPasswordError, 'Passwords do not match.') && isValid;

        if (isValid) {
            currentOtpEmail = regEmailInput.value; // Store email for OTP step
            otpEmailDisplay.textContent = currentOtpEmail;
            simulatedOTP = generateSimulatedOtp(); // Generate a new OTP for simulation

            // Simulate backend call to register user and send OTP
            console.log('Simulating registration and OTP send for:', currentOtpEmail);
            console.log('Simulated OTP (for testing):', simulatedOTP); // Log for easy testing
            // In a real app, send data to backend here.
            // Backend would:
            // 1. Validate user data (username/email uniqueness, password strength)
            // 2. Generate a secure OTP
            // 3. Send OTP to user's email via an email service
            // 4. Store OTP temporarily linked to user and set an expiration

            // For simulation:
            // Assuming successful OTP send, proceed to OTP verification step
            showForm('signup-form-step2');
            startOtpTimer();
            otpInput.focus();
            otpError.style.display = 'none'; // Clear any previous OTP errors
            otpInput.classList.remove('input-error');
        }
    });

    // Step 2 Form Submission (OTP Verification)
    signupFormStep2.addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredOtp = otpInput.value.trim();
        let isValid = true;
        isValid = validateField(otpInput, otpError, 'OTP is required.') && isValid;
        if (isValid && enteredOtp.length !== 6) {
             otpError.textContent = 'OTP must be 6 digits.';
             otpError.style.display = 'block';
             otpInput.classList.add('input-error');
             isValid = false;
        }

        if (isValid) {
            // Simulate backend call to verify OTP
            console.log('Simulating OTP verification for', currentOtpEmail, 'with OTP:', enteredOtp);
            // In a real app, send OTP and user identifier (email/username) to backend.
            // Backend would:
            // 1. Retrieve stored OTP for the user
            // 2. Compare with entered OTP
            // 3. If correct, mark user as verified and activate account, then clear the OTP.
            // 4. If wrong or expired, return an error.

            // For simulation:
            if (enteredOtp === simulatedOTP) {
                console.log('OTP Correct! User registered.');
                stopOtpTimer();
                showForm('signup-success');
                // Clear simulated OTP after successful verification
                simulatedOTP = '';
                // Optionally redirect after a delay
                // setTimeout(() => { window.location.href = 'login.html'; }, 3000);
            } else {
                otpError.textContent = 'Incorrect OTP. Please try again.';
                otpError.style.display = 'block';
                otpInput.classList.add('input-error');
            }
        }
    });

    // Resend OTP Button
    resendOtpBtn.addEventListener('click', () => {
        if (!resendOtpBtn.disabled) {
            console.log('Simulating resend OTP for:', currentOtpEmail);
            // In a real app, trigger backend to generate and send a new OTP.
            // Make sure to handle rate limiting on the backend!
            simulatedOTP = generateSimulatedOtp(); // Generate new OTP for simulation
            console.log('New Simulated OTP (for testing):', simulatedOTP); // Log new OTP
            alert(`A new OTP has been sent to ${currentOtpEmail}. (Simulated: ${simulatedOTP})`);
            startOtpTimer(); // Restart the timer
            otpInput.value = ''; // Clear OTP input field
            otpError.style.display = 'none'; // Clear previous error
            otpInput.classList.remove('input-error');
        }
    });

    // Back to Registration Button
    backToRegButtons.forEach(button => {
        button.addEventListener('click', () => {
            stopOtpTimer();
            showForm('signup-form-step1');
            // Clear OTP input and any errors when going back
            otpInput.value = '';
            otpError.style.display = 'none';
            otpInput.classList.remove('input-error');
            // Also reset general error message if it was shown
            signupGeneralErrorCard.classList.remove('active');
        });
    });

    // Real-time validation on blur for registration fields
    regUsernameInput.addEventListener('blur', () => validateField(regUsernameInput, usernameError, 'Username is required.'));
    regEmailInput.addEventListener('blur', () => validateEmail(regEmailInput, emailError, 'Please enter a valid email.'));
    regPasswordInput.addEventListener('blur', () => validatePassword(regPasswordInput, passwordError, 'Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 number & 1 special char.'));
    regConfirmPasswordInput.addEventListener('blur', () => validateConfirmPassword(regPasswordInput, regConfirmPasswordInput, confirmPasswordError, 'Passwords do not match.'));

    // Real-time validation on input for registration fields (clears error when typing)
    regUsernameInput.addEventListener('input', () => regUsernameInput.classList.remove('input-error') || (usernameError.style.display = 'none'));
    regEmailInput.addEventListener('input', () => regEmailInput.classList.remove('input-error') || (emailError.style.display = 'none'));
    regPasswordInput.addEventListener('input', () => regPasswordInput.classList.remove('input-error') || (passwordError.style.display = 'none'));
    regConfirmPasswordInput.addEventListener('input', () => regConfirmPasswordInput.classList.remove('input-error') || (confirmPasswordError.style.display = 'none'));

    // Real-time validation on input for OTP field
    otpInput.addEventListener('input', () => {
        otpInput.classList.remove('input-error');
        otpError.style.display = 'none';
    });

    // Initial load: show the first step of the signup form
    showForm('signup-form-step1');
});
