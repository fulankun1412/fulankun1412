// Page Navigation System
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    const pages = document.querySelectorAll('.page-content');
    
    // Function to show a specific page
    function showPage(pageName) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show the selected page
        const selectedPage = document.getElementById(`${pageName}-page`);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }
        
        // Add active class to the corresponding nav link
        const selectedLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
        if (selectedLink) {
            selectedLink.classList.add('active');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update URL hash
        window.location.hash = pageName === 'home' ? '' : pageName;
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            showPage(pageName);
            
            // Close mobile navbar if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        const pageName = hash || 'home';
        showPage(pageName);
    });
    
    // Handle initial page load
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showPage(initialHash);
    } else {
        showPage('home');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !this.hasAttribute('data-page')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.row, .card, section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Handle PDF loading errors
document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe[src$=".pdf"]');
    
    iframes.forEach(iframe => {
        iframe.addEventListener('error', function() {
            console.error('Error loading PDF:', this.src);
            const container = this.parentElement;
            container.innerHTML = `
                <div class="alert alert-warning" role="alert">
                    <h4 class="alert-heading">PDF Not Available</h4>
                    <p>The PDF file could not be loaded. Please make sure the file exists in the correct location:</p>
                    <hr>
                    <p class="mb-0"><code>${this.src}</code></p>
                </div>
            `;
        });
    });
});

// Handle image loading errors
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.parentElement;
            const errorMsg = document.createElement('div');
            errorMsg.className = 'alert alert-info';
            errorMsg.innerHTML = `<small>Image not available: ${this.alt || 'No description'}</small>`;
            parent.insertBefore(errorMsg, this);
        });
    });
});

// Add loading indicator for tab changes
const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
tabs.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function(e) {
        const targetPane = document.querySelector(e.target.getAttribute('data-bs-target'));
        if (targetPane) {
            targetPane.style.opacity = '0';
            setTimeout(() => {
                targetPane.style.transition = 'opacity 0.3s ease';
                targetPane.style.opacity = '1';
            }, 50);
        }
    });
});

// Sidebar toggle functionality (optional enhancement)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
});

// Update active nav link on scroll (for single page sections)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Print current page
function printPage() {
    window.print();
}

// Export functionality (optional)
function exportContent() {
    const activePage = document.querySelector('.page-content.active');
    if (activePage) {
        const content = activePage.innerHTML;
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'portfolio-page.html';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Console welcome message
console.log('%cWelcome to Lanang Afkaar\'s Portfolio!', 'color: #0d6efd; font-size: 20px; font-weight: bold;');
console.log('%cThis portfolio showcases machine learning projects and research.', 'color: #6c757d; font-size: 14px;');
