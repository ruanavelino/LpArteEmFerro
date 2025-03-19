document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuButton = document.querySelector('.menu-mobile');
    const navMenu = document.querySelector('.nav');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um item
    const menuItems = document.querySelectorAll('.nav a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('form-contato');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const produto = document.getElementById('produto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (!nome || !email || !telefone) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }
            
            // Simulação de envio (aqui você adicionaria sua lógica real de envio)
            console.log('Formulário enviado:');
            console.log({ nome, email, telefone, produto, mensagem });
            
            // Feedback para o usuário
            alert('Obrigado pelo contato! Retornaremos em breve.');
            
            // Limpar formulário
            contactForm.reset();
        });
    }
    
    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de Header fixo com mudança de cor ao rolar
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.background = 'var(--white)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}); 