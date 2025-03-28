         alert('Esse site é feito por um aluno do ensino medio por tanto, Não tive o trabalho de portalo para um celular, se possível que apresente alguns problemas pelo dispositivo movel');

const porta = () =>{
const pr = document.getElementById("porcentagem").value;
const pbi = document.getElementById("pib").value;
const j = document.getElementById("pessoas").value;

const cpib = pib * (pr / 100);
const ppc = cpib / j;

document.getelementbyid("resultado").innerhtml("pibc é ${cpib} </p> pib percapita é ${ppc}")
};

