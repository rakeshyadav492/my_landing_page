document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonials .col');

    function checkVisibility() {
        testimonials.forEach((testimonial) => {
            const position = testimonial.getBoundingClientRect().top;
            if (position < window.innerHeight * 0.75) {
                testimonial.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});