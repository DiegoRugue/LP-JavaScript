function calcula () {
//Declaração de Variaveis
	var preco,total,x;
//Entrada
	preco = parseFloat (document.getElementById("preco").value)
//Processamento
	if (preco < 50) {
		total = (preco * 0.05) + preco;
	}
	else if ((preco>=50) && (preco<100)){
		total = (preco * 0.10) + preco;
	}
	else {
		total = (preco * 0.15) + preco
	}
	if (preco < 80){
		x = "Barato";
	}
	else if ((preco>=80)&&(preco<120)) {
		x = "Normal";
	}
	else if ((preco>=120)&&(preco<200)){
		x = "Caro";
	}
	else {
		x = "Muito caro";
	}
//Saida
	document.getElementById("resultado").innerHTML = "O pruduto fica em: R$" + total + " Classificado como: " + x







}