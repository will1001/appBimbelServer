const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const conn = require("./config/database")
const mapelRoutes = require("./routes/mapelAPIRoutes")
const babSoalRoutes = require("./routes/babSoalRoutes")
const kelasRoutes = require("./routes/kelasRoutes")
const tingkatKesulitanRoutes = require("./routes/tingkatKesulitanRoutes")
const PORT = process.env.PORT || 4000

 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

// middleware
app.use(express.json());
app.use(express.urlencoded());

//Routes
app.get('/', (req, res) => {
  res.json("Home");
});
app.use("/api/mapel", mapelRoutes)
app.use("/api/bab_soal", babSoalRoutes)
app.use("/api/kelas", kelasRoutes)
app.use("/api/tingkat_kesulitan", tingkatKesulitanRoutes)

 
//Server listening
app.listen(PORT,() =>{
  console.log(`Server started on port ${PORT}...`);
});

