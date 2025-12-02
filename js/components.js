// ==========================================
// COMPONENTES REUTILIZÁVEIS
// ==========================================

// Sistema de Notificações Toast
class Toast {
  constructor() {
    this.container = this.createContainer();
  }

  createContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
      document.body.appendChild(container);
    }
    return container;
  }

  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
            background: ${this.getBackgroundColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInRight 0.3s ease;
            min-width: 300px;
            max-width: 400px;
        `;

    toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                ${this.getIcon(type)}
                <span style="flex: 1;">${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.25rem;">×</button>
            </div>
        `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  getBackgroundColor(type) {
    const colors = {
      success: '#34a853',
      error: '#ea4335',
      warning: '#fbbc04',
      info: '#4285f4'
    };
    return colors[type] || colors.info;
  }

  getIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return `<span style="font-size: 1.25rem; font-weight: bold;">${icons[type] || icons.info}</span>`;
  }
}

// Instanciar Toast globalmente
window.toast = new Toast();

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
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
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// LAZY LOADING DE IMAGENS
// ==========================================

function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ==========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ==========================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        scrollToSection(targetId);
      }
    });
  });
}

// ==========================================
// CONTADOR DE CARACTERES PARA TEXTAREA
// ==========================================

function initCharCounter() {
  const textareas = document.querySelectorAll('textarea[data-max-length]');

  textareas.forEach(textarea => {
    const maxLength = parseInt(textarea.dataset.maxLength);
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = 'text-align: right; font-size: 0.875rem; color: var(--color-text-light); margin-top: 0.25rem;';
    counter.textContent = `0 / ${maxLength}`;

    textarea.parentElement.appendChild(counter);

    textarea.addEventListener('input', function () {
      const length = this.value.length;
      counter.textContent = `${length} / ${maxLength}`;

      if (length > maxLength) {
        counter.style.color = 'var(--color-secondary)';
      } else {
        counter.style.color = 'var(--color-text-light)';
      }
    });
  });
}

// ==========================================
// VOLTAR AO TOPO
// ==========================================

function initBackToTop() {
  const button = document.createElement('button');
  button.id = 'backToTop';
  button.innerHTML = '↑';
  button.style.cssText = `
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: var(--shadow-medium);
    `;

  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================
// PROTEÇÃO CONTRA SPAM DE FORMULÁRIO
// ==========================================

class FormProtection {
  constructor(formId, minSubmitTime = 3000) {
    this.form = document.getElementById(formId);
    this.minSubmitTime = minSubmitTime;
    this.formLoadTime = Date.now();
    this.submitCount = 0;
    this.maxSubmits = 3;
  }

  canSubmit() {
    const timeSinceLoad = Date.now() - this.formLoadTime;

    // Muito rápido (provavelmente bot)
    if (timeSinceLoad < this.minSubmitTime) {
      return { allowed: false, reason: 'Aguarde alguns segundos antes de enviar.' };
    }

    // Muitas tentativas
    if (this.submitCount >= this.maxSubmits) {
      return { allowed: false, reason: 'Limite de envios atingido. Recarregue a página.' };
    }

    this.submitCount++;
    return { allowed: true };
  }

  reset() {
    this.submitCount = 0;
    this.formLoadTime = Date.now();
  }
}

// ==========================================
// ANALYTICS E TRACKING (Google Analytics)
// ==========================================

function trackEvent(category, action, label = null, value = null) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  console.log('📊 Event tracked:', { category, action, label, value });
}

// Tracking de cliques em botões importantes
function initEventTracking() {
  // Tracking de CTA buttons
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
      trackEvent('CTA', 'click', button.textContent.trim());
    });
  });

  // Tracking de WhatsApp
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('WhatsApp', 'click', 'Contact');
    });
  });

  // Tracking de envio de formulário
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      trackEvent('Form', 'submit', 'Contact Form');
    });
  }
}

// ==========================================
// INICIALIZAÇÃO DE COMPONENTES
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initLazyLoading();
  initSmoothScroll();
  initCharCounter();
  initBackToTop();
  initEventTracking();

  console.log('✅ Componentes inicializados com sucesso!');
});
