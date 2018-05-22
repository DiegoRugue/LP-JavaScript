function calcula() {
//Declaração de Variaveis
  var n1,n2,op,aux;
//Entradas
  n1 = parseFloat (document.getElementById("n1").value);
  n2 = parseFloat (document.getElementById("n2").value);
  op = parseFloat (document.getElementById("op").value);
//Processamento
  switch (op) {
    case 1:
      aux = (n1 + n2) / 2;
    break;

    case 2:
      if (n1<n2) {
        aux = n2 / n1;
      }
      else {
        aux = n1 / n2;
      }
    break;
    case 3:
      aux = n1 * n2;
    break;
    case 4:
      aux = n1 / n2;
    break;
    default:
      aux = "Opção invalida";
    }
//Saida
  document.getElementById("resultado").innerHTML = aux
  }
