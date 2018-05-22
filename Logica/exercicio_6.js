function calcula(){
//Declarações de Variaveis
  var n1,n2,op,aux,aux1;
//Entradas
  n1 = parseFloat (document.getElementById("n1").value)
  n2 = parseFloat (document.getElementById("n2").value)
  op =  (document.getElementById("op").value)
  //Processamento
    switch (op) {
      case 'A':
        aux = (n1 ** n2);
        break;
      case 'B':
        aux = Math.sqrt(n1);
        aux1 = Math.sqrt(n2);
      break;
      case 'C':
      aux = Math.pow(n1,1/3);
      aux1 = Math.pow(n2,1/3);
      break;
      default:
        

    }

//Saida
  document.getElementById("resultado").innerHTML = aux.toFixed(2);
  document.getElementById("resultado1").innerHTML =aux1.toFixed(2);

}
