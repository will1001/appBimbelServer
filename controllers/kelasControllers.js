const conn = require("../config/database")

module.exports = {
    selectAll: (req, res) => {
        let sql = "SELECT * FROM kelas";
        let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        });
    },
    selectId: (req, res) => {
        let sql = "SELECT * FROM kelas WHERE id="+req.params.id;
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },
    create: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO kelas SET ?";
        let query = conn.query(sql, data, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },
    update: (req, res) => {
        let sql = "UPDATE kelas SET deskripsi='"+req.body.deskripsi+"' WHERE id="+req.params.id;
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    },
    delete: (req, res) => {
        let sql = "DELETE FROM kelas WHERE id="+req.params.id+"";
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
        });
    }
}