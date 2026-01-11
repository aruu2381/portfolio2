document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Aapka message Shubham tak pahunch gaya hai! Dhanyawad.');
            form.reset();
        });
    }
});