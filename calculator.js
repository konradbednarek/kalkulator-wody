var plum = new Audio("audio/plum.wav");
var no = new Audio("audio/no.wav");

function round(n, k) {
    var factor = Math.pow(10, k);
    return Math.round(n * factor) / factor;
}

function oblicz() {
    var waga = document.getElementById("waga").value;

    if (waga == "" || waga<0 || waga>200) {
        no.play();
        document.getElementById("waga").style.borderColor = "#ff0000";
        document.getElementById("waga").style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.2)";
        document.getElementById("waga").classList.add('placeholder');
    } 
    else {
        var wysilek = document.getElementById("wysilek").value;
        wysilek = parseFloat(wysilek);
        waga = parseFloat(waga);

        switch (wysilek) {
            case (1):
                var wynik = waga;
                break;
            case (2):
                var wynik = waga + 10;
                break;
            case (3):
                var wynik = waga + 20;
                break;
            case (4):
                var wynik = waga + 25;
                break;
        }
        
        var woda = wynik / 29;
        var wodaMin = wynik / 35;

        var szklanki = woda / 0.250;
        var szklankiMin = wodaMin / 0.250;

        var wodaZao = round(woda, 1);
        var wodaMinZao = round(wodaMin, 1);
        var szklankiZao = round(szklanki, 0);
        var szklankiMinZao = round(szklankiMin, 0);

        plum.play();
        document.getElementById("litry").innerHTML = "ok. " + wodaMinZao + "-" + wodaZao;
        document.getElementById("szklanki").innerHTML = "ok. " + szklankiMinZao + "-" + szklankiZao;
        }
    }