function custo() {
//declaração variaveis
	var custo,total;
//entradas
	custo = parseFloat (document.getElementById("custo").value);
//processamento

	if (custo < 12000){
		total = (custo*0.05)+custo;
	}	
	else if ((custo >=12000) && (custo <25000)){
		total = (custo*0.25)+custo;
	}
	else {

		total = (custo *0.35) + custo;
	}
//saida
document.getElementById ("arroz").innerHTML = total	

}