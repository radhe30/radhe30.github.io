// Function to check image orientation and apply appropriate class
function checkImageOrientation() {
    const projectImages = document.querySelectorAll('.project-img img');
    
    projectImages.forEach(img => {
        // Check if image is already loaded
        if (img.complete) {
            applyOrientationClass(img);
        } else {
            // Wait for image to load
            img.addEventListener('load', function() {
                applyOrientationClass(img);
            });
        }
    });
}

function applyOrientationClass(img) {
    // Remove any existing fit classes
    img.classList.remove('contain-fit', 'natural-fit', 'center-fit', 'portrait-fix');
    
    // Get natural dimensions
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    
    // Determine orientation and apply appropriate class
    if (naturalWidth > naturalHeight) {
        // Landscape image
        img.classList.add('center-fit');
    } else if (naturalHeight > naturalWidth) {
        // Portrait image
        img.classList.add('portrait-fix');
    } else {
        // Square image
        img.classList.add('cover-fit');
    }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    checkImageOrientation();
});

// Also run when window is fully loaded
window.addEventListener('load', checkImageOrientation);
// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Open mobile menu
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
  }
  
  // Close mobile menu
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  }
  
  // Close menu when clicking on links
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navLinks.classList.contains('active') && 
        !event.target.closest('.nav-links') && 
        !event.target.closest('.menu-btn')) {
      navLinks.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });
  
  // Prevent scrolling when menu is open
  navLinks.addEventListener('touchmove', function(e) {
    if (navLinks.classList.contains('active')) {
      e.preventDefault();
    }
  }, { passive: false });
});
// Sticky header behavior - hides on scroll down, shows on scroll up
//let lastScrollTop = 0;
//const header = document.querySelector('header');
//const scrollThreshold = 100; // How much to scroll before hiding header
//let isMobileMenuOpen = false;

//if (header) {
//    window.addEventListener('scroll', function() {
//        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//        
//        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
//            // Scrolling down - hide header
//            header.style.transform = 'translateY(-100%)';
//        } else {
//            // Scrolling up - show header
//            header.style.transform = 'translateY(0)';
//        }
//        
//        lastScrollTop = scrollTop;
//    });
//}


// Sticky header behavior - hides on scroll down, shows on scroll up
let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 100; // How much to scroll before hiding header
let isMobileMenuOpen = false;

// Function to handle header visibility
function handleHeaderScroll() {
    if (isMobileMenuOpen) return; // Don't hide header if mobile menu is open
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down - hide header
        header.classList.add('header-hidden');
    } else {
        // Scrolling up - show header
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop;
}

// Initialize header behavior
if (header) {
    // Throttle scroll events for better performance
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
    
    // Track mobile menu state
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            isMobileMenuOpen = !navLinks.classList.contains('active');
            if (isMobileMenuOpen) {
                header.classList.remove('header-hidden');
            }
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                isMobileMenuOpen = false;
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close button functionality
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                isMobileMenuOpen = false;
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }
}

// Enhanced sticky header with better mobile support


let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 50;
let isMobileMenuOpen = false;



// Function to handle header visibility
function handleHeaderScroll() {
    if (isMobileMenuOpen) return; // Don't hide header if mobile menu is open
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down - hide header
        header.classList.add('header-hidden');
    } else {
        // Scrolling up - show header
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop;
}



// Initialize header behavior

if (header) {
    // Throttle scroll events for better performance
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
    
    // Track mobile menu state
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            isMobileMenuOpen = !isMobileMenuOpen;
            if (isMobileMenuOpen) {
                header.classList.remove('header-hidden');
            }
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                isMobileMenuOpen = false;
            });
        });
    }
}
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
});



// Debug version with console logging
console.log("Scroll script loaded");

let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 100;
let isMobileMenuOpen = false;

console.log("Header element:", header);

function handleHeaderScroll() {
    if (isMobileMenuOpen) {
        console.log("Mobile menu open, skipping scroll hide");
        return;
    }
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("Scroll position:", scrollTop, "Last scroll:", lastScrollTop);
    
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        console.log("Hiding header");
        header.classList.add('header-hidden');
    } else {
        console.log("Showing header");
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop;
}

if (header) {
    console.log("Header found, attaching scroll listener");
    
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
    
    // Test if we can manually hide/show the header
    console.log("Testing manual header control");
    setTimeout(() => {
        header.classList.add('header-hidden');
        console.log("Header should be hidden now");
    }, 2000);
    
    setTimeout(() => {
        header.classList.remove('header-hidden');
        console.log("Header should be visible now");
    }, 4000);
} else {
    console.error("Header element not found!");
}