function saldo() {
//declaração variaveis
	var saldo,credito;
//entradas
	saldo = parseFloat (document.getElementById("saldo").value);
//processamento

	if (saldo > 400){
		credito = (saldo*0.30)+saldo;
	}	
	else if ((saldo <=400) && (saldo >=300)){
		credito = (saldo*0.25)+saldo;
	}
	else if((saldo <=300) && (saldo >=200)){
		credito = (saldo * 0.20) + saldo;
	}
	else
		credito = (saldo *0.10) + saldo;
//saida
document.getElementById ("arroz").innerHTML = credito	

}