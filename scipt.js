$(document).ready(function() {
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        alert('This is a placeholder for ' + $(this).text() + ' page.');
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset validation states
        $('#firstName, #lastName, #email, #phone').removeClass('is-invalid');

        // First Name validation
        if ($('#firstName').val().trim() === '') {
            $('#firstName').addClass('is-invalid');
            isValid = false;
        }

        // Last Name validation
        if ($('#lastName').val().trim() === '') {
            $('#lastName').addClass('is-invalid');
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($('#email').val().trim())) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test($('#phone').val().trim())) {
            $('#phone').addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            // Reset form
            this.reset();
        }
    });
});