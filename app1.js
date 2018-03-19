var express = require('express');
var port = process.env.PORT || 8080;
var app=express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'));


app.get('/',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/about',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'about.html'));
});

app.get('/productos',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'productos.html'));
});
app.get('/contacto',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'contacto.html'));
});
app.get('/chat',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'chat.html'));
});

app.post('/contacto2',parseUrlencoded,function(request,response){
	var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var genero = request.body.genero;
    var edad = request.body.edad;
	var ciudad = request.body.ciudad;
	var provincia = request.body.provincia;
	var codigo = request.body.codigo;
    var email = request.body.email;
    var direccion = request.body.direccion;

    response.render('contacto',{
		nombre: nombre,
		apellido: apellido,
		genero: genero,
		edad: edad,
		ciudad: ciudad,
		provincia: provincia,
		codigo: codigo,
		email: email,
		direccion: direccion
	});
});
app.get('/productos/mando',function(request,response){
	var articulo = {'Modelo':'Mando inalámbrico-Sony PS4','dir': '/1_large.png','Precio':'59.99€','Stock':'Disponible'};
	response.json(articulo);
});

app.get('/productos/portatil',function(request,response){
	var articulo = {'Modelo':'ASUS Transformer Book T101HA','dir': '/3_large.png','Precio':'659.99€','Stock':'No Disponible'};
	response.json(articulo);
});

app.get('/productos/imac',function(request,response){
	var articulo = {'Modelo':'Apple iMac','dir': '/2_large.png','Precio':'1250.99€','Stock':'Disponible'};
	response.json(articulo);
});

io.on('connection', function(client) {
	client.on('unir',function(nombre){
		client.nickname = nombre;
		client.broadcast.emit('unir', client.nickname);
	});
	client.on('disconnect', function(){
		client.broadcast.emit('borrar', client.nickname);
	});
	client.on('mensajes', function(datos){
		client.broadcast.emit('mensajes', datos);
	});
});


server.listen(port);