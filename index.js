var saiTexto 
var entraTexto = document.getElementById("entraTexto")



var botaoCripto=document.getElementById('botaoCripto')
var botaoDescripto=document.getElementById('botaoDescripto')
var botaoCopia=document.getElementById('botaoCopia')

botaoCripto.addEventListener('click', fncripto)
botaoDescripto.addEventListener('click', fndescripto)
botaoCopia.addEventListener('click', fncopia)


function fncripto(){
	//alert(entraTexto.value);
	saiTexto="descripto";
	document.getElementById("saiTexto").innerHTML = saiTexto;
	return
}
function fndescripto(){
	alert(saiTexto.value);
	return
}

function fncopia(){
	alert("Copia");
	return
}
