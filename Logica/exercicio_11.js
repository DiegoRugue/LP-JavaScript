function salario() {
//declaração variaveis
	var salario,aumento,total;
//entradas
	salario = parseFloat (document.getElementById("salario").value);
//processamento

	if (salario < 300){
		total = (salario*0.15)+salario;
		aumento = (salario*0.15);
	}	
	else if ((salario >=300) && (salario <600)){
		total = (salario*0.10)+salario;
		aumento = (salario*0.10);
	}
	else if ((salario>=600) && (salario <900)) {
		total = (salario *0.05) + salario;
		aumento = (salario*0.05);
	}
	else
		total=salario
//saida
document.getElementById ("arroz").innerHTML = "Novo salario:" + total +" Aumento de: " + aumento	
}