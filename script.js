const textToType = "Frontend Developer specializing in clean, digital experiences.";
const typingElement = document.querySelector('.typewriter-text');
let charIndex = 0;

// 1. Typing Effect
function type() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 60);
    }
}

// 2. Dynamic Status (Updates every second)
function updateStatus() {
    const statusLine = document.getElementById('system-status');
    const now = new Date();
    const time = now.toLocaleTimeString();
    statusLine.innerHTML = `Email: hello@example.com <br> [SYSTEM_TIME: ${time}]`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    type();
    setInterval(updateStatus, 1000);
});

// 3. Navbar scroll effect from original code
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderColor = 'var(--accent)';
    } else {
        navbar.style.borderColor = '#333';
    }
});
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    // Briefly change the gradient direction on click
    logo.style.background = "linear-gradient(180deg, #bc13fe, #00ff41)";
    logo.style.webkitBackgroundClip = "text";
    
    setTimeout(() => {
        logo.style.background = ""; // Reverts to CSS original
        logo.style.webkitBackgroundClip = "text";
    }, 200);
    
    console.log("CORE_SYSTEM_REBOOT...");
});