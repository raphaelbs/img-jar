var exec = require('child_process').exec;
var path = require('path');

// Exemplo de parametros
//       origem -> finding-dory-xlarge.jpg
//      destino -> ../novoDory
//    jsonCorte -> {x : 180, y : 150, h : 300, w : 350}
// jsonTamanhos -> {"thumb": 50, "medio":0.5}            - (opcional)
//     callback -> function (error, stdout, stderr)      - (opcional)
function imgJar(origem, destino, jsonCorte, jsonTamanhos, callback){
	if(typeof jsonTamanhos === 'function'){
		callback = jsonTamanhos;
		jsonTamanhos = undefined;
	}
	var comando = 'java -jar "' + path.join(__dirname, 'img-jar.jar') + '"' + origem + '" "' + destino + '" "' + JSON.stringify(jsonCorte) + '"';
	if(jsonTamanhos) comando += ' "' + JSON.stringify(jsonTamanhos) + '"';
	console.log(comando);
	exec(comando, callback);
}

module.exports = imgJar;
