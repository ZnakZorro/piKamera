#!/usr/local/bin/node
"use strict";
const http = require('http');
const spawn = require('child_process').spawn;
const server = http.createServer();
function klik(req, res, typ) {
	let args = [];  
	if (typ===0) args = ['-rot','180','-w','800','-h','600','-t','1','-q','95','--thumb','none','-mm','matrix','-drc','high','-n','-o','-'];  
	if (typ===1) args = ['-rot','180','-w','800','-h','600','-a','92','-t','1','-q','95','--thumb','none','-mm','matrix','-drc','high','-n','-o','-'];  
	const proc = spawn('raspistill', args);
	proc.stdout.pipe(res);
}
server.on('request', (req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		klik(req, res, 1);
	} 
	else if (req.url === '/klik') {
		klik(req, res, 0);
	} 
	else if (req.url === '/test') {
		klik(req, res, 1);
	} 
	else {res.end('Ok');}
});
server.listen(3333,function(){console.log(':3333')});
