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

  // Set the minimum delay time in milliseconds (e.g., 2000 = 2 seconds)
  const minDelay = 2000;

  // Track if the page is loaded and if the delay has passed
  let pageLoaded = false;
  let delayPassed = false;

  // A function to hide the preloader
  function hidePreloader() {
    if (pageLoaded && delayPassed) {
      preloader.classList.add('fade-out');
    }
  }

  // Event listener for when all resources are loaded
  window.addEventListener('load', () => {
    pageLoaded = true;
    hidePreloader();
  });

  // Set the manual delay
  setTimeout(() => {
    delayPassed = true;
    hidePreloader();
  }, minDelay);



  // Function to remove the anchor from the URL and scroll to the top
function resetPagePosition() {
    // Check if the URL has a hash (an anchor)
    if (window.location.hash) {
        // Use the History API to remove the hash without reloading the page
        // This effectively resets the URL to the base page
        history.pushState('', document.title, window.location.pathname + window.location.search);

        // Then, smoothly scroll the user to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Call the function when the page loads
resetPagePosition();



 const sections = document.querySelectorAll('.content-section');

  const options = {
    root: null, // The viewport
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        // Update the URL with the section's ID
        updateURL(`#${sectionId}`);

        // Optional: Highlight the active link in the navigation
        document.querySelectorAll('nav ul li a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  // Tell the observer to watch each section
  sections.forEach(section => {
    observer.observe(section);
  });

  // Function to update the URL (as shown in Step 1)
  function updateURL(sectionId) {
    if (history.replaceState) {
      const newUrl = `${window.location.pathname}${sectionId}`;
      history.replaceState(null, '', newUrl);
    }
  }
});