var exec = require('child_process').exec;
var path = require('path');

// Exemplo de parametros
//       origem -> finding-dory-xlarge.jpg
//      destino -> ../novoDory
//   tamanhoMax -> 200
//    jsonCorte -> {x : 180, y : 150, h : 300, w : 350}  - (opcional)
// jsonTamanhos -> {"thumb": 50, "medio":0.5}            - (opcional)
//     callback -> function (error, stdout, stderr)      - (opcional)
function imgJar(origem, destino, tamanhoMax, jsonCorte, jsonTamanhos, callback){
	if(typeof tamanhoMax === 'function'){
		callback = tamanhoMax;
		tamanhoMax = undefined;
	}
	var comando = 'java -jar "' + path.join(__dirname, 'img-jar.jar') + '" "' +
	origem + '" "' + destino + '" "' + tamanhoMax + '"';
	if(jsonCorte || jsonCorte == null) comando += ' "' + JSON.stringify(jsonCorte) + '"';
	if(jsonTamanhos || jsonTamanhos == null) comando += ' "' + JSON.stringify(jsonTamanhos) + '"';
	console.log(comando);
	exec(comando, callback);
}

module.exports = imgJar;
