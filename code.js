

alert('Esse site é feito por um aluno do ensino médio portanto, não tive o trabalho de portá-lo para um celular, se possível que apresente alguns problemas pelo dispositivo móvel.');

const porta = () => {
    const pr = parseFloat(document.getElementById("porcentagem").value);
    const pib = parseFloat(document.getElementById("pib").value);
    const j = parseFloat(document.getElementById("pessoas").value);

    const cpib = pib * (pr / 100);
    const ppc = cpib / j;

    document.getElementById("resultado").innerHTML = `pibc é ${cpib} </p> pib percapita é ${ppc}`;
    alert("foi?");
};

