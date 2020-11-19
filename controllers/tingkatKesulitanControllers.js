const conn = require("../config/database")

module.exports = {
    selectAll: (req, res) => {
        let sql = "SELECT * FROM tingkat_kesulitan";
        let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
    },
    selectId: (req, res) => {
        let sql = "SELECT * FROM tingkat_kesulitan WHERE id="+req.params.id;
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },
    create: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO tingkat_kesulitan SET ?";
        let query = conn.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },
    update: (req, res) => {
        let sql = "UPDATE tingkat_kesulitan SET deskripsi='"+req.body.deskripsi+"' WHERE id="+req.params.id;
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },
    delete: (req, res) => {
        let sql = "DELETE FROM tingkat_kesulitan WHERE id="+req.params.id+"";
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    }
}