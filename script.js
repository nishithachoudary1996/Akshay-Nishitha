// JavaScript for Akshay & Nishitha Love Story Website

// Function to change background based on button type and side
function changeBackground(type, side) {
    const section = side === 'left' ? '.akshay-section' : '.nishitha-section';
    const personSection = document.querySelector(section);
    
    // Remove any existing background classes
    personSection.classList.remove('background-kiss', 'background-god');
    
    // Add the appropriate background class
    if (type === 'kiss') {
        personSection.classList.add('background-kiss');
        
        // Create kiss effect animation
        createKissEffect(personSection);
        
        // Reset background after 3 seconds
        setTimeout(() => {
            personSection.classList.remove('background-kiss');
        }, 3000);
        
    } else if (type === 'god') {
        personSection.classList.add('background-god');
        
        // Create god blessing effect
        createGodEffect(personSection);
        
        // Reset background after 3 seconds
        setTimeout(() => {
            personSection.classList.remove('background-god');
        }, 3000);
    }
}

// Function to create kiss effect with floating hearts
function createKissEffect(section) {
    const hearts = ['💖', '💕', '💗', '💓', '💝'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: absolute;
                font-size: 2rem;
                pointer-events: none;
                z-index: 1000;
                animation: floatHeart 3s ease-out forwards;
                left: ${Math.random() * 100}%;
                top: 100%;
            `;
            
            section.appendChild(heart);
            
            // Remove heart element after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 200);
    }
}

// Function to create god blessing effect with golden sparkles
function createGodEffect(section) {
    const sparkles = ['✨', '🌟', '💫', '⭐', '🔮'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.cssText = `
                position: absolute;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 1000;
                animation: floatSparkle 3s ease-out forwards;
                left: ${Math.random() * 100}%;
                top: 100%;
            `;
            
            section.appendChild(sparkle);
            
            // Remove sparkle element after animation
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 3000);
        }, i * 150);
    }
}

// Add CSS animations for floating elements
function addFloatingAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatHeart {
            0% {
                transform: translateY(0) scale(0);
                opacity: 0;
            }
            20% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            80% {
                opacity: 1;
                transform: translateY(-100px) scale(1.2);
            }
            100% {
                transform: translateY(-150px) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes floatSparkle {
            0% {
                transform: translateY(0) scale(0) rotate(0deg);
                opacity: 0;
            }
            20% {
                opacity: 1;
                transform: translateY(-30px) scale(1) rotate(180deg);
            }
            80% {
                opacity: 1;
                transform: translateY(-120px) scale(1.3) rotate(360deg);
            }
            100% {
                transform: translateY(-180px) scale(0) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add love message when page loads
function addWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff69b4, #ff1493);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
            z-index: 10000;
            animation: slideInRight 1s ease-out;
            font-weight: 600;
        ">
            💕 Welcome to Our Love Story! 💕
        </div>
    `;
    
    document.body.appendChild(welcomeDiv);
    
    // Remove welcome message after 5 seconds
    setTimeout(() => {
        if (welcomeDiv.parentNode) {
            welcomeDiv.style.animation = 'slideOutRight 1s ease-out forwards';
            setTimeout(() => {
                if (welcomeDiv.parentNode) {
                    welcomeDiv.parentNode.removeChild(welcomeDiv);
                }
            }, 1000);
        }
    }, 5000);
}

// Add slide animations
function addSlideAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the website when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animations
    addFloatingAnimations();
    
    // Add slide animations
    addSlideAnimations();
    
    // Add welcome message
    addWelcomeMessage();
    
    // Add click sound effect for buttons
    const buttons = document.querySelectorAll('.action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add floating hearts in the background
    createFloatingBackgroundHearts();
});

// Function to create floating background hearts
function createFloatingBackgroundHearts() {
    const container = document.querySelector('.container');
    const hearts = ['💖', '💕', '💗', '💓', '💝', '💘'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                font-size: 1rem;
                pointer-events: none;
                z-index: -1;
                animation: backgroundFloat 15s linear infinite;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                opacity: 0.3;
            `;
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 15000);
        }, i * 1000);
    }
}

// Add background floating animation
function addBackgroundFloatingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes backgroundFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.3;
            }
            50% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Call the function to add background floating animation
addBackgroundFloatingAnimation();
