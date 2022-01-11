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
const valorSelect = casas.options[casas.selectedIndex].value;
const familia = document.querySelector('#label-family');
const materias = document.querySelectorAll('.subject');
const labelContent = document.querySelector('#input-content');
const avaliacao = document.querySelector('#label-rate');
const observacoes = document.querySelector('#textarea');
const teste = subject();

submit.addEventListener('click', (e) => {
  e.preventDefault()
 document.querySelector('#evaluation-form').innerHTML = ''
 document.querySelector('#evaluation-form').innerHTML = `<p> Nome: ${nome.value} ${sobrenome.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Email: ${emailForms.value}</p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Casa: ${valorSelect} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Família: ${familia.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Matérias: ${teste} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Avaliação: ${avaliacao.value} </p>`
 document.querySelector('#evaluation-form').innerHTML += `<p> Observações: ${observacoes.value} </p>`
})
labelContent.addEventListener('click', (e) =>{
  if(e.target.classList.contains('subject')){
    e.target.classList.remove('subject')
  }
  else{
    e.target.classList.add('subject')
  }
})
function subject(){
  const checked1 = [];
  for(let i = 0; i < materias.length; i += 1){
    checked1.push[document.querySelectorAll('.subject')[i].value];
  }
  console.log(checked1)
}