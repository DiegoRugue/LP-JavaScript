function salario() {
//declaração variaveis
	var salario,aumento;
//entradas
	salario = parseFloat (document.getElementById("salario").value);
//processamento

	if (salario <= 300){
		aumento = (salario*0.35)+salario;
	}	
	else {
		aumento = (salario*0.15)+salario;
	}
//saida
document.getElementById ("arroz").innerHTML = aumento	

}