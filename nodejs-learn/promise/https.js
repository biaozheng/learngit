var https = require('https')

var fs = require('fs')

varv options = {
	key : fs.readFileSync('ssh_key.pem'),
	cert : fs.readFileSync('ssh_cret.pem')
}

https
	.createServer(options, function(req, res){
		res.writeHead(200)
		res.end('Hello Https')
	})
	.listen(8090)