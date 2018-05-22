function calcula() {
	//Declaração de Variaveis
		var nota1,nota2,nota3,nota4,resultado,classifica;
	//Entrada de dados
		nota1 = parseFloat(document.getElementById("nota1").value);
		nota2 = parseFloat(document.getElementById("nota2").value);
		nota3 = parseFloat(document.getElementById("nota3").value);
		nota4 = parseFloat(document.getElementById("nota4").value);
	//Processamento
		resultado = (nota1 + nota2 + nota3 + nota4) / 4;
		if (resultado>=7){
			classifica = "aprovado.";
		}
		else {
			classifica = "reprovado.";
		}

	//Saida
		document.getElementById("resultado").innerHTML = "A media é " + resultado + " " + classifica

}