// Load projects into the grid
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-details">de ${project.director} (${project.year})</p>
                ${project.platform ? `<p class="project-platform">${project.platform}</p>` : ''}
            </div>
        `;
        
        card.addEventListener('click', () => showProjectDetails(project));
        grid.appendChild(card);
    });
}

// Show project details in modal
function showProjectDetails(project) {
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
}

// Close modal
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form handling
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    
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
            formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
            form.reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        formStatus.className = 'error';
        formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o escríbeme directamente al email.';
    }
    
    setTimeout(() => {
        formStatus.style.display = 'none';
        formStatus.className = '';
    }, 5000);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});
