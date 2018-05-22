function calcula(){

//Declaração de Variaveis
	var n1,n2,menor;

//Entradas
	n1 = parseFloat (document.getElementById("n1").value);
	n2 = parseFloat (document.getElementById("n2").value);
//Processamento
	if (n1>n2){
		menor = "O segundo numero e o menor";
	}

	else if (n1==n2){
		menor = "Os numeros são iguais";
	}

	else {
		menor = "O primeiro numero e o menor";
	}
//Saida
	document.getElementById("menor").innerHTML = menor

}
