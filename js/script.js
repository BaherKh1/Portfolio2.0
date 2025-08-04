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
    // Custom Audio Player Logic
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const progressBar = document.getElementById('progressBar');
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const volumeControl = document.getElementById('volumeControl');

    let isPlaying = false;

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playPauseIcon.src = 'assets/play-button.png';
        } else {
            audio.play();
            playPauseIcon.src = 'assets/play-button.png';
        }
        isPlaying = !isPlaying;
    }

    playPauseBtn.addEventListener('click', togglePlayPause);

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });

    progressBarContainer.addEventListener('click', (e) => {
        const rect = progressBarContainer.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const seekTime = (clickPosition / rect.width) * audio.duration;
        audio.currentTime = seekTime;
    });

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });

    audio.volume = volumeControl.value;
    
    // Auto-play the music when the page loads
    // You can remove this if you don't want the music to start automatically
    // It's often better for user experience to let the user initiate the music.
    // audio.play();
    // playPauseIcon.src = 'assets/pause.svg';
    // isPlaying = true;


    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
    }
});