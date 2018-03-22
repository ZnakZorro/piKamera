#!/usr/local/bin/node
"use strict";
const http = require('http');
const spawn = require('child_process').spawn;
const server = http.createServer();

function klik(req, res) {
	const args = ['-rot','180','-w','1200','-h','800','-a','12','-t','1','-q','95','--thumb','none','-mm','matrix','-drc','high','-n','-o','-'];  
	const proc = spawn('raspistill', args);
	proc.stdout.pipe(res);
}

server.on('request', (req, res) => {
	if (req.url === '/') 	{klik(req, res);} 
	else {res.end('Ok');}
});

server.listen(3333,function(){});
