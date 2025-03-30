        alert('Esse site é feito por um aluno do ensino medio por tento, se possivel abra isto em um computador poís ele pode ter problemas de compatibilidade');

function porta() =>{
const pr = document.getElementById('porcentagem').value;
const pbi = document.getElementById('pib').value;
const j = document.getElementbyid('pessoas').value;

const cpib = pib*(pr/100);
const ppc = cpib/j ;

let docment.getElementById('resultado').innerHTML = 'pib é ${cpib}</p> ppc é ${ppc}';
alert('isto funciona?');
};



