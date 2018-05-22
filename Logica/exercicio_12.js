function salario() {
//declaração variaveis
	var salario,aumento,total;
//entradas
	salario = parseFloat (document.getElementById("salario").value);
//processamento

	if (salario < 350){
		total = (salario * 0.07) + salario;
		aumento = (salario+100);
	}	
	else if ((salario >=350) && (salario <600)){
		total = (salario * 0.07)+salario;
		aumento = (salario + 75);
	}
	else if ((salario>=600) && (salario <900)) {
		total = (salario * 0.07) + salario;
		aumento = (salario + 50);
	}
	else {
		total = (salario * 0.07) + salario;
		aumento = (salario + 35);
	}
		
//saida
document.getElementById ("arroz").innerHTML = "Valor a receber:" + total
}