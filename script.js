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