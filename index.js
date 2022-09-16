var saiTexto;
var entraTexto= document.createElement("entraTexto");
var tamanho;
var caractere=0;



var botaoCripto=document.getElementById('botaoCripto')
var botaoDescripto=document.getElementById('botaoDescripto')
var botaoCopia=document.getElementById('botaoCopia')

botaoCripto.addEventListener('click', fncripto)
botaoDescripto.addEventListener('click', fndescripto)
botaoCopia.addEventListener('click', fncopia)


function fncripto(){
	document.getElementById("imagemcripto").style.display = "none";
	entraTexto=document.getElementById("entraTexto").value;
	saiTexto=entraTexto;
			saiTexto=saiTexto.replace(/e/g,"enter");
			saiTexto=saiTexto.replace(/i/g,"imes");
			saiTexto=saiTexto.replace(/a/g,"ai");
			saiTexto=saiTexto.replace(/o/g,"ober");
			saiTexto=saiTexto.replace(/u/g,"ufat");
	document.getElementById("saiTexto").innerHTML = saiTexto;
	return
}
function fndescripto(){
		document.getElementById("imagemcripto").style.display = "none";

	entraTexto=document.getElementById("entraTexto").value;
	saiTexto=entraTexto;
			saiTexto=saiTexto.replace(/ufat/g,"u");
			saiTexto=saiTexto.replace(/ober/g,"o");
			saiTexto=saiTexto.replace(/ai/g,"a");
			saiTexto=saiTexto.replace(/imes/g,"i");
			saiTexto=saiTexto.replace(/enter/g,"e");
	document.getElementById("saiTexto").innerHTML = saiTexto;
	return

}

function fncopia(){
	var copia = document.getElementById('saiTexto');
    
    copia.select();
    document.execCommand('copy');
	alert("Copiado");
	return
}
