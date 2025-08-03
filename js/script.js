document.addEventListener('DOMContentLoaded', () => {
    // Other existing JavaScript code here...

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };

    // Smoothly scroll to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    scrollToTopBtn.addEventListener('click', scrollToTop);

    // New JavaScript for Projects section scrolling
    const projectsScrollBox = document.getElementById('projectsScrollBox');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    

    // Function to scroll the projects box left
    scrollLeftBtn.addEventListener('click', () => {
        if (projectsScrollBox) {
            const scrollAmount = projectsScrollBox.offsetWidth;
            projectsScrollBox.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    // Function to scroll the projects box right
    scrollRightBtn.addEventListener('click', () => {
        if (projectsScrollBox) {
            const scrollAmount = projectsScrollBox.offsetWidth;
            projectsScrollBox.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});