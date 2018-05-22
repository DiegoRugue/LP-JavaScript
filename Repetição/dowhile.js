function exemplo() {
    var nota, i, soma, media, aux;
    nota = parseFloat(prompt("Informe uma nota"));
    i = 0;
    soma = 0
    do {
        soma = soma + nota;
        i = i + 1;
        do {
            nota = parseFloat(prompt("Informe outra nota." + "\n Notas digitadas: " + i + "\n não informe texto \n digite -1 p/ encerrar"));
        } while (isNaN(nota));
    } while (nota != -1);
    media = soma / i
    document.getElementById("resultado").innerHTML = media.toFixed(2);
}