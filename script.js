/* Botão login - Função para retornar um Alert se o login e Senha estiver certo ou Errado. */
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
/* Botão Submit - Função para da o Submit apenas quando a opção
concorda estiver selecionada. */
const agreement = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disabled');
  }
});
/* Função para da colocar um contatdor de Caracter no TextArea. */
const counter = document.querySelector('#counter');
const texto = document.querySelector('#textarea');

function contador(e) {
  const textLength = e.target.maxLength - e.target.textLength;
  counter.innerHTML = textLength;
}

texto.addEventListener('keyup', contador);
texto.addEventListener('keydown', contador);
/* checkbox das materias - Função para colocar/remover atributo dos inputs do checkbox */
const labelContent = document.querySelector('#input-content');

labelContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('subjectX')) {
    e.target.classList.remove('subjectX');
  } else {
    e.target.classList.add('subjectX');
  }
  document.querySelector('#label-content').classList.remove('subjectX');
});
/* Botão Submit - Função para apagar o Fomulário e deixar apenas as Respostas no Navegador */
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
  evaluation.innerHTML = `<p> <span>Nome:</span> ${nome.value} ${sobrenome.value} </p>`;
  evaluation.innerHTML += `<p> <span>Email:</span> ${emailForms.value}</p>`;
  evaluation.innerHTML += `<p> <span>Casa:</span> ${valorSelect} </p>`;
  evaluation.innerHTML += `<p> <span>Família:</span> ${familia.value} </p>`;
  evaluation.innerHTML += `<p> <span>Matérias:</span> ${materiasValue} </p>`;
  evaluation.innerHTML += `<p> <span>Avaliação:</span> ${avaliacao.value} </p>`;
  evaluation.innerHTML += `<p> <span>Observações:</span> ${observacoes.value} </p>`;
});
