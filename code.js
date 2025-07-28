        alert('este site pode ter problemas de compatibilidade com disposivios moveis');


function porta() {
  calculo.porc = parseFloat(document.getElementById("porcentagem").value);
  calculo.pib = parseFloat(document.getElementById("pib").value);
  calculo.pessoa =parseFloat(document.getElementById("pessoas").value);

 if (calculo.pib && calculo.porc && calculo.pessoa >= 0) {
calculo();
alert("pib do estado é "+ calculo.pib + "$, pib por pessoa no estado é "+ calculo.pessoa+"$");
 } else{
        alert('por favor coloque outro valor');
 }
}
function calculo(pib,porc,pessoa){
 calculo.pib = calculo.pib*(calculo.porc/100);
 calculo.pessoa = calculo.pib/calculo.pessoa;
 return calculo;
}
function teste(){
        alert(calculo.pib);
        alert(calculo.porc);
        alert(calculo.pessoa);
        alert("pib por estado é "+ calculo.pib + "$, pib por pessoa no estado é "+ calculo.pessoa+"$");
        docment.getElementById('resp').innerText = "oba";
}


