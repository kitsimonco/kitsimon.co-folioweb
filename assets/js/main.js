// Custom Cursor
const cursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .nav-item');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// New Hamburger Menu Logic
const menuBtn = document.getElementById('menuBtn');

// Track mouse movement and move button to follow cursor
menuBtn.addEventListener('mousemove', (e) => {
    const rect = menuBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Limit movement range (max 15px from center)
    const maxMove = 15;
    const limitedX = Math.max(-maxMove, Math.min(maxMove, x * 0.4));
    const limitedY = Math.max(-maxMove, Math.min(maxMove, y * 0.4));
    
    menuBtn.style.transform = `translate(${limitedX}px, ${limitedY}px)`;
});

// Reset position when mouse leaves button
menuBtn.addEventListener('mouseleave', () => {
    menuBtn.style.transform = 'translate(0px, 0px)';
});

// Toggle active state on click
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
});

// Progress Counter Animation
function animateProgress() {
    const progressElement = document.getElementById('progress');
    let currentValue = 0.000000001;
    const targetValue = 1.0;
    const increment = 0.000000001;
    const interval = 10; // Update every 10ms (much faster)
    
    const timer = setInterval(() => {
        currentValue += increment;
        
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        
        // Format to 9 decimal places
        const formattedValue = currentValue.toFixed(9);
        progressElement.textContent = formattedValue;
        
    }, interval);
}

// Start animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateProgress, 500); // Start after 0.5 second
});