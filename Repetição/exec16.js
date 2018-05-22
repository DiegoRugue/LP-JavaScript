function exec16() {
    aux = 0;
    media = 0;
    numero = 0;
    var num = parseInt(prompt("digite a idade: \n 0 = para sair"));
    do {

        var numero = numero + num;
        var aux = aux + 1;
        num = parseInt(prompt("digite a idade: \n 0 = para sair"));
        
        
    } while (num != 0);
    var media = numero/aux;
    document.getElementById("resultado").innerHTML = "A media das idades digitadas é de: " + media;
}