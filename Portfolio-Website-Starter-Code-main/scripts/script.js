function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_b8vebmo", "template_fzr8vb7", parms).then(alert("Email Enviado!"))
}

var typed = new Typed('.typing', {
    strings: ['FrontEnd','BackEnd'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});
