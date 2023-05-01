import fs from 'fs';
import http from 'http';
import url from 'url';

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	let path = url.parse(req.url).pathname;
	if (path === '/') path = '/index';
	try {
		const html = fs.readFileSync('.' + path + '.html');
		res.write(html);
	} catch {
		res.writeHead(404);
		res.write(fs.readFileSync('./404.html'));
	}
	res.end();
}).listen(8080, () => {
	console.log('listening on http://localhost:8080...');
});
