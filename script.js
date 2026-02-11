// ====== NAVIGATION SCROLL EFFECT ======
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ====== LOAD PROJECTS ======
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <h3 style="color: var(--gold); font-size: 1.3rem; margin-bottom: 0.5rem;">${project.title}</h3>
                    <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Ver más</p>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-details">${project.director} · ${project.year}</p>
                ${project.platform ? `<p class="project-platform">${project.platform}</p>` : ''}
            </div>
        `;
        
        card.addEventListener('click', () => showProjectModal(project));
        grid.appendChild(card);
    });
    
    // Intersection Observer for fade-in animation
    observeProjects();
}

// ====== INTERSECTION OBSERVER ======
function observeProjects() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Stagger animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => observer.observe(card));
}

// ====== PROJECT MODAL ======
function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>Director:</strong> ${project.director}</p>
        <p><strong>Año:</strong> ${project.year}</p>
        <p><strong>Tipo:</strong> ${project.type}</p>
        ${project.platform ? `<p><strong>Plataforma:</strong> ${project.platform}</p>` : ''}
    `;
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => modal.style.display = 'none', 300);
}

// Modal close handlers
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====== FORM HANDLING ======
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.className = 'success';
            formStatus.textContent = '¡Mensaje enviado! Te responderé pronto.';
            form.reset();
        } else {
            throw new Error('Error al enviar');
        }
    } catch (error) {
        formStatus.className = 'error';
        formStatus.textContent = 'Error al enviar. Intenta escribirme directamente al email.';
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
    
    setTimeout(() => {
        formStatus.style.display = 'none';
        formStatus.className = '';
    }, 5000);
});

// ====== PARALLAX EFFECT ON HERO ======
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ====== INITIALIZE ======
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
    // Add loading animation to hero
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 100);
    
    // Preload images
    projects.forEach(project => {
        const img = new Image();
        img.src = project.image;
    });
});

// ====== CURSOR EFFECT (Optional Enhancement) ======
const createCursorFollower = () => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--gold);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });
    
    const animate = () => {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animate);
    };
    
    animate();
    
    // Scale cursor on hover
    document.querySelectorAll('a, button, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(3)';
            cursor.style.opacity = '0.5';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });
    });
};

// Uncomment to enable custom cursor (desktop only)
// if (window.innerWidth > 768) createCursorFollower();
