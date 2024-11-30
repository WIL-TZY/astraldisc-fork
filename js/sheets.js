// Script to send data to Google Sheets via Google Forms
// Form Link: https://docs.google.com/forms/d/e/1FAIpQLSdaQpqMJqt5jUALh7K6K61thXueKto1tZu87hoaZl7wxHWpEg/viewform?usp=pp_url&entry.1987565465=prompt
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const submitButton = document.getElementById('speak-btn');
    const promptInput = document.getElementById('prompt');
    const cookiesAccepted = localStorage.getItem('cookies_accepted');
    
    // Only proceed if cookies were accepted before
    if (cookiesAccepted !== 'false' && cookiesAccepted !== null) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Manually set the value for the Google Forms field
            const promptField = form.querySelector('input[name]');
            if (promptField) {
                promptField.value = promptInput.value;
            }

            // Set the form target to the hidden iframe to submit without redirect
            form.target = 'iframe';
            form.submit();

            submitButton.disabled = true; // Disable briefly to prevent duplicate submissions
        });

        // Re-enable button and clear form after iframe load
        const iframe = document.getElementById('iframe');
        iframe.onload = () => {
            submitButton.disabled = false;
            form.reset();
        };
    } else {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            console.log('Cookies must be accepted to submit user data.');
        });
    }
});
