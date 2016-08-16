# img-jar

An embeed java image processor to crop and create resized images.

### Installation

```sh
$ npm install --save img-jar
```

### Usage

```javascript
var imgJar = require('img-jar');
var path = require('path');

function callback(error, stdout, stderr){ 
	if(error || stderr){
		console.error('Erro:\n' + error || stderr);
	}else{
		console.log(stdout);
	}
};

// Crop only
imgJar(__dirname + '\\finding-dory-xlarge.jpg', // origin
	__dirname + '\\dory', // destination
	{x : 180, y : 150, h : 300, w : 350}, // crop parameters
	callback); //callback
		
// Crop and resizes
imgJar(__dirname + '\\finding-dory-xlarge.jpg', // origin
	__dirname + '\\dory', // destination
	{x : 180, y : 150, h : 300, w : 350}, // crop parameters
	{small : 100, // resize the dory image to 100 pixels max (dory-small.jpg)
	  thumb : 150, // resize the dory image to 150 pixels max (dory-thumb.jpg)
	  half: 0.5}, // resize the dory image to half (dory-half.jpg)
	callback); //callback
```

# Contact-me
* [Email](mailto:raphael.b.souza@hotmail.com)
* [Facebook](https://facebook.com/raphaelbs)
* [GitHub](https://github.com/raphaelbs)
* [NPM](https://npmjs.com/~ralpha)

# License 
MIT