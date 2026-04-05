// Initialize EmailJS with your User ID
emailjs.init("GLJv_TorFBtnyyvAr"); // Replace with your actual EmailJS User ID

// Select the contact form
const form = document.getElementById('contact-container');
const statusDiv=document.getElementsById('status');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form using EmailJS
    emailjs.sendForm('service_j5xe20t', '76oritm', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
        }, function(error) {
            console.error('FAILED...', error);
            alert("Failed to send message. Please try again.");
        });
});

