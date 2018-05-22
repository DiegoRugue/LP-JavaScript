function calcula(){
	var nota1,nota2,resultado,classifica;
	//entrada de dados
	nota1= parseFloat (document.getElementById("nota1").value);
	nota2= parseFloat (document.getElementById("nota2").value);
	//processamentos
	resultado = (nota1 + nota2) / 2;
		if (resultado<=3){
			classifica= " reprovado";
		}
			else if ((resultado >=3) && (resultado <=7)){
				classifica = " exame";
			}
				else{
					classifica = " aprovado";
				}


	//saida
	document.getElementById("resultado").innerHTML= "A média é " + resultado + classifica









}