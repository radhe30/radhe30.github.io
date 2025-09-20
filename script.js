// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.nav-links');
    let isMobileMenuOpen = false;
    
    // Open mobile menu
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.add('active');
            isMobileMenuOpen = true;
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close mobile menu
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            navLinks.classList.remove('active');
            isMobileMenuOpen = false;
            document.body.style.overflow = '';
        });
    }
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            isMobileMenuOpen = false;
            document.body.style.overflow = '';
        });
    });
    
    // Sticky header behavior
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 50;
    
    function handleHeaderScroll() {
        if (isMobileMenuOpen) return;
        
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Initialize header behavior
    if (header) {
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    handleHeaderScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Simple form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            }
        });
    }

    // Image orientation handling (optional)
    function checkImageOrientation() {
        const projectImages = document.querySelectorAll('.project-img-container img');
        
        projectImages.forEach(img => {
            if (img.complete) {
                applyOrientationClass(img);
            } else {
                img.addEventListener('load', function() {
                    applyOrientationClass(this);
                });
            }
        });
    }

    function applyOrientationClass(img) {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        
        img.classList.remove('contain-fit', 'natural-fit', 'center-fit', 'portrait-fix');
        
        if (naturalWidth > naturalHeight) {
            img.classList.add('center-fit');
        } else if (naturalHeight > naturalWidth) {
            img.classList.add('portrait-fix');
        } else {
            img.classList.add('cover-fit');
        }
    }

    // Run image orientation check
    checkImageOrientation();
    window.addEventListener('load', checkImageOrientation);
});

// Typewriter effect
function initTypewriter() {
    const titleElement = document.querySelector('.hero h1');
    const originalText = titleElement.innerHTML;
    const text = "Hey, I'm Radha Mohan";
    
    titleElement.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            titleElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Add the span with different color after typing
            titleElement.innerHTML += ' <span style="color: var(--primary)"></span>';
        }
    }
    
    typeWriter();
}

// Call this when DOM is loaded
document.addEventListener('DOMContentLoaded', initTypewriter);