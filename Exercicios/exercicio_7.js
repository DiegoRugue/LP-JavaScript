function salario() {
//declaração variaveis
	var salario,aumento;
//entradas
	salario = parseFloat (document.getElementById("salario").value);
//processamento

	if (salario < 500){
		aumento = (salario*0.3)+salario;
	}	
	else {
		aumento = "sem aumento";
	}
//saida
document.getElementById ("arroz").innerHTML = aumento	

}