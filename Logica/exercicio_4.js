function calcula(){

//Declaração de Variaveis
	var n1,n2,maior;

//Entradas
	n1 = parseFloat (document.getElementById("n1").value);
	n2 = parseFloat (document.getElementById("n2").value);
//Processamento
	if (n1<n2){
		maior = "O segundo numero e o maior";
	}

	else if (n1==n2){
		maior = "Os numeros são iguais";
	}

	else {
		maior = "O primeiro numero e o maior";
	}
//Saida
	document.getElementById("maior").innerHTML =  maior

}