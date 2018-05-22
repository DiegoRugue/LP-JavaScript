function calcula(){
	// declaração de variável
	var peso, altura, imc, classifica;
	// entrada de dados
	// conversão de tipos
	peso = parseFloat(document.getElementById("peso").value);
	altura = parseFloat(document.getElementById("altura").value);
	// processamento
	imc = peso / (altura ** 2);
	if (imc<18.5) {
		classifica = "Abaixo do peso";
	}
	else if ((imc<24.9) && (imc>=18.5)){
		classifica = "Normal";
	    }
		else if ((imc<=34.9) && (imc>=30)){
			classifica = "obesidade 1";
		    }
			else if ((imc>=25) && (imc<29.9)){
				classifica = "sobrepeso";
			    }
				else if ((imc>=35) && (imc<39.9)){
					classifica = "obesidade 2";
				    }
					else {
						classifica = "obesidade (morbida";
					}
					
// saída de dados
	document.getElementById("resultado").innerHTML = "Valor IMC" + imc.toFixed(2) +" " + classifica
	//Classifica IMC




}