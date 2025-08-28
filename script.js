function sendContactForm(event) {
    event.preventDefault();
    const nome1 = document.getElementById('nome1').value;
    const nome2 = document.getElementById('nome2').value;
    const nome3 = document.getElementById('nome3').value;
    const nome4 = document.getElementById('nome4').value;
    const nome5 = document.getElementById('nome5').value;
    const historia = document.getElementById('historia').value;

    fetch('https://fsdt-contact.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome1, nome2, nome3, nome4, nome5, historia }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => alert('Erro ao enviar o formulário:', error));
}

document.querySelector('.form-container').addEventListener('submit', sendContactForm);