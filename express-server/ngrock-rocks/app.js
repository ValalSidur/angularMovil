/*
	1. npm install 
	2. node app.js
*/

var express = require('ngrok'), cors = require('cors');
var app = express();

await express.authtoken("2HJeMfCj5YM3a8KLMj2DpLdM6n7_yxyn5phj1yXBxfiw4Ung");

(async function() {
  const url = await ngrok.connect();
  console.log(url);
})();

app.use(express.json());
app.use(cors());
app.listen(8000, () => console.log("Server running on port 8000"));

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