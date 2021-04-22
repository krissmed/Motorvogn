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