// ==========================================
// CONFIGURAÇÃO GLOBAL
// ==========================================

const CONFIG = {
  animationDuration: 300,
  scrollOffset: 80,
  countUpDuration: 2000,
  whatsappNumber: '5511999999999'
};

// ==========================================
// NAVEGAÇÃO E SCROLL
// ==========================================

// Scroll suave para seções
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.getElementById('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Fechar menu mobile se estiver aberto
    closeMobileMenu();
  }
}

// Toggle do menu mobile
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

// Fechar menu mobile
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.remove('active');
}

// Header com efeito de scroll
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', handleHeaderScroll);

// ==========================================
// ANIMAÇÕES DE ESTATÍSTICAS
// ==========================================

function animateStats() {
  const statsSection = document.querySelector('.stats-section');
  const statItems = document.querySelectorAll('.stat-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statItems.forEach((item, index) => {
          setTimeout(() => {
            const targetValue = parseInt(item.getAttribute('data-stat'));
            const statNumber = item.querySelector('.stat-number');
            animateValue(statNumber, 0, targetValue, CONFIG.countUpDuration);
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) {
    observer.observe(statsSection);
  }
}

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// ==========================================
// FAQ ACCORDION
// ==========================================

function toggleFAQ(button) {
  const faqItem = button.closest('.faq-item');
  const wasActive = faqItem.classList.contains('active');

  // Fechar todos os FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  // Abrir o FAQ clicado se não estava ativo
  if (!wasActive) {
    faqItem.classList.add('active');
  }
}

// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      businessType: document.getElementById('businessType').value,
      serviceInterest: document.getElementById('serviceInterest').value,
      message: document.getElementById('message').value,
      wantAnalysis: document.getElementById('wantAnalysis').checked
    };

    // Validação
    if (!formData.name || !formData.email || !formData.phone || !formData.businessType || !formData.serviceInterest) {
      showFormMessage('error', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showFormMessage('error', 'Por favor, insira um email válido.');
      return;
    }

    // Simular envio (aqui você integraria com seu backend)
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');

    try {
      // Simulação de envio - substituir por sua API
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Sucesso
      showFormMessage('success', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();

      // Enviar para WhatsApp (opcional)
      if (formData.wantAnalysis) {
        setTimeout(() => {
          sendToWhatsApp(formData);
        }, 2000);
      }

    } catch (error) {
      showFormMessage('error', 'Erro ao enviar mensagem. Tente novamente.');
    } finally {
      submitButton.classList.remove('loading');
    }
  });
}

function showFormMessage(type, message) {
  const successMsg = document.getElementById('formSuccess');
  const errorMsg = document.getElementById('formError');

  // Esconder ambas as mensagens
  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';

  // Mostrar a mensagem apropriada
  if (type === 'success') {
    successMsg.innerHTML = `<strong>Sucesso!</strong> ${message}`;
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  } else {
    errorMsg.innerHTML = `<strong>Erro!</strong> ${message}`;
    errorMsg.style.display = 'block';
    setTimeout(() => {
      errorMsg.style.display = 'none';
    }, 5000);
  }

  // Scroll para a mensagem
  setTimeout(() => {
    const messageElement = type === 'success' ? successMsg : errorMsg;
    messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function sendToWhatsApp(formData) {
  const message = `Olá! Vim através do site.%0A%0A` +
    `Nome: ${formData.name}%0A` +
    `Email: ${formData.email}%0A` +
    `Telefone: ${formData.phone}%0A` +
    `Tipo de Negócio: ${formData.businessType}%0A` +
    `Interesse: ${formData.serviceInterest}%0A` +
    `Mensagem: ${formData.message || 'Não informado'}%0A` +
    `Quer análise gratuita: ${formData.wantAnalysis ? 'Sim' : 'Não'}`;

  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.gmb-card, .step-card, .service-card, .testimonial-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(element => {
    element.classList.add('fade-in-up');
    observer.observe(element);
  });
}

// ==========================================
// UTILITÁRIOS
// ==========================================

// Formatar telefone brasileiro
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, '');

  if (value.length <= 10) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else {
    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }

  input.value = value;
}

// Adicionar máscara de telefone
function initPhoneMask() {
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      formatPhoneNumber(this);
    });
  }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar todas as funcionalidades
  animateStats();
  initContactForm();
  initScrollAnimations();
  initPhoneMask();

  // Fechar menu mobile ao clicar fora
  document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('.mobile-menu-btn');

    if (mobileMenu.classList.contains('active') &&
      !mobileMenu.contains(e.target) &&
      !menuButton.contains(e.target)) {
      closeMobileMenu();
    }
  });

  console.log('✅ Site Ative MKT Digital carregado com sucesso!');
});

// ==========================================
// EXPORTAR FUNÇÕES GLOBAIS
// ==========================================

window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFAQ = toggleFAQ;
