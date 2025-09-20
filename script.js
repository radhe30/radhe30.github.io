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