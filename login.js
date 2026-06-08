document.getElementById('formLogin').addEventListener('submit', function (event) {

    event.preventDefault();

    const senha = document.getElementById('senha').value;


    if (senha.length >= 8) {
        window.location.href = "formulario.html";
    }
});
