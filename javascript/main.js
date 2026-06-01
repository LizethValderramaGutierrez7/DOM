const mainTitle = document.getElementById("mainTitle");
const nameIpt = document.getElementById("nameIpt");
const formBtn = document.getElementById("formBtn");
const greeting = document.getElementById("greeting");
const feedbackAlert = document.getElementById("feedbackAlert");
const emailIpt = document.getElementById("emailIpt");
const emailBtn = document.getElementById("emailBtn")
const ageIpt = document.getElementById("ageIpt");
const ageBtn = document.getElementById("ageBtn");
const miFormulario = document.getElementById('miFormulario');
const btnLimpiar = document.getElementById(`btnLimpiar`);


formBtn.addEventListener("click", ( evento ) => {
    evento.preventDefault();
    if( nameIpt.value.length < 3 ){
        feedbackAlert.style.display = "block";
        greeting.innerText = "";
    } else {
        greeting.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlert.style.display = "none";
    }
});

emailBtn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const correoIngresado = emailIpt.value;
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const esValido = patronCorreo.test(correoIngresado);
    if(esValido === false ){
       feedbackAlert2.style.display = "block";
       greeting2.innerText = "";
    } else {
        greeting2.innerText = `Correo valido`;
        feedbackAlert2.style.display = "none";
    }
});

ageBtn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const edadContada = Number(ageIpt.value);

    if(Number.isNaN(edadContada) || edadContada <= 0){
        feedbackAlert3.style.display = "block";
        greeting3.innerText = "";
    } else {
        greeting3.innerText = `Edad valida`;
        feedbackAlert3.style.display = "none";
    }
});


btnLimpiar.addEventListener("click", () => {
    miFormulario.reset();
});




