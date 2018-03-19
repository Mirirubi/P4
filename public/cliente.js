var socket = io.connect();

socket.on('connect', function(datos) {
	alertify.prompt( '¿Cuál es tu nickname?',function (e, nickname) {
	if (e) {
		socket.emit('unir',nickname);
		socket.nickname = nickname;
		alertify.success("Bienvenido "+nickname);
	
	} else {
		alertify.error("No has introducido un nickname");
		socket.nickname = "Anonymus";
		socket.emit('unir',socket.nickname);
		
	}
	},"Nickname");

});


socket.on('borrar',function(nombre){
	$('#chat').append(nombre+' se ha desconectado\n');
});

socket.on('unir',function(nombre){
	$('#chat').append(nombre+' se ha unido\n');
});

socket.on('mensajes',function(datos){
	$('#chat').append(datos.info+'\n');
});

$(document).ready(function (){
	$('.enviar').on('click',function(e){
		var mensaje = socket.nickname+': '+$('.mensaje').val();
		socket.emit('mensajes',{info: mensaje});
		$('#chat').append(mensaje+'\n');
		$('.mensaje').val('');
	});
	$('.mensaje').keypress(function (e) {
	  if (e.which == 13) {
		var mensaje = socket.nickname+': '+$('.mensaje').val();
		socket.emit('mensajes',{info: mensaje});
		$('#chat').append(mensaje+'\n');
		$('.mensaje').val('');
	  }
	});
});