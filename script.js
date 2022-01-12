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
  if (agreement.checked === true) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disabled');
  }
}

agreement.addEventListener('click', checked);

// ---------------------------------------------------------------

const counter = document.querySelector('#counter');
const texto = document.querySelector('#textarea');

function contador(e) {
  const textLength = e.target.maxLength - e.target.textLength;
  counter.innerHTML = textLength;
}

texto.addEventListener('keyup', contador);
texto.addEventListener('keydown', contador);

// -----------------------------------------------------------------
const labelContent = document.querySelector('#input-content');
labelContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('subjectX')) {
    e.target.classList.remove('subjectX');
  } else {
    e.target.classList.add('subjectX');
  }
  document.querySelector('#label-content').classList.remove('subjectX');
});

const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const emailForms = document.querySelector('#input-email');
const casas = document.querySelector('#house');
const observacoes = document.querySelector('#textarea');
const evaluation = document.querySelector('#evaluation-form');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const familia = document.querySelector('input[name="family"]:checked');
  const avaliacao = document.querySelector('input[name="rate"]:checked');
  const materias = document.querySelectorAll('.subjectX');
  const valorSelect = casas.options[casas.selectedIndex].value;
  let materiasValue = '';
  for (let i = 0; i < materias.length; i += 1) {
    materiasValue += `${materias[i].value}, `;
  }
  evaluation.innerHTML = '';
  evaluation.innerHTML = `<p> Nome: ${nome.value} ${sobrenome.value} </p>`;
  evaluation.innerHTML += `<p> Email: ${emailForms.value}</p>`;
  evaluation.innerHTML += `<p> Casa: ${valorSelect} </p>`;
  evaluation.innerHTML += `<p> Família: ${familia.value} </p>`;
  evaluation.innerHTML += `<p> Matérias: ${materiasValue} </p>`;
  evaluation.innerHTML += `<p> Avaliação: ${avaliacao.value} </p>`;
  evaluation.innerHTML += `<p> Observações: ${observacoes.value} </p>`;
});
