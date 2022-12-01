/*
	1. npm install 
	2. node app.js
*/

var express = require("express"), cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));

var noticias = [
	"Literatura Paris", "Futbol Barcelona", "Futbol Barraquilla", "Politica Motevideo", "Economía Santiago de Chile", "Cocina México DF", "Finanzas Nueva York"
];

app.get("/get", (req, res, next) => {
	console.log(noticias);
	console.log(req.query.q);
	if(req.query.q.length > 0) {
		res.json(noticias.filter((c) => c.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1));
	}
	else
		res.json(noticias);
});

var misFavoritos = [];
app.get("/favs", (req, res,next) => res.json(misFavoritos));
app.post("/favs",(req,res,next) => {
	console.log(req.body);
	misFavoritos.push(req.body.nuevo);
	res.json(misFavoritos);
})