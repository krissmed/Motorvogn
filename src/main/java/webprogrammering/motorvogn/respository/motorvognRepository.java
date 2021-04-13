package webprogrammering.motorvogn.respository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import webprogrammering.motorvogn.modeller.Motorvogn;

import java.util.List;

@Repository
public class motorvognRepository {

    @Autowired
    private JdbcTemplate db;

    public void largeMotorvogn(Motorvogn innMotorvogn) {
        String sql = "INSERT INTO Motorvogn (personnummer, navn, adresse, kjennetegn, bilmerke, biltype) VALUES(?,?,?,?,?,?)";
        db.update(sql, innMotorvogn.getPersonnummer(), innMotorvogn.getNavn(), innMotorvogn.getAdresse(), innMotorvogn.getKjennetegn(), innMotorvogn.getBilmerke(), innMotorvogn.getBiltype());
    }

    public List<Motorvogn> hentAlleMotorvogner(){
        String sql = "SELECT * FROM Motorvogn";
        List<Motorvogn> alleMotorvogn = db.query(sql,new BeanPropertyRowMapper(Motorvogn.class));
        return alleMotorvogn;
    }

    public void slettAlleMotorvogner(){
        String sql = "DELETE FROM Motorvogn";
        db.update(sql);
    }

}
