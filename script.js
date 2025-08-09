(() => {
    const glassBox = document.getElementById('glass-box');
    let colors = ['#f9c5d1', '#f8f3d4', '#d3f6db', '#a6e3e9', '#ffb347', '#5c473a', '#587e7e', '#f2f0f0', '#2596be'];
    let i = 0;

    // Make glassBox scrollable
    glassBox.style.overflow = 'auto';
    glassBox.style.maxHeight = '80vh'; // Responsive height for PC and mobile
    glassBox.style.webkitOverflowScrolling = 'touch'; // Smooth scrolling on iOS

    setInterval(() => {
        glassBox.style.borderColor = colors[i % colors.length];
        glassBox.style.boxShadow = `0 8px 32px ${colors[i % colors.length]}55`;
        i++;
    }, 500);
})();
// This script changes the border color and box shadow of a glass effect box periodically.
// It cycles through a predefined set of colors every 1.5 seconds.  

