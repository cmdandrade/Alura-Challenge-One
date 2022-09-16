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
	entraTexto=document.getElementById("entraTexto").value;
	saiTexto=entraTexto;
	tamanho=(entraTexto.length);
	while(caractere<=tamanho){
		if(entraTexto[caractere]=="a"){
			saiTexto=saiTexto.replace("a","ai");
			caractere++;	
			console.log(caractere);
			}
		else{caractere++; console.log(caractere)}
	}
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
