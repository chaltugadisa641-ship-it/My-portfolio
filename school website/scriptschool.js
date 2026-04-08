// --- CONFIGURATION ---
const textToType = "Aspiring Web Developer // HTML, CSS, JavaScript // Problem Solver";
const typingElement = document.querySelector('.typewriter-text');
let charIndex = 0;

// --- TYPEWRITER EFFECT ---
function typeEffect() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 60);
    }
}

// --- SESSION UPTIME TIMER ---
let seconds = 0;
function startUptime() {
    const timerElement = document.getElementById('session-timer');
    setInterval(() => {
        seconds++;
        let hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
        let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        let secs = (seconds % 60).toString().padStart(2, '0');
        timerElement.textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

// --- INITIALIZE ON LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    // Clear initial text
    typingElement.textContent = "";
    // Start effects
    typeEffect();
    startUptime();
    
    console.log("PORTFOLIO_OS: SYSTEM_READY");
});