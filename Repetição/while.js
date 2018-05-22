function enquanto() {
    var i = 0
    var acm = 0
    while (i <= 5 ) {
        var nota = parseFloat(prompt("Entre com uma nota"));
        acm = acm + nota;
        i = i + 1;
    }
    var media = acm / i
    if (media = 0) {
        document.getElementById("resultado").innerHTML = "Valor invaldo";
    }
    document.getElementById("resultado").innerHTML = media.toFixed(2);
}