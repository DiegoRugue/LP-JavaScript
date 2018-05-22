function calcula () {
	var idade, peso, altura;
	var media=0;
	var cont1=0;
	var cont2 =0;
	var quant=0

		for (i=0;i<10;i++) {
			idade = parseInt(prompt("Informe a idade"));
			peso= parseFloat(prompt("Informe o peso"));
			altura = parseFloat (prompt("Informe a altura"));

				if (peso > 90 && altura<1.50) {
					cont1 = cont1 + 1;
				}
				
				if (idade >=10 && idade <=30  && altura >=1.90) {
					cont2 = cont2+1;
				}

				quant = quant + idade;
				porcentagem = cont2/10 * 100;	
					
		}

		media = quant /10;

		document.getElementById("saida1").innerHTML = "Media das idades: " + media;
		document.getElementById("saida2").innerHTML = "Quantidade de pessoas com peso superior a 90kg e altura inferior a 1.50 metros: " + cont1;
		document.getElementById("saida3").innerHTML = "Porcentagem de pessoas com idade entre 10 e 30 anos que medem mais de 1.90: " + porcentagem;


}
