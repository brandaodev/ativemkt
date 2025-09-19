// ATIVE MKT - JavaScript CORRIGIDO com Particles.js e Validação de Formulário

document.addEventListener('DOMContentLoaded', function () {
  console.log('%c🚀 ATIVE MKT Website Loading...', 'color: #FF6B35; font-size: 18px; font-weight: bold;');

  // CORREÇÃO DE IMAGENS - Garantir visibilidade imediata
  function forceImageVisibility() {
    document.querySelectorAll('img, .service-card, .portfolio-card, .service-card__content, .service-card__header').forEach(element => {
      element.style.display = 'block';
      element.style.opacity = '1';
      element.style.visibility = 'visible';
    });
  }

  // Executar imediatamente
  forceImageVisibility();

  // PARTICLES.JS: Configurações completas para cada seção

  // Hero Section Particles - Laranja interativo
  const heroParticlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#FF6B35", "#E55A2B"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FF6B35",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

  // About Section Particles - Sutil
  const aboutParticlesConfig = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#232323", "#FFB499"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#FFB499",
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  };

  // Results Section Particles - Branco vibrante
  const resultsParticlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#FFFFFF", "#FFB499"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1.2,
          opacity_min: 0.4,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          size_min: 2,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: "#FFFFFF",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 120,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 0.8,
          speed: 3
        }
      }
    },
    retina_detect: true
  };

  // INICIALIZAÇÃO DAS PARTÍCULAS
  function initializeParticles() {
    // Verificar se particles.js está carregado
    if (typeof particlesJS !== 'undefined') {
      // Hero Particles
      if (document.getElementById('particles-hero')) {
        particlesJS('particles-hero', heroParticlesConfig);
        console.log('✨ Hero particles initialized (laranja interativo)');
      }

      // About Particles
      if (document.getElementById('particles-about')) {
        particlesJS('particles-about', aboutParticlesConfig);
        console.log('✨ About particles initialized (sutil)');
      }

      // Results Particles
      if (document.getElementById('particles-results')) {
        particlesJS('particles-results', resultsParticlesConfig);
        console.log('✨ Results particles initialized (branco vibrante)');
      }
    } else {
      // Tentar novamente após um delay se a biblioteca não estiver carregada
      setTimeout(initializeParticles, 300);
    }
  }

  // CORREÇÃO DE IMAGENS - JavaScript para erro de imagem
  function setupImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
      // Garantir que a imagem seja visível
      img.style.display = 'block';
      img.style.opacity = '1';
      img.style.visibility = 'visible';

      // Handler de erro
      img.onerror = function () {
        this.style.display = 'block';
        this.style.opacity = '1';
        this.style.visibility = 'visible';
        this.alt = 'Imagem não carregada';
        console.warn('Imagem falhou ao carregar:', this.src);
      };

      // Handler de carregamento bem-sucedido
      img.onload = function () {
        this.style.display = 'block';
        this.style.opacity = '1';
        this.style.visibility = 'visible';
      };

      // Remover atributo loading="lazy" se existir
      if (img.hasAttribute('loading')) {
        img.removeAttribute('loading');
      }
    });
  }

  // Ajuste responsivo das partículas
  function adjustParticlesForMobile() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile && window.pJSDom) {
      window.pJSDom.forEach(pjsDOM => {
        if (pjsDOM.pJS && pjsDOM.pJS.particles) {
          const particles = pjsDOM.pJS.particles;
          // Reduzir partículas para mobile
          if (particles.array.length > 50) {
            particles.array.splice(50);
          }
        }
      });
    }
  }

  // Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  // Mostrar menu mobile
  if (navToggle) {
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.add('show-menu');
      document.body.style.overflow = 'hidden';
    });
  }

  // Esconder menu mobile
  if (navClose) {
    navClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = 'auto';
    });
  }

  // Esconder menu ao clicar nos links
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = 'auto';
    });
  });

  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.15)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
  });

  // Smooth scrolling aprimorado
  function smoothScrollTo(targetElement, duration = 1000) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - 20;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Navegação com smooth scroll
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      e.stopPropagation();

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        smoothScrollTo(target);
      }
    }
  });

  // Animação de contadores
  const counterElements = document.querySelectorAll('.result-item__number');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;

    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const suffix = counter.textContent.replace(/[0-9]/g, '');
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current) + suffix;
      }, 20);
    });
    countersAnimated = true;
  }

  // Observador de interseção para animações
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');

        // Animar contadores quando a seção results aparece
        if (entry.target.closest('.results')) {
          animateCounters();
        }
      }
    });
  }, observerOptions);

  // Observar elementos com animação
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });

  // FORMULÁRIO DE CONTATO CORRIGIDO - Validação funcionando
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    // Adicionar event listeners para validação em tempo real
    const formFields = contactForm.querySelectorAll('.form-control');
    formFields.forEach(field => {
      field.addEventListener('input', function () {
        validateField(this);
      });

      field.addEventListener('blur', function () {
        validateField(this);
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log('📧 Formulário enviado - iniciando validação');

      const submitButton = this.querySelector('button[type="submit"]');
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;
      let firstErrorField = null;

      // Limpar estados anteriores
      formFields.forEach(field => {
        field.classList.remove('form-error', 'form-success');
      });

      // Validação detalhada
      requiredFields.forEach(field => {
        const fieldValid = validateField(field);
        if (!fieldValid) {
          isValid = false;
          if (!firstErrorField) {
            firstErrorField = field;
          }
        }
      });

      // Validação específica do email
      const emailField = this.querySelector('input[type="email"]');
      if (emailField && emailField.value.trim()) {
        const emailValid = isValidEmail(emailField.value);
        if (!emailValid) {
          emailField.classList.add('form-error');
          isValid = false;
          if (!firstErrorField) {
            firstErrorField = emailField;
          }
        }
      }

      if (!isValid) {
        showNotification('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
        if (firstErrorField) {
          firstErrorField.focus();
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Desabilitar formulário durante envio
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      submitButton.style.background = 'linear-gradient(135deg, #E55A2B 0%, #FF6B35 100%)';
      submitButton.style.opacity = '0.8';

      // Simular envio do formulário
      setTimeout(() => {
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');

        // Reset do formulário
        this.reset();

        // Reset dos estilos dos campos
        formFields.forEach(field => {
          field.classList.remove('form-error', 'form-success');
        });

        // Reativar formulário
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar Mensagem';
        submitButton.style.background = 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)';
        submitButton.style.opacity = '1';
      }, 2000);
    });
  }

  // Função de validação de campo individual
  function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    const fieldType = field.type;

    field.classList.remove('form-error', 'form-success');

    if (isRequired && !value) {
      field.classList.add('form-error');
      return false;
    }

    if (fieldType === 'email' && value) {
      const emailValid = isValidEmail(value);
      if (!emailValid) {
        field.classList.add('form-error');
        return false;
      }
    }

    if (value) {
      field.classList.add('form-success');
    }

    return true;
  }

  // Função de validação de email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Sistema de notificações CORRIGIDO
  function showNotification(message, type = 'info') {
    // Remover notificações existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;

    const iconClass = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
    const bgColor = type === 'success' ? '#25d366' : type === 'error' ? '#ef4444' : '#FF6B35';

    notification.innerHTML = `
            <div class="notification__content">
                <i class="fas fa-${iconClass}"></i>
                <span>${message}</span>
            </div>
            <button class="notification__close">
                <i class="fas fa-times"></i>
            </button>
        `;

    // Estilos da notificação
    Object.assign(notification.style, {
      position: 'fixed',
      top: '100px',
      right: '20px',
      background: bgColor,
      color: 'white',
      padding: '16px 20px',
      borderRadius: '8px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      zIndex: '10000',
      maxWidth: '400px',
      minWidth: '300px',
      transform: 'translateX(120%)',
      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: 'var(--font-family-base)'
    });

    const content = notification.querySelector('.notification__content');
    Object.assign(content.style, {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      paddingRight: '30px'
    });

    const closeBtn = notification.querySelector('.notification__close');
    Object.assign(closeBtn.style, {
      position: 'absolute',
      top: '8px',
      right: '8px',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '4px',
      opacity: '0.8',
      fontSize: '12px',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });

    // Adicionar ao DOM
    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Handler do botão fechar
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      removeNotification(notification);
    });

    // Auto remover após 5 segundos
    setTimeout(() => {
      removeNotification(notification);
    }, 5000);
  }

  function removeNotification(notification) {
    if (notification && notification.parentNode) {
      notification.style.transform = 'translateX(120%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 400);
    }
  }

  // Efeitos de hover aprimorados para cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    // Garantir visibilidade imediata
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    card.style.display = 'flex';

    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-15px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(255, 107, 53, 0.25)';
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

      const icon = this.querySelector('.service-card__icon');
      if (icon) {
        icon.style.transform = 'rotate(10deg) scale(1.1)';
        icon.style.transition = 'all 0.4s ease';
      }
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 6px rgba(255, 107, 53, 0.15)';

      const icon = this.querySelector('.service-card__icon');
      if (icon) {
        icon.style.transform = 'rotate(0deg) scale(1)';
      }
    });
  });

  // Efeitos para portfolio cards
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 20px 40px rgba(255, 107, 53, 0.25)';
      this.style.transition = 'all 0.4s ease';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 6px rgba(255, 107, 53, 0.15)';
    });
  });

  // Efeitos para testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) rotate(1deg)';
      this.style.boxShadow = '0 15px 35px rgba(255, 107, 53, 0.2)';
      this.style.transition = 'all 0.4s ease';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) rotate(0deg)';
      this.style.boxShadow = '0 4px 6px rgba(255, 107, 53, 0.15)';
    });
  });

  // Navegação ativa
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav__link');

  function highlightNavigation() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('nav__link--active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  // WhatsApp button aprimorado
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const phoneNumber = '5511999999999';
      const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da ATIVE MKT.');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });

    // Animação pulsante
    setInterval(() => {
      whatsappBtn.style.animation = 'pulse 0.8s ease-in-out';
      setTimeout(() => {
        whatsappBtn.style.animation = '';
      }, 800);
    }, 4000);
  }

  // Efeito parallax sutil para hero image
  const heroImage = document.querySelector('.hero__img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2;
      if (scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Efeito parallax para CTA background
  const ctaBackground = document.querySelector('.cta__bg-image');
  if (ctaBackground) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const ctaSection = document.querySelector('.cta');
      if (ctaSection) {
        const ctaTop = ctaSection.offsetTop;
        const ctaHeight = ctaSection.offsetHeight;
        const windowHeight = window.innerHeight;

        if (scrolled + windowHeight > ctaTop && scrolled < ctaTop + ctaHeight) {
          const rate = (scrolled - ctaTop) * -0.3;
          ctaBackground.style.transform = `translateY(${rate}px)`;
        }
      }
    });
  }

  // Otimização de performance para scroll
  let ticking = false;
  function updateOnScroll() {
    highlightNavigation();
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);

  // Lazy loading otimizado para imagens
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';

        img.onload = function () {
          this.style.opacity = '1';
        };

        observer.unobserve(img);
      }
    });
  });

  // Inicializar tudo
  function initialize() {
    console.log('🔧 Inicializando funcionalidades...');

    // Forçar visibilidade imediata
    forceImageVisibility();

    // Configurar error handling para imagens
    setupImageErrorHandling();

    // Inicializar partículas com delay
    setTimeout(() => {
      initializeParticles();
      adjustParticlesForMobile();
    }, 500);

    // Observar imagens
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => imageObserver.observe(img));

    // Inicializar navegação ativa
    highlightNavigation();

    console.log('✅ Website totalmente inicializado!');
    console.log('✨ Particles.js ativo nas seções: Hero, About, Results');
    console.log('🖼️ Sistema de correção de imagens ativado');
    console.log('📱 Menu mobile e WhatsApp configurados');
    console.log('📧 Formulário de contato com validação completa');
  }

  // Ajustar partículas no resize
  window.addEventListener('resize', () => {
    setTimeout(adjustParticlesForMobile, 100);
  });

  // Disponibilizar função globalmente
  window.showNotification = showNotification;

  // Utilitários globais para ATIVE MKT
  window.AtiveMKT = {
    showNotification: showNotification,

    updateThemeColor: function (primaryColor, secondaryColor) {
      const root = document.documentElement;
      root.style.setProperty('--color-primary-orange', primaryColor);
      root.style.setProperty('--color-secondary-orange', secondaryColor);
    },

    scrollToElement: function (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    },

    reinitializeParticles: function () {
      if (typeof particlesJS === 'function') {
        setTimeout(() => {
          initializeParticles();
          console.log('✨ Partículas reinicializadas');
        }, 100);
      }
    },

    testFormValidation: function () {
      const form = document.getElementById('contact-form');
      if (form) {
        showNotification('Validação do formulário está ativa! Teste preenchendo os campos.', 'info');
      }
    }
  };

  // Inicializar após DOM ready
  initialize();

  console.log('%c🎉 ATIVE MKT Website Carregado com Sucesso!', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
  console.log('%c✨ Particles.js: Hero (interativo), About (sutil), Results (vibrante)', 'color: #E55A2B; font-size: 14px;');
  console.log('%c🖼️ Correção de Imagens: URLs simplificadas, error handling ativo', 'color: #25d366; font-size: 12px;');
  console.log('%c📱 Funcionalidades: Menu mobile, WhatsApp, formulário validado, certificações', 'color: #FFB499; font-size: 12px;');
  console.log('%c🔧 Para testar validação do formulário: AtiveMKT.testFormValidation()', 'color: #666; font-size: 10px;');
});
// CURSOR PERSONALIZADO: bolinha laranja
document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('custom-cursor');
  window.addEventListener('mousemove', function (e) {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  // Efeito de “click” na bolinha
  window.addEventListener('mousedown', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  window.addEventListener('mouseup', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Para esconder a bolinha sobre campos de texto (opcional)
  document.querySelectorAll('input, textarea, select, button, a').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.opacity = '0.3';
      cursor.style.background = '#E55A2B';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.opacity = '1';
      cursor.style.background = '#FF6B35';
    });
  });
});
