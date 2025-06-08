// script.js
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Product card hover effect for mobile
if (window.innerWidth < 768) {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
}

// Add to cart functionality
document.querySelectorAll('.product-actions button:nth-child(2)').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-info h3').textContent;
        
        // Update cart count
        const cartCount = document.querySelector('.cart-icon span');
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
        
        // Add animation to cart icon
        cartCount.classList.add('pulse');
        setTimeout(() => {
            cartCount.classList.remove('pulse');
        }, 500);
        
        // Show notification
        showNotification(`¡Añadido al carrito: ${productName}`);
    });
});

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
// Animaciones para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const styleCards = document.querySelectorAll('.style-card');
    
    // Animación de entrada
    setTimeout(() => {
        styleCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }, 300);
    
    // Interacción con botones
    const buttons = document.querySelectorAll('.style-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
});




// Add CSS for notification
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
.notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--primary);
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s;
    z-index: 1000;
}

.notification.show {
    transform: translateY(0);
    opacity: 1;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 0.5s;
}
`;
document.head.appendChild(notificationStyle);