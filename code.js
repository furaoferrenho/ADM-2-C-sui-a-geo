        alert('Esse site é feito por um aluno do ensino medio por tento, se possivel abra isto em um computador poís ele pode ter problemas de compatibilidade');

function porta(){
var pr = float(document.getElementById('porcentagem').value);
var pbi = float(document.getElementById('pib').value);
var j = float(document.getElementbyid('pessoas').value);

var cpib = pib*(pr/100);
var ppc = cpib/j ;

const docment.getElementById('resultado').innerHTML = 'pib é ${cpib}</p> ppc é ${ppc}';
alert('isto funciona?');
};



