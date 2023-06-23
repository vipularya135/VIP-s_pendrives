var http = require('http');
var fs = require('fs');
console.log(__dirname);
function onRequest(req,res)
{
if (req.url ===
'/index.html' || req.url ===
'/') {
fs.readFile('./index.html',
function (error, data) {
if (error) {
res.writeHead(404);
res.write('File Not Found');
} else {
res.writeHead(200, { "Content-Type":
"text/html" });
res.write(data);
}
res.end();
});
}
else if (req.url === '/style.css') {
res.setHeader('Content-type', 'text/css');
res.write(fs.readFileSync('./style.css'));
res.end();
}
else if(req.url === '/script.js'){
res.setHeader('Content-type', 'text/js');
res.write(fs.readFileSync('./script.js'));
res.end();
}
else {
res.write("invalid request")
res.end();
}
}
http.createServer(onRequest).listen(3000);