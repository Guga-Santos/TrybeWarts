const loginBtn = document.querySelector('#login-btn');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

loginBtn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// -----------------------------------------------------------

const agreement = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

function checked() {
  if(agreement.checked === true) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disabled')
  }
}

agreement.addEventListener('click', checked)


// ---------------------------------------------------------------

const counter = document.querySelector('#counter');
const texto = document.querySelector('#textarea');

document.querySelector('#textarea').textLength
document.querySelector('#textarea').maxLength

function contador(e) {
  const textLength = e.target.maxLength - e.target.textLength
  counter.innerHTML = textLength
}

texto.addEventListener('keyup', contador)
texto.addEventListener('keydown', contador)

// -----------------------------------------------------------------

const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const emailForms = document.querySelector('#input-email');
const casas = document.querySelector('#house');
const familia = document.querySelector('#label-family');
const materias = document.querySelector('#input-content');
const avaliacao = document.querySelector('#label-rate');
const observacoes = document.querySelector('#textarea');

submit.addEventListener('click', (e) => {
  e.preventDefault()
 document.querySelector('#evaluation-form').innerHTML = ''
 document.querySelector('#evaluation-form').innerHTML = `<p> Nome: ${nome.value} ${sobrenome.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Email: ${emailForms.value}</p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Casa: ${casas.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Família: ${familia.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Matérias: ${materias.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Avaliação: ${avaliacao.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Observações: ${observacoes.value} </p>`
})

materias.addEventListener('click', (e) => {
  e.target.classList.add('subject')
})