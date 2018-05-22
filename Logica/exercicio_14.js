function salario() {
//declaração variaveis
	var salario,total;
//entradas
	salario = parseFloat (document.getElementById("salario").value);
//processamento

	if (salario < 300){
		total = (salario*0.5)+salario;
	}	
	else if ((salario >= 300) && (salario < 500)){
		total = (salario*0.4)+salario;
	}
	else if ((salario>=500) && (salario < 700)) {
		total = (salario *0.3) + salario;
	}
	else if ((salario>=700)&&(salario < 800 )){
		total = (salario * 0.2) + salario;
	}
	else if ((salario >=800)&&(salario < 1000)){
		total = (salario * 0.2) + salario;
	}
	else {
		total=(salario * 0.05) + salario
	}
//saida
document.getElementById ("arroz").innerHTML = "Novo salario:" + total
}