package webprogrammering.motorvogn.modeller;

public class Motorvogn {
    String personnummer;
    String navn;
    String adresse;
    String kjennetegn;
    String bilmerke;
    String biltype;

    public Motorvogn() {}


    public String getPersonnummer() {
        return personnummer;
    }

    public void setPersonnummer(String personnummer) {
        this.personnummer = personnummer;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getKjennetegn() {
        return kjennetegn;
    }

    public void setKjennetegn(String kjennetegn) {
        this.kjennetegn = kjennetegn;
    }

    public String getBilmerke() {
        return bilmerke;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public String getBiltype() {
        return biltype;
    }

    public void setBiltype(String biltype) {
        this.biltype = biltype;
    }
}
