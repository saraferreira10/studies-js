const form = document.getElementById('formulario');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    resultado.classList.remove('paragrafo-resultado');
    resultado.classList.remove('bad'); 
    resultado.classList.remove('caution');

    resultado.innerText = '';

    if (validarForm()) {
        resultado.innerText = 'Preencha corretamente';
        resultado.classList.add('paragrafo-resultado');
        resultado.classList.add('bad');
        return false;
    }

    calcularIMC(Number(peso.value), Number(altura.value));
    return true;
})

function validarForm() {
    return peso.value.trim() == '' || altura.value.trim() == '';
}

function calcularIMC(peso, altura) {
    let resultado = peso / (Math.pow(altura, 2));

    if (typeof resultado === 'number') {
        mostrarMensagem(resultado);
    }
}

function mostrarMensagem(imc) {
    resultado.classList.add('paragrafo-resultado');
    imc = imc.toFixed(2);

    if (imc < 18.5) {
        resultado.innerText = `Seu IMC é ${imc} (abaixo do peso)`;
        resultado.classList.add('bad');
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerText = `Seu IMC é ${imc} (peso normal)`;
    } else if (imc >= 25 && imc < 30) {
        resultado.innerText = `Seu IMC é ${imc} (sobrepeso)`;
        resultado.classList.add('caution');
    } else if (imc >= 30 && imc < 35) {
        resultado.innerText = `Seu IMC é ${imc} (Obesidade grau 1)`;
        resultado.classList.add('bad');
    } else if (imc >= 35 && imc < 40) {
        resultado.innerText = `Seu IMC é ${imc} (Obesidade grau 2)`;
        resultado.classList.add('bad');
    } else if (imc >= 40) {
        resultado.innerText = `Seu IMC é ${imc} (Obesidade grau 3)`;
        resultado.classList.add('bad');
    } else {
        resultado.innerText = `Seu IMC é ${imc} (Inexistente)`;
        resultado.classList.add('bad');
    }
}