$(document).ready(function(){
	$('.expandir1').on('click',function(){		
		if($('#oculto2').length){
			$('#oculto2').remove();
		}
		if($('#oculto3').length){
			$('#oculto3').remove();
		}
		if($('#oculto1').length){
			$('#oculto1').remove();
		}else{
			$.get('/productos/imac',push1);
		}		
	});
});

$(document).ready(function(){
	$('.expandir2').on('click',function(){
		if($('#oculto1').length){
			$('#oculto1').remove();
		}
		if($('#oculto3').length){
			$('#oculto3').remove();
		}
		if($('#oculto2').length){
			$('#oculto2').remove();
		}else{
			$.get('/productos/portatil',push2);
		}		
	});
});	

$(document).ready(function(){
	$('.expandir3').on('click',function(){
		if($('#oculto1').length){
			$('#oculto1').remove();
		}
		if($('#oculto2').length){
			$('#oculto2').remove();
		}
		if($('#oculto3').length){
			$('#oculto3').remove();
		}else{
			$.get('/productos/mando',push3);
		}		
	});
});
	
function push1(datos){
	var nuevo=$('<div class="container" id="oculto1"><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><h4>'+datos['Modelo']+'</h4></div><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><p>Precio: '+datos['Precio']+'</p></div><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><p>Stock: '+datos['Stock']+'</p></div></div>');
	$('.product-1').append(nuevo);
}
function push2(datos){
	var nuevo=$('<div class="container" id="oculto2"><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><h4>'+datos['Modelo']+'</h4></div><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><p>Precio: '+datos['Precio']+'</p></div><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><p>Stock: '+datos['Stock']+'</p></div></div>');
	$('.product-2').append(nuevo);
}
function push3(datos){
	var nuevo=$('<div class="container" id="oculto3"><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><h4>'+datos['Modelo']+'</h4></div><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><p>Precio: '+datos['Precio']+'</p></div><div class="row mb-3 rounded mx-auto d-block" style="text-align:center;"><p>Stock: '+datos['Stock']+'</p></div></div>');
	$('.product-3').append(nuevo);
}