const contactForm = document.getElementById('contact-form');

function showToast(message, isSuccess = true) {
    const toastContainer = document.getElementById('toast-notification');
    const toast = document.createElement('div');
    toast.className = `toast ${isSuccess ? 'success' : 'error'}`;
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Animação de entrada
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Animação de saída e remoção do elemento
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 500); // Tempo para a animação de fade-out
    }, 4000); // Tempo que o toast fica visível
}

function sendMail(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validação simples
    if (!name || !email || !subject || !message) {
        showToast("Por favor, preencha todos os campos obrigatórios.", false);
        return;
    }

    let params = {
        name,
        email,
        subject,
        number: document.getElementById("number").value,
        message,
    };

    emailjs.send("service_b8vebmo", "template_fzr8vb7", params)
        .then(() => {
            showToast("E-mail enviado com sucesso!");
            contactForm.reset(); // Limpa o formulário
        })
        .catch((error) => {
            showToast("Ocorreu um erro ao enviar o e-mail.", false);
            console.error('EmailJS Error:', error);
        });
}

var typed = new Typed('.typing', {
    strings: ['FrontEnd','BackEnd'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Adiciona o listener ao formulário
contactForm.addEventListener('submit', sendMail);
