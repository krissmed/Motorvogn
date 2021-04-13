// SKriver ut tabellen og henter bilregister med en gang siden lastes inn
$(document).ready(function () {
    const url = "/hentTabell";
    $.get(url, function (data) {
        SkrivUtData(data);
    });
    hentAlleBiler();
});

let utTabell = document.getElementById("utTabell");
let personnummer;
let navn;
let adresse;
let kjennetegn;
let bilmerke;
let biltype;

// Henter alle biler fra bilregister fra server
function hentAlleBiler() {
    $.get("/hentBiler", function (biler) {
        formaterBiler(biler);
    });
}

//Gjør om formaterBiler og formaterTyper til å bruker .add().
function formaterBiler(biler) {
    let forrigeMerke = [];
    let finnesMerke;
    for (const bil of biler) {
        console.log(forrigeMerke)
        finnesMerke = true;
        for (i = 0; i < forrigeMerke.length; i++) {
            if (bil.merke === forrigeMerke[i]) {
                finnesMerke = false;
            }
        }
        if (finnesMerke) {
            $("#merke").append(new Option(bil.merke, bil.merke));
            forrigeMerke.push(bil.merke);
        }
    }
}

function finnTyper() {
    const valgtMerke = $("#merke").val();
    $.get("/hentBiler", function (biler) {
        console.log("Biler: " + biler)
        formaterTyper(biler, valgtMerke)
    });
}

function formaterTyper(biler, valgtMerke) {
    let typeSelect = document.getElementById("type");
    let length = typeSelect.options.length;
    for (i = length - 1; i >= 1; i--) {
        typeSelect.options[i] = null;
    }
    for (const bil of biler) {
        console.log("Typer: " + bil)
        if (bil.merke === valgtMerke) {
            $("#type").append(new Option(bil.type, bil.type));
        }
    }
}

//Feilhåndterer ved å sjekke at alle felt er fylt inn
function feilhandtering() {
    if (personnummer === "" || personnummer < 1) {
        return false
    } else if (navn === "") {
        return false
    } else if (adresse === "") {
        return false
    } else if (kjennetegn === "") {
        return false
    } else if (bilmerke === "") {
        return false
    } else if (biltype === "") {
        return false
    } else {
        return true;
    }
}

//Registrerer data for å legge inn på server
function registrer() {
    personnummer = $("#personnummer").val();
    navn = $("#navn").val();
    adresse = $("#adresse").val();
    kjennetegn = $("#kjennetegn").val();
    bilmerke = $("#merke").val();
    biltype = $("#type").val();
    if (feilhandtering() == false) {
        return;
    }
    let motorvogn = {
        personnummer: personnummer,
        navn: navn,
        adresse: adresse,
        kjennetegn: kjennetegn,
        bilmerke: bilmerke,
        biltype: biltype
    };
    const url = "/legginnmotorvogn";
    $.post(url, motorvogn, function (data) {
        SkrivUtData(data)
    });
}

// Funksjon for å skrive ut data til tabellen
function SkrivUtData(data) {
    // Sletter rader som er skrevet ut
    let antallRader = utTabell.rows.length;
    if (antallRader > 1) {
        for (i = 1; i < antallRader + 1; i++) {
            utTabell.deleteRow(i);
        }
    }
    //Skriver ut data som blir registrert
    for (i in data) {
        let nyrad = utTabell.insertRow(1);
        let nycelle0 = nyrad.insertCell(0)
        nycelle0.innerHTML = data[i].personnummer;

        let nycelle1 = nyrad.insertCell(1);
        nycelle1.innerHTML = data[i].navn;

        let nycelle2 = nyrad.insertCell(2);
        nycelle2.innerHTML = data[i].adresse;

        let nycelle3 = nyrad.insertCell(3);
        nycelle3.innerHTML = data[i].kjennetegn;

        let nycelle4 = nyrad.insertCell(4);
        nycelle4.innerHTML = data[i].bilmerke;

        let nycelle5 = nyrad.insertCell(5);
        nycelle5.innerHTML = data[i].biltype;
    }
}

// Slett all data registrert på server
function slettRader() {
    const url = "/slett"
    $.get(url, function () {
        let antallRader = utTabell.rows.length;
        for (i = 1; i < antallRader + 1; i++) {
            utTabell.deleteRow(i);
        }
    });
}