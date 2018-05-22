function pessoa(){
    var idade,altura,numPessoas,saida;
    var altMedia = 0;
    var somaAlt = 0;
    var cont = 0;

   do{
    numPessoas = parseInt(prompt("Digite um numero de pessoas"));
        do{
            for(i = 0; i < numPessoas; i++){
                idade = parseInt(prompt("Digite a idade:"));
                altura = parseFloat(prompt("Digite a altura: \n Digite 0 para sair"));
            }
        }while(inNaN(idade,altura))  
    }while( (idade != 0) && (altura != 0) )
            
            if(idade > 50){
                cont++;
                somaAlt = somaAlt + altura;
            }
            
            altMedia = (somaAlt / cont)
         
      document.getElementById("RaltMedia").innerHTML = "Altura media das pessoas com mais de 50 anos: " + altMedia;
}