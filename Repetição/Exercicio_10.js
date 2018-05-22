function exec10 (){
    par = 0
    imp = 0
    numP = 0
    for (var i = 1; i <= 10; i++) {
        do {
            var num1 = parseInt(prompt("Digite o "+ i + "º numero"));    
        } while (isNaN(num1));

        if (num1%2 == 0) {
            var par = par + num1;
        }
        primo = 0
        for (var j = 1; j <= num1; j++) {
                if (num1%j == 0) {
                   var primo = primo + 1;
                }           
        }
        if (primo == 2) {
            var numP = numP + num1;   
        }
    }
    document.getElementById("resultado").innerHTML = "soma dos pares é: " + par + "<br> soma dos Primos: " + numP;
}
