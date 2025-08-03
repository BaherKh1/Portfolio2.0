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

    // Projects section scrolling logic
    const projectsScrollBox = document.getElementById('projectsScrollBox');
    const projectsScrollLeftBtn = document.getElementById('scrollLeftBtn'); // Original ID
    const projectsScrollRightBtn = document.getElementById('scrollRightBtn'); // Original ID

    if (projectsScrollLeftBtn && projectsScrollRightBtn && projectsScrollBox) {
        projectsScrollLeftBtn.addEventListener('click', () => {
            const scrollAmount = projectsScrollBox.offsetWidth;
            projectsScrollBox.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        projectsScrollRightBtn.addEventListener('click', () => {
            const scrollAmount = projectsScrollBox.offsetWidth;
            projectsScrollBox.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Experience section scrolling logic
    const experienceScrollBox = document.getElementById('ExperienceScrollBox');
    const experienceScrollLeftBtn = document.getElementById('experienceScrollLeftBtn'); // New, specific ID
    const experienceScrollRightBtn = document.getElementById('experienceScrollRightBtn'); // New, specific ID

    if (experienceScrollLeftBtn && experienceScrollRightBtn && experienceScrollBox) {
        experienceScrollLeftBtn.addEventListener('click', () => {
            const scrollAmount = experienceScrollBox.offsetWidth;
            experienceScrollBox.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        experienceScrollRightBtn.addEventListener('click', () => {
            const scrollAmount = experienceScrollBox.offsetWidth;
            experienceScrollBox.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.classList.add('loader-hidden');
    }
});
    
});