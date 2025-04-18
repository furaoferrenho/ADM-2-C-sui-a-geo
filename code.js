        alert('Esse site é feito por um aluno do ensino medio por tento, se possivel abra isto em um computador poís ele pode ter problemas de compatibilidade');

function porta(){
var pr = parseFloat(document.getElementById('porcentagem').value);
var pbi = parseFloat(document.getElementById('pib').value);
var j = parseFloat(document.getElementById('pessoas').value);

var cpib = pib*(pr/100);
var ppc = cpib/j ;

 docment.getElementById('resultado').innerHTML = 'pib é ${cpib}</p> ppc é ${ppc}';
alert('isto funciona?');
};



