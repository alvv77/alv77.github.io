document.addEventListener("DOMContentLoaded", () => {
    const signUpContainer = document.querySelector('.sign-up');
    const signInContainer = document.querySelector('.sign-in');
    const signInBtn = document.querySelector('.sign-up-btn');
    const signUpBtn = document.querySelector('.sign-in-btn');

    // Muestra el formulario de iniciar sesión
    signInBtn.addEventListener('click', () => {
        signInContainer.style.display = 'flex';
        signUpContainer.style.display = 'none';
    });

    // Muestra el formulario de registrarse
    signUpBtn.addEventListener('click', () => {
        signUpContainer.style.display = 'flex';
        signInContainer.style.display = 'none';
    });

    // Validación de formularios
    const signUpForm = document.querySelector('.formulario');
    const signInForm = document.querySelector('.formulario');

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí puedes agregar el código para enviar el formulario
        console.log("Formulario de registro enviado");
    });

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        if (!loginEmail || !loginPassword) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí puedes agregar el código para enviar el formulario
        console.log("Formulario de inicio de sesión enviado");
    });
});
