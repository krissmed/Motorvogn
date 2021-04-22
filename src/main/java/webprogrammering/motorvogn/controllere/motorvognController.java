package webprogrammering.motorvogn.controllere;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import webprogrammering.motorvogn.modeller.Bil;
import webprogrammering.motorvogn.modeller.Motorvogn;
import webprogrammering.motorvogn.respository.motorvognRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class motorvognController {

    @Autowired
    private motorvognRepository rep;

    public final ArrayList<Bil> bilRegister = new ArrayList<>();

    @GetMapping("/hentBiler")
    public ArrayList<Bil> hentBiler() {
        return bilRegister;
    }

    //Legg til en ny bil i motorvogn
    @PostMapping("/legginnmotorvogn")
    public void motorvogn(Motorvogn bil) {
        rep.hentAlleMotorvogner();
    }

    //Skriver ut tabellen til index.html
    @GetMapping("/hentTabell")
    public List<Motorvogn> hentArray() {
        return rep.hentAlleMotorvogner();
    }

    //Slett innhold i motorvogner
    @GetMapping("/slett")
    public void slettArray() {
        rep.slettAlleMotorvogner();
    }
}
